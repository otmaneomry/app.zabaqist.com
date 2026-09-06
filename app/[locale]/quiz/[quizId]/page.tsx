'use client'

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
  const router = useRouter()
  const { quizId } = use(params)
  const user = useUserStore(state => state.user)
  const isAuthenticated = useUserStore(state => state.isAuthenticated)
  const { setQuiz, currentQuiz } = useQuizStore()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Load quiz data from mock API (no auth required)
    loadQuizData()
  }, [quizId])

  const loadQuizData = async () => {
    try {
      setLoading(true)

      // No auth token required for mock API
      const response = await quizApi.fetchAll(null)
      const quiz = response.quizzes.find((q: any) => q.id === parseInt(quizId))

      if (quiz) {
        setQuiz(quiz)
      } else {
        setError(`Quiz non trouvé (ID: ${quizId})`)
      }
    } catch (err: any) {
      console.error('Error loading quiz:', err)
      setError(err.message || 'Erreur lors du chargement du quiz')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container size="md" py="xl">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <div style={{ textAlign: 'center' }}>
            <Loader color="teal" size="lg" />
            <Text mt="md" c="dimmed">
              Chargement du quiz...
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
            Le quiz n'a pas pu être chargé. Veuillez rafraîchir la page.
          </Text>
        </Card>
      </Container>
    )
  }

  return <QuizPlayer quizId={parseInt(quizId)} />
}
