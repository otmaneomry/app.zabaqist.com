'use client'

import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'
import { Card, Text, Stack, Button, Badge, Group, Progress, Divider, Alert } from '@mantine/core'
import { IconCheck, IconClock, IconPencil, IconEye, IconEyeOff, IconBulb } from '@tabler/icons-react'
import MathContent from '@/components/math/MathContent'
import SimpleMathInput from '@/components/input/SimpleMathInput'
import { markHomeworkStarted, markHomeworkCompleted } from '@/lib/progressTracking'

interface Question {
  id: number
  question: string
  points: number
  type: 'calculation' | 'proof' | 'application'
  solution?: string // Solution/answer in LaTeX format
  hint?: string // Optional hint for the solution
}

interface DevoirProps {
  title: string
  dueDate?: string
  duration?: string
  totalPoints: number
  questions: Question[]
  instructions?: string
  courseId?: string
}

export default function DevoirAssignment({
  title,
  dueDate,
  duration,
  totalPoints,
  questions,
  instructions,
  courseId = 'fonctions-logarithmiques'
}: DevoirProps) {
  const t = useTranslations('homework')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  // Track when homework is started (first answer typed)
  useEffect(() => {
    const answeredQuestions = Object.keys(answers).filter(key => answers[Number(key)].trim().length > 0)
    if (answeredQuestions.length > 0) {
      markHomeworkStarted(courseId)
    }
  }, [answers, courseId])

  // Track when homework is submitted
  useEffect(() => {
    if (submitted) {
      markHomeworkCompleted(courseId)
    }
  }, [submitted, courseId])

  const calculateProgress = () => {
    const answeredQuestions = Object.keys(answers).filter(key => answers[Number(key)].trim().length > 0).length
    return (answeredQuestions / questions.length) * 100
  }

  const questionTypeColors = {
    'calculation': 'blue',
    'proof': 'purple',
    'application': 'orange'
  }

  const questionTypeLabels = {
    'calculation': 'Calcul',
    'proof': 'Démonstration',
    'application': 'Application'
  }

  return (
    <Card shadow="lg" padding="xl" radius="md" withBorder>
      <Stack gap="lg">
        {/* Header */}
        <div>
          <Group justify="space-between" mb="sm">
            <Text size="xl" fw={700} c="mint">
              {title}
            </Text>
            <Badge size="lg" color="mint">
              {totalPoints} points
            </Badge>
          </Group>

          <Group gap="md">
            {dueDate && (
              <Group gap="xs">
                <IconClock size={16} color="gray" />
                <Text size="sm" c="dimmed">
                  À rendre le : {dueDate}
                </Text>
              </Group>
            )}
            {duration && (
              <Badge variant="light" color="blue">
                Durée : {duration}
              </Badge>
            )}
          </Group>
        </div>

        {/* Instructions */}
        {instructions && (
          <Card bg="blue.0" p="md" radius="md">
            <Text fw={600} mb="xs">
              {t('instructions')}
            </Text>
            <Text size="sm">{instructions}</Text>
          </Card>
        )}

        {/* Progress */}
        {!submitted && (
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500}>
                {t('progress')}
              </Text>
              <Text size="sm" c="dimmed">
                {Object.keys(answers).filter(key => answers[Number(key)].trim().length > 0).length} / {questions.length} questions
              </Text>
            </Group>
            <Progress value={calculateProgress()} color="mint" size="lg" radius="xl" />
          </div>
        )}

        {/* Questions */}
        <Stack gap="md">
          {questions.map((q) => (
            <Card key={q.id} bg={submitted ? 'gray.0' : 'white'} p="lg" radius="md" withBorder>
              <Stack gap="md">
                <Group justify="space-between">
                  <Group gap="sm">
                    <Text fw={700} c="mint">
                      Question {q.id}
                    </Text>
                    <Badge color={questionTypeColors[q.type]} variant="light" size="sm">
                      {questionTypeLabels[q.type]}
                    </Badge>
                  </Group>
                  <Badge color="gray" variant="outline">
                    {q.points} pts
                  </Badge>
                </Group>

                <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                  <MathContent>{q.question}</MathContent>
                </div>

                <SimpleMathInput
                  value={answers[q.id] || ''}
                  onChange={(latex) => handleAnswerChange(q.id, latex)}
                  placeholder={t('answerPlaceholder')}
                  disabled={submitted}
                  showPreview={true}
                  minRows={3}
                />

                {/* Show solution after submission if available and toggle is on */}
                {submitted && showSolutions && q.solution && (
                  <>
                    <Divider label={t('solution')} labelPosition="center" mt="md" />

                    <Card bg="teal.0" p="md" radius="md">
                      <Stack gap="sm">
                        <Group gap="xs">
                          <IconBulb size={20} color="mint" />
                          <Text fw={600} c="mint">
                            {t('expected')}
                          </Text>
                        </Group>

                        <Card bg="white" p="sm" radius="sm">
                          <MathContent>{q.solution}</MathContent>
                        </Card>

                        {q.hint && (
                          <Alert color="blue" variant="light" icon={<IconBulb size={16} />}>
                            <Text size="sm">{q.hint}</Text>
                          </Alert>
                        )}
                      </Stack>
                    </Card>
                  </>
                )}
              </Stack>
            </Card>
          ))}
        </Stack>

        {/* Submit Button */}
        {!submitted ? (
          <Button
            size="lg"
            color="mint"
            leftSection={<IconPencil size={20} />}
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length === 0}
          >
            {t('submit')}
          </Button>
        ) : (
          <Stack gap="md">
            <Card bg="green.0" p="lg" radius="md">
              <Group gap="md">
                <IconCheck size={32} color="green" />
                <div>
                  <Text fw={700} c="green" size="lg">
                    {t('submitted')}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {t('teacherNote')}
                  </Text>
                </div>
              </Group>
            </Card>

            {/* Toggle solutions button if any question has a solution */}
            {questions.some(q => q.solution) && (
              <Button
                size="md"
                variant={showSolutions ? "filled" : "light"}
                color="mint"
                leftSection={showSolutions ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                onClick={() => setShowSolutions(!showSolutions)}
              >
                {showSolutions ? 'Masquer les solutions' : 'Afficher les solutions'}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}
