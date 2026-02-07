'use client'

import { useEffect, useRef, useState } from 'react'
import { Stack, Text, Paper, Box } from '@mantine/core'
import dynamic from 'next/dynamic'

// Import MathContent for preview
const MathContent = dynamic(() => import('@/components/math/MathContent'), {
  ssr: false,
})

interface MathInputProps {
  value: string
  onChange: (latex: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  showPreview?: boolean
}

export default function MathInput({
  value,
  onChange,
  placeholder = 'Tapez votre réponse mathématique...',
  label,
  error,
  disabled = false,
  showPreview = true,
}: MathInputProps) {
  const [isClient, setIsClient] = useState(false)
  const [mathField, setMathField] = useState<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Ensure client-side only rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize MathQuill
  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const initMathQuill = async () => {
      try {
        // Dynamically import MathQuill and addStyles
        const { addStyles, EditableMathField } = await import('react-mathquill')

        // Add MathQuill styles
        addStyles()

        // Create MathQuill instance
        const MQ = (window as any).MathQuill?.getInterface(2)
        if (!MQ) {
          console.error('MathQuill not loaded')
          return
        }

        const span = containerRef.current?.querySelector('.math-input-field')
        if (!span) return

        const field = MQ.MathField(span, {
          spaceBehavesLikeTab: true,
          handlers: {
            edit: function() {
              const latex = field.latex()
              onChange(latex)
            }
          }
        })

        // Set initial value
        if (value) {
          field.latex(value)
        }

        setMathField(field)

        // Focus on mount
        if (!disabled) {
          field.focus()
        }
      } catch (error) {
        console.error('Error initializing MathQuill:', error)
      }
    }

    initMathQuill()

    // Cleanup
    return () => {
      if (mathField) {
        try {
          mathField.revert()
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  }, [isClient, disabled])

  // Update value when prop changes
  useEffect(() => {
    if (mathField && value !== mathField.latex()) {
      mathField.latex(value)
    }
  }, [value, mathField])

  if (!isClient) {
    return (
      <Stack gap="xs">
        {label && <Text size="sm" fw={500}>{label}</Text>}
        <Paper p="md" withBorder style={{ minHeight: '50px', backgroundColor: '#f8f9fa' }}>
          <Text size="sm" c="dimmed">Chargement de l'éditeur...</Text>
        </Paper>
      </Stack>
    )
  }

  return (
    <Stack gap="xs">
      {label && (
        <Text size="sm" fw={500}>
          {label}
        </Text>
      )}

      {/* Math Input Field */}
      <Paper
        p="md"
        withBorder
        style={{
          minHeight: '60px',
          backgroundColor: disabled ? '#f8f9fa' : 'white',
          cursor: disabled ? 'not-allowed' : 'text',
          borderColor: error ? '#fa5252' : undefined,
        }}
        ref={containerRef}
      >
        <Box
          className="math-input-field"
          style={{
            fontSize: '18px',
            minHeight: '30px',
          }}
        />
      </Paper>

      {error && (
        <Text size="sm" c="red">
          {error}
        </Text>
      )}

      {/* Live Preview */}
      {showPreview && value && (
        <Paper p="sm" bg="gray.0" radius="md">
          <Text size="xs" c="dimmed" mb={4}>
            Aperçu:
          </Text>
          <MathContent>{value}</MathContent>
        </Paper>
      )}

      {/* Helper Text */}
      {!value && !disabled && (
        <Text size="xs" c="dimmed">
          💡 Astuce: Utilisez les raccourcis comme "^" pour les exposants, "/" pour les fractions, "sqrt" pour les racines carrées
        </Text>
      )}
    </Stack>
  )
}
