'use client'

import React, { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface MathContentProps {
  children: string
  block?: boolean
}

/**
 * Component for rendering mathematical equations using KaTeX
 *
 * @param children - LaTeX math expression
 * @param block - If true, renders as block (centered), otherwise inline
 *
 * Examples:
 * <MathContent>f(x) = \ln(x)</MathContent>
 * <MathContent block>{"\\int_0^1 x^2 \\, dx = \\frac{1}{3}"}</MathContent>
 */
export default function MathContent({ children, block = false }: MathContentProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          trust: true
        })
      } catch (error) {
        console.error('KaTeX rendering error:', error)
        if (containerRef.current) {
          containerRef.current.innerHTML = `<span style="color: red;">Error rendering: ${children}</span>`
        }
      }
    }
  }, [children, block])

  return (
    <span
      ref={containerRef}
      style={{
        display: block ? 'block' : 'inline',
        textAlign: block ? 'center' : 'left',
        margin: block ? '1rem 0' : '0'
      }}
    />
  )
}
