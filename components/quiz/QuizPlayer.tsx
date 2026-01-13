'use client'

import React, { useState } from 'react'
import { Container, Button, Text, Stack, Progress, Group, Card, Title } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/stores/useQuizStore'
import { useUserStore } from '@/stores/useUserStore'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import CountdownTimer from './CountdownTimer'

interface QuizPlayerProps {
  quizId: number
}

export default function QuizPlayer({ quizId }: QuizPlayerProps) {
  const router = useRouter()
  const user = useUserStore(state => state.user)
  const {
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    setCurrentQuestion,
    toggleResponse,
    calculateScore
  } = useQuizStore()

  const [showResults, setShowResults] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  // Note: No useEffect cleanup needed - parent component handles quiz lifecycle
  // React Strict Mode in dev causes double-mounting which would reset the quiz

  if (!currentQuiz) {
    console.error('❌ QuizPlayer: currentQuiz is null!')
    return (
      <Container size="md" py="xl">
        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Text ta="center" c="dimmed">
            Chargement du quiz...
          </Text>
        </Card>
      </Container>
    )
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex]
  const totalQuestions = currentQuiz.questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100
  const selectedResponses = userAnswers[currentQuestion.id] || []

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestion(currentQuestionIndex + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestion(currentQuestionIndex - 1)
    }
  }

  const handleTimeComplete = () => {
    handleSubmit()
  }

  const handleSubmit = async () => {
    const score = calculateScore()
    setFinalScore(score)
    setShowResults(true)

    // TODO: Submit to API
    // try {
    //   await quizApi.submitQuiz(user.token, {
    //     quiz_id: currentQuiz.id,
    //     answers: userAnswers,
    //     score: score,
    //     time_taken: currentQuiz.duration_minutes * 60 - timeRemaining
    //   })
    // } catch (error) {
    //   console.error('Error submitting quiz:', error)
    // }
  }

  const handleResponseToggle = (responseId: number) => {
    toggleResponse(currentQuestion.id, responseId)
  }

  if (showResults) {
    const totalPoints = currentQuiz.questions.reduce((sum, q) => sum + q.points, 0)
    const percentage = (finalScore / totalPoints) * 100

    return (
      <Container size="md" py="xl">
        <Card shadow="lg" padding="xl" radius="md" withBorder>
          <Stack gap="xl" align="center">
            <Title order={2} c="teal">
              Quiz Terminé !
            </Title>

            <div style={{ textAlign: 'center' }}>
              <Text size="6rem" fw={700} c="teal">
                {Math.round(percentage)}%
              </Text>
              <Text size="xl" c="dimmed" mt="md">
                {finalScore} / {totalPoints} points
              </Text>
            </div>

            <Stack gap="md" w="100%">
              {percentage >= 80 && (
                <Card bg="green.0" p="md" radius="md">
                  <Text c="green" fw={600} ta="center">
                    🎉 Excellent travail ! Vous maîtrisez le sujet !
                  </Text>
                </Card>
              )}
              {percentage >= 60 && percentage < 80 && (
                <Card bg="orange.0" p="md" radius="md">
                  <Text c="orange" fw={600} ta="center">
                    👍 Bon travail ! Continuez à vous améliorer !
                  </Text>
                </Card>
              )}
              {percentage < 60 && (
                <Card bg="red.0" p="md" radius="md">
                  <Text c="red" fw={600} ta="center">
                    💪 Continuez à pratiquer ! Vous progresserez !
                  </Text>
                </Card>
              )}
            </Stack>

            <Group gap="md" w="100%">
              <Button
                fullWidth
                variant="outline"
                color="teal"
                onClick={() => {
                  setShowResults(false)
                  setCurrentQuestion(0)
                }}
              >
                Voir les corrections
              </Button>
              <Button
                fullWidth
                color="teal"
                onClick={() => router.push('/courses')}
              >
                Retour aux cours
              </Button>
            </Group>
          </Stack>
        </Card>
      </Container>
    )
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="md">
            <div>
              <Text size="sm" c="dimmed" fw={500}>
                {currentQuiz.title}
              </Text>
              <Text size="xl" fw={700}>
                Question {currentQuestionIndex + 1} / {totalQuestions}
              </Text>
            </div>
          </Group>
          <Progress value={progress} color="teal" size="lg" radius="xl" />
        </Card>

        {/* Timer */}
        {currentQuiz.duration_minutes && (
          <CountdownTimer
            duration={currentQuiz.duration_minutes * 60}
            onComplete={handleTimeComplete}
          />
        )}

        {/* Question */}
        <MultipleChoiceQuestion
          question={currentQuestion}
          selectedResponses={selectedResponses}
          onResponseToggle={handleResponseToggle}
        />

        {/* Navigation */}
        <Group justify="space-between">
          <Button
            variant="outline"
            color="teal"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Précédent
          </Button>
          <Button
            color="teal"
            onClick={handleNext}
            disabled={selectedResponses.length === 0}
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}
