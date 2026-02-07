'use client'

import { useEffect, useState } from 'react'
import { Stack, Text, Paper, Textarea } from '@mantine/core'
import MathContent from '@/components/math/MathContent'
import LaTeXGuide from './LaTeXGuide'

interface SimpleMathInputProps {
  value: string
  onChange: (latex: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  showPreview?: boolean
  minRows?: number
}

/**
 * Simplified Math Input using plain textarea with LaTeX preview
 *
 * Students type LaTeX directly (e.g., "x^2 + 3x + 2")
 * Live preview shows rendered equation below
 *
 * This is simpler than MathQuill but still allows math input
 */
export default function SimpleMathInput({
  value,
  onChange,
  placeholder = 'Tapez votre réponse en LaTeX (ex: x^2 + 3x + 2)',
  label,
  error,
  disabled = false,
  showPreview = true,
  minRows = 2,
}: SimpleMathInputProps) {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setLocalValue(newValue)
    onChange(newValue)
  }

  return (
    <Stack gap="xs">
      {label && (
        <Text size="sm" fw={500}>
          {label}
        </Text>
      )}

      {/* LaTeX Input */}
      <Textarea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        minRows={minRows}
        autosize
        styles={{
          input: {
            fontFamily: 'monospace',
            fontSize: '14px',
          },
        }}
      />

      {/* Live Preview */}
      {showPreview && localValue && (
        <Paper p="sm" bg="blue.0" radius="md">
          <Text size="xs" c="dimmed" mb={4}>
            Aperçu de votre réponse:
          </Text>
          <div style={{ fontSize: '16px' }}>
            <MathContent>{localValue}</MathContent>
          </div>
        </Paper>
      )}

      {/* Helper Text */}
      {!localValue && !disabled && <LaTeXGuide compact />}
    </Stack>
  )
}
