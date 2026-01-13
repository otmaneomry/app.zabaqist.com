'use client'

import { useState } from 'react'
import { quizApi } from '@/lib/api'
import { Container, Card, Title, Button, Text, Stack } from '@mantine/core'

export default function TestQuizPage() {
  const [quizzes, setQuizzes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const testAPI = async () => {
    try {
      setLoading(true)
      setError('')
      console.log('🧪 Testing Mock API...')

      const response = await quizApi.fetchAll(null)
      console.log('✅ API Response:', response)

      setQuizzes(response.quizzes || [])
    } catch (err: any) {
      console.error('❌ Error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container size="md" py="xl">
      <Card shadow="md" padding="xl" radius="md">
        <Title order={2} mb="lg">
          Test Mock API
        </Title>

        <Button onClick={testAPI} loading={loading} color="teal" mb="xl">
          Tester l'API Mock
        </Button>

        {error && (
          <Text c="red" mb="md">
            Erreur: {error}
          </Text>
        )}

        {quizzes.length > 0 && (
          <Stack gap="md">
            <Title order={3}>Quizzes disponibles ({quizzes.length})</Title>
            {quizzes.map((quiz) => (
              <Card key={quiz.id} padding="md" withBorder>
                <Text fw={600}>ID: {quiz.id}</Text>
                <Text>Titre: {quiz.title}</Text>
                <Text size="sm" c="dimmed">
                  Questions: {quiz.questions?.length || 0}
                </Text>
                <Text size="sm" c="dimmed">
                  Durée: {quiz.duration_minutes} min
                </Text>
              </Card>
            ))}
          </Stack>
        )}
      </Card>
    </Container>
  )
}
