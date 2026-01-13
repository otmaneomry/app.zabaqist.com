'use client'

import React, { useState } from 'react'
import { Card, Text, Stack, Button, Badge, Group, Progress, Textarea } from '@mantine/core'
import { IconCheck, IconClock, IconPencil } from '@tabler/icons-react'
import MathContent from '@/components/math/MathContent'

interface Question {
  id: number
  question: string
  points: number
  type: 'calculation' | 'proof' | 'application'
}

interface DevoirProps {
  title: string
  dueDate?: string
  duration?: string
  totalPoints: number
  questions: Question[]
  instructions?: string
}

export default function DevoirAssignment({
  title,
  dueDate,
  duration,
  totalPoints,
  questions,
  instructions
}: DevoirProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

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
            <Text size="xl" fw={700} c="teal">
              {title}
            </Text>
            <Badge size="lg" color="teal">
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
              Instructions :
            </Text>
            <Text size="sm">{instructions}</Text>
          </Card>
        )}

        {/* Progress */}
        {!submitted && (
          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500}>
                Progression
              </Text>
              <Text size="sm" c="dimmed">
                {Object.keys(answers).filter(key => answers[Number(key)].trim().length > 0).length} / {questions.length} questions
              </Text>
            </Group>
            <Progress value={calculateProgress()} color="teal" size="lg" radius="xl" />
          </div>
        )}

        {/* Questions */}
        <Stack gap="md">
          {questions.map((q) => (
            <Card key={q.id} bg={submitted ? 'gray.0' : 'white'} p="lg" radius="md" withBorder>
              <Stack gap="md">
                <Group justify="space-between">
                  <Group gap="sm">
                    <Text fw={700} c="teal">
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

                <div>
                  <MathContent block={q.question.includes('\\')}>{q.question}</MathContent>
                </div>

                <Textarea
                  placeholder="Écrivez votre réponse ici..."
                  minRows={4}
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  disabled={submitted}
                  styles={{
                    input: {
                      fontFamily: 'monospace',
                      fontSize: '14px'
                    }
                  }}
                />
              </Stack>
            </Card>
          ))}
        </Stack>

        {/* Submit Button */}
        {!submitted ? (
          <Button
            size="lg"
            color="teal"
            leftSection={<IconPencil size={20} />}
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length === 0}
          >
            Soumettre le devoir
          </Button>
        ) : (
          <Card bg="green.0" p="lg" radius="md">
            <Group gap="md">
              <IconCheck size={32} color="green" />
              <div>
                <Text fw={700} c="green" size="lg">
                  Devoir soumis avec succès !
                </Text>
                <Text size="sm" c="dimmed">
                  Votre professeur corrigera votre travail prochainement.
                </Text>
              </div>
            </Group>
          </Card>
        )}
      </Stack>
    </Card>
  )
}
