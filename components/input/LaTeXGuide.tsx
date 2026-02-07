'use client'

import { Paper, Text, Stack, Group } from '@mantine/core'
import MathContent from '@/components/math/MathContent'

interface LaTeXGuideItemProps {
  label: string
  code: string
  example: string
}

/**
 * Reusable LaTeX Guide Item Component
 * Shows: label: <code> → rendered math
 */
function LaTeXGuideItem({ label, code, example }: LaTeXGuideItemProps) {
  return (
    <Group gap="xs" align="center" wrap="nowrap">
      <Text size="xs" c="dimmed" style={{ minWidth: '70px' }}>
        • {label}:
      </Text>
      <code style={{
        fontSize: '11px',
        padding: '2px 6px',
        backgroundColor: '#f1f3f5',
        borderRadius: '4px',
        whiteSpace: 'nowrap'
      }}>
        {code}
      </code>
      <Text size="xs" c="dimmed">→</Text>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <MathContent>{example}</MathContent>
      </div>
    </Group>
  )
}

interface LaTeXGuideProps {
  compact?: boolean
}

/**
 * Reusable LaTeX Guide Component
 * Displays common LaTeX commands with rendered examples
 */
export default function LaTeXGuide({ compact = false }: LaTeXGuideProps) {
  const items = [
    { label: 'Exposant', code: 'x^2', example: 'x^2' },
    { label: 'Indice', code: 'x_1', example: 'x_1' },
    { label: 'Fraction', code: String.raw`\frac{a}{b}`, example: String.raw`\frac{a}{b}` },
    { label: 'Racine', code: String.raw`\sqrt{x}`, example: String.raw`\sqrt{x}` },
    { label: 'Fonction', code: String.raw`\ln(x), \sin(x)`, example: String.raw`\ln(x), \sin(x)` },
  ]

  if (compact) {
    return (
      <Paper p="xs" bg="gray.0" radius="sm">
        <Text size="xs" c="dimmed" fw={500} mb={6}>
          💡 Guide LaTeX rapide:
        </Text>
        <Stack gap={6}>
          {items.map((item, index) => (
            <LaTeXGuideItem key={index} {...item} />
          ))}
        </Stack>
      </Paper>
    )
  }

  return (
    <Paper p="md" bg="blue.0" radius="md" withBorder>
      <Text size="sm" fw={600} mb="sm" c="blue.9">
        💡 Guide LaTeX rapide
      </Text>
      <Stack gap={8}>
        {items.map((item, index) => (
          <LaTeXGuideItem key={index} {...item} />
        ))}
      </Stack>
    </Paper>
  )
}

export { LaTeXGuideItem }
