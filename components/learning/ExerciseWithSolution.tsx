'use client'

import React, { useState, useEffect } from 'react'
import { Card, Text, Stack, Button, Collapse, Stepper, Badge, Group, Alert } from '@mantine/core'
import { IconCheck, IconBulb, IconEye, IconX, IconAlertCircle } from '@tabler/icons-react'
import MathContent from '@/components/math/MathContent'
import SimpleMathInput from '@/components/input/SimpleMathInput'
import { validateAnswer, getContextualHint } from '@/lib/mathValidation'
import { markExerciseAttempted, markExerciseCompleted } from '@/lib/progressTracking'

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
  courseId?: string
  correctAnswer?: string  // LaTeX format for validation
  maxAttempts?: number
  points?: number
}

export default function ExerciseWithSolution({
  number,
  question,
  hint,
  steps,
  finalAnswer,
  difficulty = 'Moyen',
  courseId = 'fonctions-logarithmiques',
  correctAnswer,
  maxAttempts = 3,
  points = 10
}: ExerciseProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  // Answer validation states
  const [studentAnswer, setStudentAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [contextualHint, setContextualHint] = useState('')

  // Track when hint is viewed (exercise attempted)
  useEffect(() => {
    if (showHint) {
      markExerciseAttempted(courseId, number)
    }
  }, [showHint, courseId, number])

  // Track when solution is viewed (exercise completed)
  useEffect(() => {
    if (showSolution) {
      markExerciseCompleted(courseId, number)
    }
  }, [showSolution, courseId, number])

  // Mark as completed when answer is correct
  useEffect(() => {
    if (isCorrect) {
      markExerciseCompleted(courseId, number)
    }
  }, [isCorrect, courseId, number])

  const handleCheckAnswer = () => {
    if (!correctAnswer) {
      // No validation available, just show solution
      setShowSolution(true)
      return
    }

    const validation = validateAnswer(studentAnswer, correctAnswer)
    setAttempts(prev => prev + 1)
    markExerciseAttempted(courseId, number)

    if (validation.isCorrect) {
      setIsCorrect(true)
      setFeedback(validation.message)
      setContextualHint('')
    } else {
      setIsCorrect(false)
      setFeedback(validation.message)

      // Show contextual hint after wrong attempt
      const newHint = getContextualHint(studentAnswer, correctAnswer, hint)
      setContextualHint(newHint)

      // Auto-show solution after max attempts
      if (attempts + 1 >= maxAttempts) {
        setTimeout(() => {
          setShowSolution(true)
        }, 2000)
      }
    }
  }

  const difficultyColors = {
    'Facile': 'green',
    'Moyen': 'yellow',
    'Difficile': 'red'
  }

  const canAttempt = attempts < maxAttempts && !isCorrect

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
          <MathContent>{question}</MathContent>
          {points && (
            <Badge mt="sm" color="gray" variant="outline">
              {points} points
            </Badge>
          )}
        </Card>

        {/* Answer Input (if correctAnswer is provided) */}
        {correctAnswer && !isCorrect && (
          <>
            <SimpleMathInput
              value={studentAnswer}
              onChange={setStudentAnswer}
              label="Votre réponse:"
              placeholder="Entrez votre réponse en LaTeX..."
              disabled={!canAttempt}
              showPreview={true}
            />

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Tentative {attempts} / {maxAttempts}
              </Text>
              <Button
                color="teal"
                onClick={handleCheckAnswer}
                disabled={!studentAnswer.trim() || !canAttempt}
              >
                Vérifier la réponse
              </Button>
            </Group>

            {/* Feedback */}
            {feedback && (
              <Alert
                icon={isCorrect ? <IconCheck size={16} /> : <IconX size={16} />}
                color={isCorrect ? 'green' : 'red'}
                title={isCorrect ? 'Correct !' : 'Incorrect'}
              >
                {feedback}
              </Alert>
            )}

            {/* Contextual Hint */}
            {contextualHint && !isCorrect && (
              <Alert icon={<IconAlertCircle size={16} />} color="orange" title="Indice">
                {contextualHint}
              </Alert>
            )}
          </>
        )}

        {/* Success Message */}
        {isCorrect && (
          <Card bg="green.0" p="md" radius="md">
            <Group gap="md">
              <IconCheck size={32} color="green" />
              <div>
                <Text fw={700} c="green" size="lg">
                  Bravo ! Vous avez trouvé la bonne réponse
                </Text>
                <Text size="sm" c="dimmed">
                  Vous avez réussi en {attempts} tentative{attempts > 1 ? 's' : ''} et gagné {points} points !
                </Text>
              </div>
            </Group>
          </Card>
        )}

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
