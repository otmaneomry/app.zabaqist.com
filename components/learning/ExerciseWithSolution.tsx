'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Card, Text, Stack, Button, Collapse, Stepper, Badge, Group, Alert } from '@mantine/core'
import { IconCheck, IconBulb, IconEye, IconRefresh, IconAlertCircle } from '@tabler/icons-react'
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
  points = 10
}: ExerciseProps) {
  const t = useTranslations('exercise')
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

      // A hint, offered — never the answer, and never forced.
      const newHint = getContextualHint(studentAnswer, correctAnswer, hint)
      setContextualHint(newHint)
    }
  }

  const difficultyColors = {
    'Facile': 'green',
    'Moyen': 'yellow',
    'Difficile': 'red'
  }

  // Retry is unlimited. The attempt counter reports honestly, but it is not a
  // budget: a wrong answer costs one extra try and nothing else. Locking the
  // input after three goes, and auto-revealing the solution, is exactly the
  // punishment mechanic that makes learners quit maths.
  // See BRILLIANT_WORKFLOW.md §4.
  const canAttempt = !isCorrect

  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder mb="lg">
      <Stack gap="md">
        {/* Header */}
        <Group justify="space-between">
          <Text size="lg" fw={700} c="mint">
            Exercice {number}
          </Text>
          <Badge color={difficultyColors[difficulty]} variant="light">
            {difficulty}
          </Badge>
        </Group>

        {/* Question */}
        <Card bg="blue.0" p="md" radius="md">
          <Text fw={500} mb="sm">
            {t('statement')}
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
              label={t('yourAnswer')}
              placeholder={t('answerPlaceholder')}
              disabled={!canAttempt}
              showPreview={true}
            />

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                {attempts === 0
                  ? t('takeYourTime')
                  : t('attemptN', { n: attempts })}
              </Text>
              <Button
                color="mint"
                onClick={handleCheckAnswer}
                disabled={!studentAnswer.trim() || !canAttempt}
              >
                {t('check')}
              </Button>
            </Group>

            {/* Feedback */}
            {/* Amber means "not yet"; red would mean "failed". The wrong-answer
                icon is deliberately the lowest-contrast element here, while the
                correct one is the highest — success amplified, failure muted. */}
            {feedback && (
              <Alert
                icon={
                  isCorrect ? <IconCheck size={16} /> : <IconRefresh size={16} />
                }
                color={isCorrect ? 'green' : 'yellow'}
                title={isCorrect ? t('correct') : t('tryAgain')}
              >
                {feedback}
              </Alert>
            )}

            {/* Contextual Hint */}
            {contextualHint && !isCorrect && (
              <Alert icon={<IconAlertCircle size={16} />} color="orange" title={t('hint')}>
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
                  {t('wellDone')}
                </Text>
                <Text size="sm" c="dimmed">
                  {attempts > 1
                    ? t('pointsIn', { n: attempts, points })
                    : t('points', { points })}
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
                    {t('hintLabel')}
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
          color="mint"
          leftSection={<IconEye size={16} />}
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Masquer la solution' : 'Voir la solution détaillée'}
        </Button>

        {/* Solution Steps */}
        <Collapse in={showSolution}>
          <Card bg="gray.0" p="lg" radius="md">
            <Text size="lg" fw={700} mb="lg" c="mint">
              {t('solution')}
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
                {t('finalAnswer')}
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
                {t('prevStep')}
              </Button>
              <Button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                color="mint"
              >
                {t('nextStep')}
              </Button>
            </Group>
          </Card>
        </Collapse>
      </Stack>
    </Card>
  )
}
