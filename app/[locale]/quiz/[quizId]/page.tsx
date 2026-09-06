'use client'

import { useTranslations } from 'next-intl'
import React, { use, useEffect, useState } from 'react'
import { useQuizStore } from '@/stores/useQuizStore'
import { useUserStore } from '@/stores/useUserStore'
import { useRouter } from 'next/navigation'
import { quizApi } from '@/lib/api'
import QuizPlayer from '@/components/quiz/QuizPlayer'
import { Container, Card, Text, Loader } from '@mantine/core'

interface QuizPageProps {
  params: Promise<{
    quizId: string
  }>
}

export default function QuizPage({ params }: QuizPageProps) {
  const t = useTranslations('quiz')
  const router = useRouter()
  const { quizId } = use(params)
  const user = useUserStore(state => state.user)
  const isAuthenticated = useUserStore(state => state.isAuthenticated)
  const { setQuiz, currentQuiz } = useQuizStore()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Declared inside the effect, not above it: this loader has exactly one
  // caller and the effect used to reach it before its own `const`, so the
  // binding was in the temporal dead zone at the moment it was read.
  useEffect(() => {
    let cancelled = false

    const loadQuizData = async () => {
      try {
        setLoading(true)
        // No auth token required for mock API.
        const response = await quizApi.fetchAll(null)
        const quiz = response.quizzes.find(
          (q: any) => q.id === parseInt(quizId),
        )
        if (cancelled) return

        if (quiz) {
          setQuiz(quiz)
        } else {
          setError(`Quiz non trouvé (ID: ${quizId})`)
        }
      } catch (err: any) {
        if (cancelled) return
        setError(err.message || t('loadError'))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadQuizData()
    // A quizId change mid-flight must not let the stale response win.
    return () => {
      cancelled = true
    }
  }, [quizId, setQuiz, t])

  if (loading) {
    return (
      <Container size="md" py="xl">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <div style={{ textAlign: 'center' }}>
            <Loader color="mint" size="lg" />
            <Text mt="md" c="dimmed">
              {t('loading')}
            </Text>
          </div>
        </Card>
      </Container>
    )
  }

  if (error) {
    return (
      <Container size="md" py="xl">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Text ta="center" c="red">
            {error}
          </Text>
        </Card>
      </Container>
    )
  }

  if (!currentQuiz) {
    return (
      <Container size="md" py="xl">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Text ta="center" c="dimmed">
            {t('loadFailed')}
          </Text>
        </Card>
      </Container>
    )
  }

  return <QuizPlayer quizId={parseInt(quizId)} />
}
