'use client'

import React, { useState } from 'react'
import { Container, Title, Text, Stack, Card, Tabs, Button, Group, Badge, Divider } from '@mantine/core'
import { IconBook, IconChartLine, IconCalculator, IconTrophy } from '@tabler/icons-react'
import Link from 'next/link'
import MathContent from '@/components/math/MathContent'
import GeogebraViewer from '@/components/math/GeogebraViewer'

export default function FonctionsLogarithmiquesPage() {
  const [activeTab, setActiveTab] = useState<string | null>('introduction')

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
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
                  appletOnLoad={(api) => {
                    // Draw ln(x) function
                    api.evalCommand('f(x) = ln(x)')
                    api.setColor('f', 32, 176, 161) // Teal color

                    // Add point at (1, 0)
                    api.evalCommand('A = (1, 0)')
                    api.setCaption('A', '(1, 0)')
                    api.setLabelVisible('A', true)

                    // Add point at (e, 1)
                    api.evalCommand('B = (e, 1)')
                    api.setCaption('B', '(e, 1)')
                    api.setLabelVisible('B', true)

                    // Add asymptote x=0
                    api.evalCommand('SetVisibleInView(yAxis, 1, true)')
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
