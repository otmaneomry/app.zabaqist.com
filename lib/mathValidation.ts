/**
 * Math Answer Validation Library
 *
 * Validates student LaTeX answers against correct answers
 * Handles normalization and equivalent forms
 */

/**
 * Normalize LaTeX string for comparison
 *
 * - Remove all whitespace
 * - Remove \left and \right
 * - Normalize fractions
 * - Handle common equivalents
 */
export function normalizeLaTeX(latex: string): string {
  if (!latex) return ''

  let normalized = latex
    // Remove all whitespace
    .replace(/\s+/g, '')
    // Remove \left and \right
    .replace(/\\left|\\right/g, '')
    // Normalize cdot to *
    .replace(/\\cdot/g, '*')
    // Normalize times to *
    .replace(/\\times/g, '*')
    // Remove unnecessary braces around single characters
    .replace(/\{([a-zA-Z0-9])\}/g, '$1')
    // Normalize ln
    .replace(/\\ln/g, 'ln')
    // Normalize log
    .replace(/\\log/g, 'log')
    // Normalize sin, cos, tan
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    // Normalize sqrt
    .replace(/\\sqrt/g, 'sqrt')
    // Lowercase everything
    .toLowerCase()

  return normalized
}

/**
 * Check if two LaTeX expressions are equivalent
 *
 * Basic comparison - can be enhanced with computer algebra system
 */
export function areEquivalent(answer1: string, answer2: string): boolean {
  const norm1 = normalizeLaTeX(answer1)
  const norm2 = normalizeLaTeX(answer2)

  // Exact match after normalization
  if (norm1 === norm2) return true

  // Check common equivalent forms
  return checkEquivalentForms(norm1, norm2)
}

/**
 * Check for equivalent mathematical forms
 */
function checkEquivalentForms(expr1: string, expr2: string): boolean {
  // List of equivalent pairs
  const equivalents = [
    // Fractions
    [/frac\{1\}\{2\}/, '0.5'],
    [/frac\{1\}\{2\}/, '1\/2'],
    [/frac\{2\}\{4\}/, '1\/2'],
    [/frac\{2\}\{4\}/, '0.5'],

    // Powers
    ['x\\^2', 'x*x'],
    ['x\\^3', 'x*x*x'],

    // Common values
    ['ln(e)', '1'],
    ['ln(1)', '0'],
    ['log(1)', '0'],
    ['log(10)', '1'],

    // Trig identities (basic)
    ['sin\\^2(x)\\+cos\\^2(x)', '1'],
  ]

  for (const [pattern, replacement] of equivalents) {
    if (typeof pattern === 'string') {
      if ((expr1 === pattern && expr2 === replacement) ||
          (expr1 === replacement && expr2 === pattern)) {
        return true
      }
    } else {
      // RegExp pattern
      if ((pattern.test(expr1) && expr2 === replacement) ||
          (pattern.test(expr2) && expr1 === replacement)) {
        return true
      }
    }
  }

  // Try evaluating simple numeric expressions
  if (isNumericExpression(expr1) && isNumericExpression(expr2)) {
    try {
      const val1 = evaluateSimple(expr1)
      const val2 = evaluateSimple(expr2)
      if (val1 !== null && val2 !== null) {
        return Math.abs(val1 - val2) < 0.0001 // tolerance
      }
    } catch (e) {
      // Can't evaluate, continue
    }
  }

  return false
}

/**
 * Check if expression is numeric (only contains numbers and operators)
 */
function isNumericExpression(expr: string): boolean {
  return /^[0-9+\-*/().^]+$/.test(expr)
}

/**
 * Evaluate simple numeric expressions
 * WARNING: This is a basic evaluator - not production-safe for arbitrary expressions
 */
function evaluateSimple(expr: string): number | null {
  try {
    // Replace ^ with **
    const jsExpr = expr.replace(/\^/g, '**')

    // Very basic - just handle numbers and basic operators
    // In production, use a proper math parser like math.js
    const result = Function('"use strict"; return (' + jsExpr + ')')()

    return typeof result === 'number' && !isNaN(result) ? result : null
  } catch (e) {
    return null
  }
}

/**
 * Validate student answer against correct answer
 *
 * Returns validation result with feedback
 */
export interface ValidationResult {
  isCorrect: boolean
  message: string
  normalizedAnswer?: string
  normalizedCorrect?: string
}

export function validateAnswer(
  studentAnswer: string,
  correctAnswer: string
): ValidationResult {
  if (!studentAnswer || !studentAnswer.trim()) {
    return {
      isCorrect: false,
      message: 'Veuillez entrer une réponse'
    }
  }

  const normalized = normalizeLaTeX(studentAnswer)
  const normalizedCorrect = normalizeLaTeX(correctAnswer)

  if (areEquivalent(studentAnswer, correctAnswer)) {
    return {
      isCorrect: true,
      message: 'Bravo ! Votre réponse est correcte',
      normalizedAnswer: normalized,
      normalizedCorrect: normalizedCorrect
    }
  }

  return {
    isCorrect: false,
    message: 'Votre réponse n\'est pas correcte. Essayez encore !',
    normalizedAnswer: normalized,
    normalizedCorrect: normalizedCorrect
  }
}

/**
 * Get hint based on student's wrong answer
 *
 * Analyzes the answer and provides contextual hints
 */
export function getContextualHint(
  studentAnswer: string,
  correctAnswer: string,
  baseHint?: string
): string {
  const norm = normalizeLaTeX(studentAnswer)
  const normCorrect = normalizeLaTeX(correctAnswer)

  // Check for common mistakes
  if (norm.includes('ln') && !normCorrect.includes('ln')) {
    return 'Attention: Avez-vous besoin d\'utiliser ln dans votre réponse ?'
  }

  if (!norm.includes('ln') && normCorrect.includes('ln')) {
    return 'Indice: La réponse implique la fonction logarithme népérien (ln)'
  }

  if (norm.includes('+') && normCorrect.includes('-')) {
    return 'Attention aux signes: vérifiez si vous devez additionner ou soustraire'
  }

  if (norm.includes('-') && normCorrect.includes('+')) {
    return 'Attention aux signes: vérifiez si vous devez additionner ou soustraire'
  }

  // Check for fraction mistakes
  if (norm.includes('frac') !== normCorrect.includes('frac')) {
    return 'Indice: Pensez à simplifier ou à utiliser une fraction'
  }

  // Return base hint if no specific hint found
  return baseHint || 'Relisez l\'énoncé et vérifiez vos calculs'
}

/**
 * Check if answer is partially correct
 *
 * Useful for giving partial credit
 */
export function getPartialCredit(
  studentAnswer: string,
  correctAnswer: string
): number {
  const norm = normalizeLaTeX(studentAnswer)
  const normCorrect = normalizeLaTeX(correctAnswer)

  // Full credit if correct
  if (areEquivalent(studentAnswer, correctAnswer)) {
    return 1.0
  }

  // Partial credit based on similarity
  let credit = 0.0

  // Contains correct function/operator
  if (normCorrect.includes('ln') && norm.includes('ln')) credit += 0.2
  if (normCorrect.includes('frac') && norm.includes('frac')) credit += 0.2
  if (normCorrect.includes('sqrt') && norm.includes('sqrt')) credit += 0.2

  // Contains correct numbers
  const numbersCorrect: string[] = normCorrect.match(/\d+/g) || []
  const numbersStudent: string[] = norm.match(/\d+/g) || []
  const commonNumbers = numbersCorrect.filter((n: string) => numbersStudent.includes(n))
  if (numbersCorrect.length > 0) {
    credit += (commonNumbers.length / numbersCorrect.length) * 0.4
  }

  return Math.min(credit, 0.8) // Max 80% partial credit
}
