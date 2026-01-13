'use client'

import React from 'react'
import { Card, Text, Stack, Checkbox, Radio, Group } from '@mantine/core'

export interface Response {
  id: number
  text: string
  correct_answer?: number
}

export interface Question {
  id: number
  text: string
  type: string
  points: number
  responses: Response[]
  allow_multiple?: boolean
}

interface MultipleChoiceQuestionProps {
  question: Question
  selectedResponses: number[]
  onResponseToggle: (responseId: number) => void
  showResults?: boolean
}

export default function MultipleChoiceQuestion({
  question,
  selectedResponses,
  onResponseToggle,
  showResults = false
}: MultipleChoiceQuestionProps) {
  const allowMultiple = question.allow_multiple || question.responses.filter(r => r.correct_answer === 1).length > 1

  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Stack gap="lg">
        {/* Question Text */}
        <div>
          <Group justify="space-between" mb="sm">
            <Text size="sm" c="dimmed" fw={500}>
              QUESTION {question.id}
            </Text>
            <Text size="sm" c="teal" fw={600}>
              {question.points} points
            </Text>
          </Group>
          <Text size="lg" fw={500} mb="md">
            {question.text}
          </Text>
        </div>

        {/* Response Options */}
        <Stack gap="sm">
          {question.responses.map((response) => {
            const isSelected = selectedResponses.includes(response.id)
            const isCorrect = response.correct_answer === 1

            let backgroundColor = 'white'
            let borderColor = '#e5e7eb'

            if (showResults) {
              if (isCorrect) {
                backgroundColor = '#d1fae5' // Light green
                borderColor = '#10b981' // Green
              } else if (isSelected && !isCorrect) {
                backgroundColor = '#fee2e2' // Light red
                borderColor = '#ef4444' // Red
              }
            } else if (isSelected) {
              backgroundColor = '#e0f2f1' // Light teal
              borderColor = '#2CB0A1' // Teal
            }

            return (
              <Card
                key={response.id}
                padding="md"
                radius="md"
                style={{
                  backgroundColor,
                  border: `2px solid ${borderColor}`,
                  cursor: showResults ? 'default' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => !showResults && onResponseToggle(response.id)}
              >
                <Group gap="md">
                  {allowMultiple ? (
                    <Checkbox
                      checked={isSelected}
                      onChange={() => !showResults && onResponseToggle(response.id)}
                      color="teal"
                      disabled={showResults}
                      styles={{
                        input: {
                          cursor: showResults ? 'default' : 'pointer'
                        }
                      }}
                    />
                  ) : (
                    <Radio
                      checked={isSelected}
                      onChange={() => !showResults && onResponseToggle(response.id)}
                      color="teal"
                      disabled={showResults}
                      styles={{
                        radio: {
                          cursor: showResults ? 'default' : 'pointer'
                        }
                      }}
                    />
                  )}
                  <Text size="md" style={{ flex: 1 }}>
                    {response.text}
                  </Text>
                  {showResults && isCorrect && (
                    <Text c="green" fw={600} size="sm">
                      ✓ Correct
                    </Text>
                  )}
                  {showResults && isSelected && !isCorrect && (
                    <Text c="red" fw={600} size="sm">
                      ✗ Incorrect
                    </Text>
                  )}
                </Group>
              </Card>
            )
          })}
        </Stack>

        {allowMultiple && !showResults && (
          <Text size="sm" c="dimmed" ta="center">
            Sélectionnez toutes les réponses correctes
          </Text>
        )}
      </Stack>
    </Card>
  )
}
