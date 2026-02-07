'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Container, Title, Text, Stack, Card, Tabs, Button, Group, Badge, Divider, Progress, Paper } from '@mantine/core'
import { IconBook, IconChartLine, IconCalculator, IconTrophy, IconNotebook, IconSchool, IconClock } from '@tabler/icons-react'
import Link from 'next/link'
import MathContent from '@/components/math/MathContent'
import GeogebraViewer from '@/components/math/GeogebraViewer'
import ExerciseWithSolution from '@/components/learning/ExerciseWithSolution'
import DevoirAssignment from '@/components/learning/DevoirAssignment'
import {
  getCourseProgress,
  markTabCompleted,
  addTimeSpent,
  getCompletionPercentage,
  getFormattedTimeSpent
} from '@/lib/progressTracking'

const COURSE_ID = 'fonctions-logarithmiques'

export default function FonctionsLogarithmiquesPage() {
  const [activeTab, setActiveTab] = useState<string | null>('introduction')
  const [completionPercentage, setCompletionPercentage] = useState(0)
  const [timeSpent, setTimeSpent] = useState('0m')
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  // Load progress on mount
  useEffect(() => {
    const progress = getCourseProgress(COURSE_ID)
    if (progress) {
      setActiveTab(progress.lastVisitedTab)
      setTimeSpent(getFormattedTimeSpent(COURSE_ID))
    }
    setCompletionPercentage(getCompletionPercentage(COURSE_ID, 6))

    // Track time spent
    startTimeRef.current = Date.now()
    timeIntervalRef.current = setInterval(() => {
      const secondsElapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
      if (secondsElapsed >= 10) {
        addTimeSpent(COURSE_ID, secondsElapsed)
        setTimeSpent(getFormattedTimeSpent(COURSE_ID))
        startTimeRef.current = Date.now()
      }
    }, 10000) // Update every 10 seconds

    return () => {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current)
      }
      // Save final time on unmount
      const finalSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000)
      if (finalSeconds > 0) {
        addTimeSpent(COURSE_ID, finalSeconds)
      }
    }
  }, [])

  // Track tab changes
  useEffect(() => {
    if (activeTab) {
      markTabCompleted(COURSE_ID, activeTab)
      setCompletionPercentage(getCompletionPercentage(COURSE_ID, 6))
    }
  }, [activeTab])

  // Refresh progress periodically to catch exercise/homework updates
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setCompletionPercentage(getCompletionPercentage(COURSE_ID, 6))
    }, 2000) // Check every 2 seconds

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Progress Indicator */}
        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text size="sm" fw={600} c="dimmed">
                Progression du cours
              </Text>
              <Group gap="lg">
                <Group gap="xs">
                  <IconClock size={16} />
                  <Text size="sm" c="dimmed">{timeSpent}</Text>
                </Group>
                <Text size="sm" fw={700} c="teal">
                  {completionPercentage}%
                </Text>
              </Group>
            </Group>
            <Progress value={completionPercentage} color="teal" size="lg" radius="xl" />
          </Stack>
        </Paper>

        {/* Course Header */}
        <div>
          <Badge color="teal" size="lg" mb="sm">
            MATHÉMATIQUES · BAC
          </Badge>
          <Title order={1} mb="md">
            Fonctions Logarithmiques
          </Title>
          <Text size="lg" c="dimmed" mb="xl">
            Maîtrisez les fonctions logarithmiques : définition, propriétés, dérivées et applications
          </Text>
          <Group>
            <Button
              leftSection={<IconTrophy size={16} />}
              color="teal"
              component={Link}
              href="/quiz/1"
            >
              Passer le Quiz
            </Button>
            <Text c="dimmed">5 chapitres · 60 points</Text>
          </Group>
        </div>

        <Divider />

        {/* Course Content Tabs */}
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="introduction" leftSection={<IconBook size={16} />}>
              Introduction
            </Tabs.Tab>
            <Tabs.Tab value="proprietes" leftSection={<IconCalculator size={16} />}>
              Propriétés
            </Tabs.Tab>
            <Tabs.Tab value="derivees" leftSection={<IconChartLine size={16} />}>
              Dérivées
            </Tabs.Tab>
            <Tabs.Tab value="graphique" leftSection={<IconChartLine size={16} />}>
              Graphique
            </Tabs.Tab>
            <Tabs.Tab value="exercices" leftSection={<IconNotebook size={16} />}>
              Exercices
            </Tabs.Tab>
            <Tabs.Tab value="devoir" leftSection={<IconSchool size={16} />}>
              Devoir
            </Tabs.Tab>
          </Tabs.List>

          {/* Introduction Tab */}
          <Tabs.Panel value="introduction" pt="xl">
            <Stack gap="lg">
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  1. Définition
                </Title>
                <Text size="lg" mb="md">
                  La fonction logarithme népérien, notée <MathContent>{"\\ln"}</MathContent>, est la fonction réciproque de la fonction exponentielle.
                </Text>
                <Card bg="blue.0" p="lg" radius="md">
                  <Text fw={600} mb="md">
                    Définition formelle :
                  </Text>
                  <MathContent block>
                    {"\\forall x \\in \\mathbb{R}^*_+, \\quad y = \\ln(x) \\iff x = e^y"}
                  </MathContent>
                </Card>
              </Card>

              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  2. Ensemble de définition
                </Title>
                <Text size="lg" mb="md">
                  La fonction logarithme népérien n'est définie que pour les réels strictement positifs :
                </Text>
                <MathContent block>
                  {"D_f = \\mathbb{R}^*_+ = \\left]0, +\\infty\\right["}
                </MathContent>
              </Card>

              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  3. Valeurs remarquables
                </Title>
                <Stack gap="md">
                  <div>
                    <MathContent block>{"\\ln(1) = 0"}</MathContent>
                  </div>
                  <div>
                    <MathContent block>{"\\ln(e) = 1"}</MathContent>
                  </div>
                  <div>
                    <MathContent block>{"\\ln(e^2) = 2"}</MathContent>
                  </div>
                  <div>
                    <MathContent block>{"\\ln\\left(\\frac{1}{e}\\right) = -1"}</MathContent>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Tabs.Panel>

          {/* Propriétés Tab */}
          <Tabs.Panel value="proprietes" pt="xl">
            <Stack gap="lg">
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  Propriétés algébriques
                </Title>
                <Stack gap="xl">
                  <div>
                    <Text fw={600} mb="sm">
                      1. Logarithme d'un produit
                    </Text>
                    <MathContent block>
                      {"\\ln(ab) = \\ln(a) + \\ln(b)"}
                    </MathContent>
                    <Text size="sm" c="dimmed" mt="sm">
                      Le logarithme transforme la multiplication en addition
                    </Text>
                  </div>

                  <div>
                    <Text fw={600} mb="sm">
                      2. Logarithme d'un quotient
                    </Text>
                    <MathContent block>
                      {"\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)"}
                    </MathContent>
                    <Text size="sm" c="dimmed" mt="sm">
                      Le logarithme transforme la division en soustraction
                    </Text>
                  </div>

                  <div>
                    <Text fw={600} mb="sm">
                      3. Logarithme d'une puissance
                    </Text>
                    <MathContent block>
                      {"\\ln(a^n) = n \\cdot \\ln(a)"}
                    </MathContent>
                    <Text size="sm" c="dimmed" mt="sm">
                      Le logarithme transforme l'exponentiation en multiplication
                    </Text>
                  </div>

                  <div>
                    <Text fw={600} mb="sm">
                      4. Logarithme d'une racine
                    </Text>
                    <MathContent block>
                      {"\\ln(\\sqrt{a}) = \\frac{1}{2} \\ln(a)"}
                    </MathContent>
                  </div>

                  <Card bg="green.0" p="lg" radius="md">
                    <Text fw={600} mb="md">
                      💡 Exemple d'application :
                    </Text>
                    <Text mb="sm">
                      Simplifier : <MathContent>{"\\ln(8) + \\ln(2)"}</MathContent>
                    </Text>
                    <MathContent block>
                      {"\\ln(8) + \\ln(2) = \\ln(8 \\times 2) = \\ln(16) = \\ln(2^4) = 4\\ln(2)"}
                    </MathContent>
                  </Card>
                </Stack>
              </Card>
            </Stack>
          </Tabs.Panel>

          {/* Dérivées Tab */}
          <Tabs.Panel value="derivees" pt="xl">
            <Stack gap="lg">
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  Dérivée de la fonction logarithme
                </Title>
                <Card bg="orange.0" p="lg" radius="md" mb="lg">
                  <Text fw={600} mb="md">
                    Formule fondamentale :
                  </Text>
                  <MathContent block>
                    {"\\left(\\ln(x)\\right)' = \\frac{1}{x}"}
                  </MathContent>
                </Card>

                <Text size="lg" mb="md">
                  Pour une fonction composée <MathContent>{"\\ln(u(x))"}</MathContent> :
                </Text>
                <MathContent block>
                  {"\\left(\\ln(u)\\right)' = \\frac{u'}{u}"}
                </MathContent>
              </Card>

              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  Exemples de dérivées
                </Title>
                <Stack gap="xl">
                  <div>
                    <Text fw={600} mb="sm">
                      Exemple 1 : <MathContent>{"f(x) = \\ln(x^2 + 1)"}</MathContent>
                    </Text>
                    <Text mb="sm">On pose <MathContent>{"u(x) = x^2 + 1"}</MathContent>, donc <MathContent>{"u'(x) = 2x"}</MathContent></Text>
                    <MathContent block>
                      {"f'(x) = \\frac{u'(x)}{u(x)} = \\frac{2x}{x^2 + 1}"}
                    </MathContent>
                  </div>

                  <div>
                    <Text fw={600} mb="sm">
                      Exemple 2 : <MathContent>{"g(x) = \\ln(\\sin(x))"}</MathContent>
                    </Text>
                    <Text mb="sm">On pose <MathContent>{"u(x) = \\sin(x)"}</MathContent>, donc <MathContent>{"u'(x) = \\cos(x)"}</MathContent></Text>
                    <MathContent block>
                      {"g'(x) = \\frac{\\cos(x)}{\\sin(x)} = \\cot(x)"}
                    </MathContent>
                  </div>

                  <div>
                    <Text fw={600} mb="sm">
                      Exemple 3 : <MathContent>{"h(x) = x \\ln(x)"}</MathContent>
                    </Text>
                    <Text mb="sm">Utilisation de la règle du produit : <MathContent>{"(uv)' = u'v + uv'"}</MathContent></Text>
                    <MathContent block>
                      {"h'(x) = 1 \\cdot \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1"}
                    </MathContent>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Tabs.Panel>

          {/* Graphique Tab */}
          <Tabs.Panel value="graphique" pt="xl">
            <Stack gap="lg">
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  Représentation graphique de ln(x)
                </Title>
                <Text size="lg" mb="lg">
                  Explorez la fonction logarithme népérien de manière interactive avec GeoGebra.
                  Vous pouvez zoomer, déplacer le graphique et observer les propriétés de la fonction.
                </Text>
                <GeogebraViewer
                  appName="graphing"
                  width={800}
                  height={600}
                  showAlgebraInput={true}
                  showToolBar={true}
                  appletOnLoad={() => {
                    // Wait for applet to be fully ready, then use global window.ggbApplet
                    setTimeout(() => {
                      console.log('GeoGebra delayed initialization starting...')

                      // Get the API from the global window object
                      const api = (window as any).ggbApplet

                      if (!api) {
                        console.error('❌ window.ggbApplet is not available!')
                        console.log('Available window properties:', Object.keys(window).filter(k => k.toLowerCase().includes('ggb')))
                        return
                      }

                      console.log('✓ Got API from window.ggbApplet')

                      try {
                        // Set coordinate system to properly frame the logarithmic function
                        api.setCoordSystem(-1, 8, -3, 3)
                        console.log('✓ Coordinate system set: x(-1 to 8), y(-3 to 3)')

                        // Create the ln(x) function
                        const result = api.evalCommand('f(x) = ln(x)')
                        console.log('✓ evalCommand("f(x) = ln(x)") result:', result)

                        // Verify function was created
                        const exists = api.exists('f')
                        console.log('✓ Function f exists:', exists)

                        if (exists) {
                          // Style the function curve
                          api.setColor('f', 32, 176, 161) // Teal color
                          api.setLineThickness('f', 4)
                          console.log('✓ Function styled (teal, thickness 4)')

                          // Add point at (1, 0) - where ln(1) = 0
                          api.evalCommand('A = (1, 0)')
                          api.setPointStyle('A', 3) // Circle
                          api.setPointSize('A', 5)
                          api.setCaption('A', '(1, 0)')
                          api.setLabelVisible('A', true)
                          console.log('✓ Point A (1, 0) added')

                          // Add point at (e, 1) - where ln(e) = 1
                          api.evalCommand('B = (e, 1)')
                          api.setPointStyle('B', 3) // Circle
                          api.setPointSize('B', 5)
                          api.setCaption('B', '(e, 1)')
                          api.setLabelVisible('B', true)
                          console.log('✓ Point B (e, 1) added')

                          console.log('🎉 GeoGebra initialization complete!')
                        } else {
                          console.error('❌ Function f was not created!')
                        }
                      } catch (error) {
                        console.error('❌ GeoGebra initialization error:', error)
                      }
                    }, 2000) // Wait 2 seconds for full initialization
                  }}
                />
              </Card>

              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={2} mb="md">
                  Propriétés du graphique
                </Title>
                <Stack gap="md">
                  <div>
                    <Text fw={600}>1. Domaine et image</Text>
                    <Text>Domaine : <MathContent>{"\\mathbb{R}^*_+"}</MathContent></Text>
                    <Text>Image : <MathContent>{"\\mathbb{R}"}</MathContent></Text>
                  </div>

                  <div>
                    <Text fw={600}>2. Asymptote verticale</Text>
                    <Text>La droite d'équation <MathContent>{"x = 0"}</MathContent> (axe des ordonnées) est asymptote verticale</Text>
                    <MathContent block>{"\\lim_{x \\to 0^+} \\ln(x) = -\\infty"}</MathContent>
                  </div>

                  <div>
                    <Text fw={600}>3. Croissance</Text>
                    <Text>La fonction ln est strictement croissante sur <MathContent>{"\\mathbb{R}^*_+"}</MathContent></Text>
                    <MathContent block>{"\\forall x > 0, \\quad \\ln'(x) = \\frac{1}{x} > 0"}</MathContent>
                  </div>

                  <div>
                    <Text fw={600}>4. Limites</Text>
                    <MathContent block>{"\\lim_{x \\to 0^+} \\ln(x) = -\\infty"}</MathContent>
                    <MathContent block>{"\\lim_{x \\to +\\infty} \\ln(x) = +\\infty"}</MathContent>
                  </div>

                  <div>
                    <Text fw={600}>5. Concavité</Text>
                    <Text>La fonction est concave (courbe tournée vers le bas)</Text>
                    <MathContent block>{"\\ln''(x) = -\\frac{1}{x^2} < 0"}</MathContent>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Tabs.Panel>

          {/* Exercices Tab */}
          <Tabs.Panel value="exercices" pt="xl">
            <Stack gap="lg">
              <Card shadow="sm" padding="lg" radius="md" withBorder bg="blue.0">
                <Text size="lg" fw={600} mb="sm">
                  📝 Exercices corrigés
                </Text>
                <Text c="dimmed">
                  Pratiquez avec ces exercices détaillés. Chaque exercice inclut des indices et une solution étape par étape avec explications.
                </Text>
              </Card>

              <ExerciseWithSolution
                courseId="fonctions-logarithmiques"
                number={1}
                question={String.raw`\text{Calculer : } \ln(e^3) + \ln(e^2) - \ln(e)`}
                hint="Utilisez la propriété : ln(a) + ln(b) = ln(ab) et ln(a) - ln(b) = ln(a/b)"
                correctAnswer="4"
                maxAttempts={3}
                points={10}
                difficulty="Facile"
                steps={[
                  {
                    title: "Simplifier chaque terme",
                    content: "\\ln(e^3) = 3, \\quad \\ln(e^2) = 2, \\quad \\ln(e) = 1",
                    explanation: "Car ln(e^n) = n pour tout n réel"
                  },
                  {
                    title: "Effectuer les opérations",
                    content: "3 + 2 - 1 = 4",
                    explanation: "Simple addition et soustraction"
                  }
                ]}
                finalAnswer="4"
              />

              <ExerciseWithSolution
                courseId="fonctions-logarithmiques"
                number={2}
                question={String.raw`\text{Résoudre l'équation : } \ln(x) = 3`}
                hint="Utilisez la fonction exponentielle qui est la fonction réciproque du logarithme"
                correctAnswer="e^3"
                maxAttempts={3}
                points={15}
                difficulty="Moyen"
                steps={[
                  {
                    title: "Appliquer l'exponentielle aux deux membres",
                    content: "e^{\\ln(x)} = e^3",
                    explanation: "On applique exp() des deux côtés pour éliminer le ln"
                  },
                  {
                    title: "Simplifier avec la propriété fondamentale",
                    content: "x = e^3",
                    explanation: "Car e^{ln(x)} = x (propriété de la fonction réciproque)"
                  },
                  {
                    title: "Vérification",
                    content: "\\ln(e^3) = 3 \\cdot \\ln(e) = 3 \\times 1 = 3 \\quad \\checkmark",
                    explanation: "On vérifie que la solution satisfait l'équation"
                  }
                ]}
                finalAnswer="x = e^3 \\approx 20.09"
              />

              <ExerciseWithSolution
                courseId="fonctions-logarithmiques"
                number={3}
                question={String.raw`\text{Simplifier : } \ln(8) + \ln(2) - \ln(4)`}
                hint="Utilisez les propriétés des logarithmes et écrivez les nombres en puissances de 2"
                correctAnswer="\\ln(4)"
                maxAttempts={3}
                points={12}
                difficulty="Moyen"
                steps={[
                  {
                    title: "Écrire en puissances de 2",
                    content: "\\ln(2^3) + \\ln(2) - \\ln(2^2)",
                    explanation: "8 = 2³, 2 = 2¹, 4 = 2²"
                  },
                  {
                    title: "Appliquer ln(a^n) = n·ln(a)",
                    content: "3\\ln(2) + \\ln(2) - 2\\ln(2)",
                    explanation: "Propriété de la puissance dans le logarithme"
                  },
                  {
                    title: "Factoriser ln(2)",
                    content: "(3 + 1 - 2)\\ln(2) = 2\\ln(2)",
                    explanation: "On factorise par ln(2)"
                  },
                  {
                    title: "Simplifier",
                    content: "\\ln(2^2) = \\ln(4)",
                    explanation: "Car 2·ln(2) = ln(2²)"
                  }
                ]}
                finalAnswer="\\ln(4)"
              />

              <ExerciseWithSolution
                courseId="fonctions-logarithmiques"
                number={4}
                question={String.raw`\text{Dériver } f(x) = \ln(x^2 + 3x + 2)`}
                hint="Utilisez la formule de dérivée composée : (ln(u))' = u'/u"
                correctAnswer="\\frac{2x+3}{x^2+3x+2}"
                maxAttempts={3}
                points={15}
                difficulty="Difficile"
                steps={[
                  {
                    title: "Identifier u(x)",
                    content: "u(x) = x^2 + 3x + 2",
                    explanation: "La fonction à l'intérieur du logarithme"
                  },
                  {
                    title: "Calculer u'(x)",
                    content: "u'(x) = 2x + 3",
                    explanation: "Dérivée d'un polynôme"
                  },
                  {
                    title: "Appliquer la formule (ln(u))' = u'/u",
                    content: "f'(x) = \\frac{u'(x)}{u(x)} = \\frac{2x + 3}{x^2 + 3x + 2}",
                    explanation: "Formule de dérivation du logarithme d'une fonction composée"
                  },
                  {
                    title: "Factoriser le dénominateur (optionnel)",
                    content: "f'(x) = \\frac{2x + 3}{(x + 1)(x + 2)}",
                    explanation: "x² + 3x + 2 = (x + 1)(x + 2)"
                  }
                ]}
                finalAnswer="f'(x) = \\frac{2x + 3}{x^2 + 3x + 2}"
              />
            </Stack>
          </Tabs.Panel>

          {/* Devoir Tab */}
          <Tabs.Panel value="devoir" pt="xl">
            <DevoirAssignment
              title="Devoir Maison - Fonctions Logarithmiques"
              dueDate="15 Janvier 2026"
              duration="2 heures"
              totalPoints={50}
              instructions="Répondez aux questions suivantes en détaillant vos calculs. La rédaction et la rigueur mathématique seront prises en compte dans la notation."
              questions={[
                {
                  id: 1,
                  question: String.raw`\text{Calculer sans calculatrice : } \ln(e^5) - \ln(e^2) + 2\ln(e)`,
                  points: 8,
                  type: 'calculation',
                  solution: String.raw`5 - 2 + 2 = 5`,
                  hint: "Utilisez la propriété ln(eⁿ) = n"
                },
                {
                  id: 2,
                  question: String.raw`\text{Résoudre l'équation : } \ln(x - 1) + \ln(x + 1) = \ln(8)`,
                  points: 12,
                  type: 'calculation',
                  solution: String.raw`x = 3`,
                  hint: "Utilisez ln(a) + ln(b) = ln(ab), puis (x-1)(x+1) = 8, donc x² - 1 = 8, x² = 9"
                },
                {
                  id: 3,
                  question: String.raw`\text{Démontrer que pour tous réels } a \text{ et } b \text{ strictement positifs : } \ln(a/b) = \ln(a) - \ln(b)`,
                  points: 10,
                  type: 'proof',
                  solution: String.raw`\text{Soit } y = \frac{a}{b}, \text{ alors } a = by. \text{ En appliquant ln : } \ln(a) = \ln(by) = \ln(b) + \ln(y). \text{ Donc } \ln(y) = \ln(a) - \ln(b), \text{ c'est-à-dire } \ln(\frac{a}{b}) = \ln(a) - \ln(b)`,
                  hint: "Posez y = a/b, donc a = by. Appliquez ln aux deux côtés et utilisez ln(ab) = ln(a) + ln(b)"
                },
                {
                  id: 4,
                  question: String.raw`\text{Soit } f(x) = x \cdot \ln(x). \text{ Calculer } f'(x) \text{ et déterminer le tableau de variations de } f \text{ sur } ]0, +\infty[`,
                  points: 12,
                  type: 'application',
                  solution: String.raw`f'(x) = \ln(x) + 1. \text{ S'annule en } x = \frac{1}{e}. \text{ Décroissante sur } ]0, \frac{1}{e}[, \text{ croissante sur } ]\frac{1}{e}, +\infty[. \text{ Minimum en } x = \frac{1}{e} : f(\frac{1}{e}) = -\frac{1}{e}`,
                  hint: "Utilisez la règle du produit (uv)' = u'v + uv'. Puis étudiez le signe de f'(x)"
                },
                {
                  id: 5,
                  question: String.raw`\text{Résoudre l'inéquation : } \ln(x^2 - 4) > \ln(5)`,
                  points: 8,
                  type: 'calculation',
                  solution: String.raw`x \in ]-\infty, -3[ \cup ]3, +\infty[`,
                  hint: "La fonction ln est strictement croissante, donc x² - 4 > 5 et x² - 4 > 0. Résolvez x² > 9 avec x² > 4"
                }
              ]}
            />
          </Tabs.Panel>
        </Tabs>

        {/* Call to Action */}
        <Card shadow="lg" padding="xl" radius="md" withBorder style={{ background: 'linear-gradient(135deg, #2CB0A1 0%, #1a8f83 100%)' }}>
          <Stack align="center" gap="md">
            <Title order={2} c="white" ta="center">
              Prêt à tester vos connaissances ?
            </Title>
            <Text size="lg" c="white" ta="center">
              Passez le quiz sur les fonctions logarithmiques et obtenez votre score !
            </Text>
            <Button
              size="lg"
              variant="white"
              color="teal"
              component={Link}
              href="/quiz/1"
              leftSection={<IconTrophy size={20} />}
            >
              Commencer le Quiz
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}
