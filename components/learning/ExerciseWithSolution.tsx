'use client'

import React, { useState } from 'react'
import { Card, Text, Stack, Button, Collapse, Stepper, Badge, Group } from '@mantine/core'
import { IconCheck, IconBulb, IconEye } from '@tabler/icons-react'
import MathContent from '@/components/math/MathContent'

interface Step {
  title: string
  content: string
  explanation?: string
}

interface ExerciseProps {
  number: number
  question: string
  hint?: string
  steps: Step[]
  finalAnswer: string
  difficulty?: 'Facile' | 'Moyen' | 'Difficile'
}

export default function ExerciseWithSolution({
  number,
  question,
  hint,
  steps,
  finalAnswer,
  difficulty = 'Moyen'
}: ExerciseProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const difficultyColors = {
    'Facile': 'green',
    'Moyen': 'yellow',
    'Difficile': 'red'
  }

  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder mb="lg">
      <Stack gap="md">
        {/* Header */}
        <Group justify="space-between">
          <Text size="lg" fw={700} c="teal">
            Exercice {number}
          </Text>
          <Badge color={difficultyColors[difficulty]} variant="light">
            {difficulty}
          </Badge>
        </Group>

        {/* Question */}
        <Card bg="blue.0" p="md" radius="md">
          <Text fw={500} mb="sm">
            Énoncé :
          </Text>
          <MathContent block={question.includes('\\')}>{question}</MathContent>
        </Card>

        {/* Hint Button */}
        {hint && (
          <>
            <Button
              variant="light"
              color="orange"
              leftSection={<IconBulb size={16} />}
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? 'Masquer l\'indice' : 'Voir un indice'}
            </Button>
            <Collapse in={showHint}>
              <Card bg="orange.0" p="md" radius="md">
                <Group gap="xs" mb="xs">
                  <IconBulb size={20} color="orange" />
                  <Text fw={600} c="orange">
                    Indice :
                  </Text>
                </Group>
                <Text>{hint}</Text>
              </Card>
            </Collapse>
          </>
        )}

        {/* Solution Button */}
        <Button
          variant="filled"
          color="teal"
          leftSection={<IconEye size={16} />}
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Masquer la solution' : 'Voir la solution détaillée'}
        </Button>

        {/* Solution Steps */}
        <Collapse in={showSolution}>
          <Card bg="gray.0" p="lg" radius="md">
            <Text size="lg" fw={700} mb="lg" c="teal">
              Solution détaillée
            </Text>

            <Stepper active={activeStep} onStepClick={setActiveStep} orientation="vertical">
              {steps.map((step, index) => (
                <Stepper.Step
                  key={index}
                  label={step.title}
                  description={
                    <Stack gap="sm" mt="sm">
                      <div>
                        <MathContent block={step.content.includes('\\')}>{step.content}</MathContent>
                      </div>
                      {step.explanation && (
                        <Card bg="blue.0" p="sm" radius="sm">
                          <Text size="sm" c="dimmed">
                            💡 {step.explanation}
                          </Text>
                        </Card>
                      )}
                    </Stack>
                  }
                  completedIcon={<IconCheck size={16} />}
                />
              ))}
            </Stepper>

            {/* Final Answer */}
            <Card bg="green.0" p="md" radius="md" mt="xl">
              <Text fw={700} mb="sm" c="green">
                Réponse finale :
              </Text>
              <MathContent block={finalAnswer.includes('\\')}>{finalAnswer}</MathContent>
            </Card>

            {/* Navigation Buttons */}
            <Group justify="space-between" mt="lg">
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
              >
                Étape précédente
              </Button>
              <Button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                color="teal"
              >
                Étape suivante
              </Button>
            </Group>
          </Card>
        </Collapse>
      </Stack>
    </Card>
  )
}
