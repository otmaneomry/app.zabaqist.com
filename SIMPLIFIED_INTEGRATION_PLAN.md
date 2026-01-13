# Zabaqist - Simplified Integration Plan
## Zustand + Essential Features Only

**Date**: 2026-01-13
**Goal**: Get core functionality working quickly with minimal complexity

---

## Overview

**Simplifications from original plan:**
- ✅ Use **Zustand** instead of Redux Toolkit (simpler, less boilerplate)
- ✅ **Only Multiple Choice** quizzes (skip Rank Order, Word Cloud, etc.)
- ✅ **Only KaTeX and GeoGebra** for math tools (skip Notion)
- ✅ **No real-time features** for now (skip Socket.io)
- ✅ **Simple fetch API** instead of RTK Query
- ✅ **Mock API** for development without backend (temporary)
- ✅ **No authentication required** - Direct access to quizzes (simplified)

---

## 🔧 Mock API Setup (No Backend Required!)

**STATUS: IMPLEMENTED** ✅

The project now includes a fully functional mock API system, allowing you to develop and test without running the backend.

### Quick Start

1. **Direct Access** (no login required!):
   - Just navigate to any quiz URL: `/quiz/1`, `/quiz/2`, or `/quiz/3`
   - No authentication needed for simplified development

2. **Available Features**:
   - ✅ 3 Sample Quizzes with math equations
   - ✅ Quiz taking & scoring
   - ✅ Timer & navigation
   - ✅ Results display
   - ⚠️ Login & Registration available but NOT required

3. **Switch to Real API** (when ready):
   ```typescript
   // In lib/api.ts, change:
   const USE_MOCK_API = false  // Currently: true
   ```

### Mock Quiz Data

Three quizzes are pre-configured:
1. **Algèbre - Niveau 1** (3 questions, 10 min)
2. **Géométrie - Triangles** (2 questions, 15 min)
3. **Fonctions - Introduction** (2 questions, 12 min)

All include LaTeX math equations for testing KaTeX rendering.

See [MOCK_API_README.md](MOCK_API_README.md) for complete documentation.

---

## Phase 1: Authentication & State Management

### Goal: Users can login, register, and maintain session

### 1. Install Dependencies
```bash
npm install zustand
npm install react-hook-form
```

### 2. Create Zustand Stores

#### User Store (`/stores/useUserStore.ts`)
```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: number | null
  token: string | null
  email: string | null
  name: string | null
  avatar: string | null
  country: string | null
}

interface UserStore {
  user: User
  setUser: (user: User) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: {
        id: null,
        token: null,
        email: null,
        name: null,
        avatar: null,
        country: null,
      },
      setUser: (user) => set({ user }),
      logout: () => set({
        user: {
          id: null,
          token: null,
          email: null,
          name: null,
          avatar: null,
          country: null,
        }
      }),
      isAuthenticated: () => get().user.token !== null,
    }),
    {
      name: 'zabaqist-user-storage',
    }
  )
)
```

#### Quiz Store (`/stores/useQuizStore.ts`)
```typescript
import { create } from 'zustand'

interface Response {
  id: number
  name: string
  correct_answer: 0 | 1
  selected: boolean
}

interface Question {
  id: number
  name: string
  type: 'MultipleChoice'
  points: number
  duration: number
  responses: Response[]
}

interface Quiz {
  id: number
  name: string
  description: string
  questions: Question[]
}

interface QuizStore {
  currentQuiz: Quiz | null
  currentQuestionIndex: number
  userAnswers: Record<number, number[]> // questionId -> responseIds[]
  timeRemaining: number
  score: number

  setQuiz: (quiz: Quiz) => void
  setCurrentQuestion: (index: number) => void
  toggleResponse: (questionId: number, responseId: number) => void
  setTimeRemaining: (time: number) => void
  calculateScore: () => number
  resetQuiz: () => void
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentQuiz: null,
  currentQuestionIndex: 0,
  userAnswers: {},
  timeRemaining: 0,
  score: 0,

  setQuiz: (quiz) => set({
    currentQuiz: quiz,
    currentQuestionIndex: 0,
    userAnswers: {},
    score: 0
  }),

  setCurrentQuestion: (index) => set({ currentQuestionIndex: index }),

  toggleResponse: (questionId, responseId) => {
    const { userAnswers } = get()
    const current = userAnswers[questionId] || []
    const newAnswers = current.includes(responseId)
      ? current.filter(id => id !== responseId)
      : [...current, responseId]

    set({
      userAnswers: {
        ...userAnswers,
        [questionId]: newAnswers
      }
    })
  },

  setTimeRemaining: (time) => set({ timeRemaining: time }),

  calculateScore: () => {
    const { currentQuiz, userAnswers } = get()
    if (!currentQuiz) return 0

    let totalScore = 0
    currentQuiz.questions.forEach(question => {
      const userResponseIds = userAnswers[question.id] || []
      const correctResponseIds = question.responses
        .filter(r => r.correct_answer === 1)
        .map(r => r.id)

      // Check if all correct answers selected and no wrong answers
      const isCorrect =
        correctResponseIds.length === userResponseIds.length &&
        correctResponseIds.every(id => userResponseIds.includes(id))

      if (isCorrect) {
        totalScore += question.points
      }
    })

    set({ score: totalScore })
    return totalScore
  },

  resetQuiz: () => set({
    currentQuiz: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    timeRemaining: 0,
    score: 0
  })
}))
```

### 3. Environment Configuration

#### Create `/app/env.ts`
```typescript
// Development configuration
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'

// API endpoints
export const ENDPOINTS = {
  LOGIN: '/frontend/auth/login',
  REGISTER: '/frontend/auth/register',
  FORGOT_PASSWORD: '/frontend/auth/forgot-password',
  QUIZZES: '/backend/user/quiz',
  SUBMIT_QUIZ: '/backend/execution-responses-quiz',
}

export const APP_ENV = process.env.NODE_ENV || 'development'
```

### 4. API Utilities

#### Create `/lib/api.ts`
```typescript
import { API_URL } from '@/app/env'

interface ApiOptions extends RequestInit {
  token?: string | null
}

export async function apiCall(endpoint: string, options: ApiOptions = {}) {
  const { token, ...fetchOptions } = options

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  return response.json()
}

// Auth API calls
export const authApi = {
  login: async (email: string, password: string) => {
    return apiCall('/frontend/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  },

  register: async (data: { name: string; email: string; password: string; country: string }) => {
    return apiCall('/frontend/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}

// Quiz API calls
export const quizApi = {
  fetchAll: async (token: string | null) => {
    return apiCall('/backend/user/quiz', {
      method: 'GET',
      token,
    })
  },

  submitQuiz: async (token: string | null, data: any) => {
    return apiCall('/backend/execution-responses-quiz', {
      method: 'POST',
      token,
      body: JSON.stringify(data),
    })
  },
}
```

### 5. Sign In Page

#### Create `/app/signin/page.tsx`
```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button, Card, TextInput, PasswordInput, Title, Text } from '@mantine/core'
import Link from 'next/link'
import { useUserStore } from '@/stores/useUserStore'
import { authApi } from '@/lib/api'

interface LoginForm {
  email: string
  password: string
}

export default function SignInPage() {
  const router = useRouter()
  const setUser = useUserStore(state => state.setUser)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    setLoading(true)
    setError('')

    try {
      const response = await authApi.login(data.email.toLowerCase(), data.password)
      setUser(response.data)
      router.push('/home')
    } catch (err) {
      setError('Email ou mot de passe incorrect')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card shadow="md" padding="xl" radius="md" className="w-full max-w-md">
        <Title order={2} ta="center" mb="lg">
          Connexion à Zabaqist
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            placeholder="votre@email.com"
            {...register('email', { required: 'Email requis' })}
            error={errors.email?.message}
            mb="md"
          />

          <PasswordInput
            label="Mot de passe"
            placeholder="Votre mot de passe"
            {...register('password', { required: 'Mot de passe requis' })}
            error={errors.password?.message}
            mb="md"
          />

          {error && (
            <Text c="red" size="sm" mb="md">
              {error}
            </Text>
          )}

          <Button
            type="submit"
            fullWidth
            color="teal"
            loading={loading}
            mb="md"
          >
            Se connecter
          </Button>

          <Text size="sm" ta="center">
            Pas encore de compte ?{' '}
            <Link href="/signup" style={{ color: '#2CB0A1', fontWeight: 500 }}>
              S'inscrire
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  )
}
```

### 6. Sign Up Page

#### Create `/app/signup/page.tsx`
```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button, Card, TextInput, PasswordInput, Title, Text, Select } from '@mantine/core'
import Link from 'next/link'
import { useUserStore } from '@/stores/useUserStore'
import { authApi } from '@/lib/api'

interface RegisterForm {
  name: string
  email: string
  password: string
  country: string
}

export default function SignUpPage() {
  const router = useRouter()
  const setUser = useUserStore(state => state.setUser)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<RegisterForm>({
    defaultValues: {
      country: 'Morocco'
    }
  })

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true)
    setError('')

    try {
      const response = await authApi.register({
        ...data,
        email: data.email.toLowerCase()
      })
      setUser(response.data)
      router.push('/home')
    } catch (err) {
      setError('Erreur lors de l\'inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card shadow="md" padding="xl" radius="md" className="w-full max-w-md">
        <Title order={2} ta="center" mb="lg">
          Inscription à Zabaqist
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Nom complet"
            placeholder="Votre nom"
            {...register('name', { required: 'Nom requis' })}
            error={errors.name?.message}
            mb="md"
          />

          <TextInput
            label="Email"
            placeholder="votre@email.com"
            {...register('email', { required: 'Email requis' })}
            error={errors.email?.message}
            mb="md"
          />

          <PasswordInput
            label="Mot de passe"
            placeholder="Minimum 6 caractères"
            {...register('password', {
              required: 'Mot de passe requis',
              minLength: { value: 6, message: 'Minimum 6 caractères' }
            })}
            error={errors.password?.message}
            mb="md"
          />

          <Select
            label="Pays"
            data={['Morocco', 'France', 'Tunisia', 'Algeria']}
            defaultValue="Morocco"
            onChange={(value) => setValue('country', value || 'Morocco')}
            mb="md"
          />

          {error && (
            <Text c="red" size="sm" mb="md">
              {error}
            </Text>
          )}

          <Button
            type="submit"
            fullWidth
            color="teal"
            loading={loading}
            mb="md"
          >
            S'inscrire
          </Button>

          <Text size="sm" ta="center">
            Déjà un compte ?{' '}
            <Link href="/signin" style={{ color: '#2CB0A1', fontWeight: 500 }}>
              Se connecter
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  )
}
```

### 7. Update LoginModal to use Zustand

#### Edit `/components/frontend/LoginModal.tsx`
```typescript
// Add at top
import { useUserStore } from '@/stores/useUserStore'
import { authApi } from '@/lib/api'
import { useRouter } from 'next/navigation'

// Inside component
const router = useRouter()
const setUser = useUserStore(state => state.setUser)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

const handleLogin = async () => {
  setLoading(true)
  setError('')
  try {
    const response = await authApi.login(email.toLowerCase(), password)
    setUser(response.data)
    onClose()
    router.push('/home')
  } catch (err) {
    setError('Email ou mot de passe incorrect')
  } finally {
    setLoading(false)
  }
}
```

### 8. Protected Route Middleware

#### Create `/middleware.ts` (root level)
```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/home', '/courses', '/quiz', '/profile']
const authRoutes = ['/signin', '/signup']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('zabaqist-user-storage')?.value
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )
  const isAuthRoute = authRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  // Redirect to signin if accessing protected route without token
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // Redirect to home if accessing auth routes with token
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home/:path*', '/courses/:path*', '/quiz/:path*', '/profile/:path*', '/signin', '/signup']
}
```

---

## Phase 2: Multiple Choice Quiz System

### Goal: Functional quiz with timer and scoring

### 1. Install Dependencies
```bash
npm install react-countdown-circle-timer
```

### 2. Quiz Player Component

#### Create `/components/quiz/QuizPlayer.tsx`
```typescript
'use client'

import { useEffect, useState } from 'react'
import { useQuizStore } from '@/stores/useQuizStore'
import { Card, Button, Text, Title, Progress, Group } from '@mantine/core'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useRouter } from 'next/navigation'

interface QuizPlayerProps {
  quizId: string
}

export default function QuizPlayer({ quizId }: QuizPlayerProps) {
  const router = useRouter()
  const {
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    setCurrentQuestion,
    toggleResponse,
    calculateScore,
    resetQuiz
  } = useQuizStore()

  const [timeUp, setTimeUp] = useState(false)

  if (!currentQuiz) return <div>Chargement...</div>

  const currentQuestion = currentQuiz.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate final score and show results
      const finalScore = calculateScore()
      router.push(`/quiz/${quizId}/results`)
    } else {
      setCurrentQuestion(currentQuestionIndex + 1)
      setTimeUp(false)
    }
  }

  const handleResponseClick = (responseId: number) => {
    if (!timeUp) {
      toggleResponse(currentQuestion.id, responseId)
    }
  }

  const userSelectedResponses = userAnswers[currentQuestion.id] || []

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Progress Bar */}
      <Progress value={progress} color="teal" mb="lg" />

      {/* Question Counter */}
      <Text size="sm" c="dimmed" mb="md">
        Question {currentQuestionIndex + 1} sur {currentQuiz.questions.length}
      </Text>

      {/* Timer */}
      <div className="flex justify-center mb-lg">
        <CountdownCircleTimer
          isPlaying={!timeUp}
          duration={currentQuestion.duration * 60}
          colors={['#2CB0A1', '#F7B801', '#A30000']}
          colorsTime={[currentQuestion.duration * 40, currentQuestion.duration * 20, 0]}
          onComplete={() => {
            setTimeUp(true)
            return { shouldRepeat: false }
          }}
          size={120}
        >
          {({ remainingTime }) => (
            <div className="text-center">
              <Text size="xl" fw={700}>
                {Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')}
              </Text>
              <Text size="xs" c="dimmed">restant</Text>
            </div>
          )}
        </CountdownCircleTimer>
      </div>

      {/* Question Card */}
      <Card shadow="sm" padding="lg" mb="lg">
        <Title order={3} mb="md">
          {currentQuestion.name}
        </Title>

        <Text c="dimmed" size="sm" mb="lg">
          {currentQuestion.points} point{currentQuestion.points > 1 ? 's' : ''}
        </Text>

        {/* Responses */}
        <div className="space-y-3">
          {currentQuestion.responses.map((response) => {
            const isSelected = userSelectedResponses.includes(response.id)
            const showCorrect = timeUp && response.correct_answer === 1
            const showWrong = timeUp && isSelected && response.correct_answer === 0

            return (
              <Button
                key={response.id}
                variant={isSelected ? 'filled' : 'outline'}
                color={
                  showCorrect ? 'green' :
                  showWrong ? 'red' :
                  isSelected ? 'teal' :
                  'gray'
                }
                fullWidth
                size="lg"
                onClick={() => handleResponseClick(response.id)}
                disabled={timeUp}
                style={{
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  height: 'auto',
                  padding: '1rem'
                }}
              >
                {response.name}
              </Button>
            )
          })}
        </div>
      </Card>

      {/* Navigation */}
      <Group justify="space-between">
        <Button
          variant="subtle"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestionIndex - 1))}
          disabled={currentQuestionIndex === 0}
        >
          Précédent
        </Button>

        <Button
          color="teal"
          onClick={handleNext}
          disabled={!timeUp && userSelectedResponses.length === 0}
        >
          {isLastQuestion ? 'Terminer' : 'Suivant'}
        </Button>
      </Group>
    </div>
  )
}
```

### 3. Quiz Results Page

#### Create `/app/(with-header)/quiz/[quizId]/results/page.tsx`
```typescript
'use client'

import { use } from 'react'
import { useQuizStore } from '@/stores/useQuizStore'
import { Card, Title, Text, Button, Progress } from '@mantine/core'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function QuizResultsPage({ params }: { params: Promise<{ quizId: string }> }) {
  const { quizId } = use(params)
  const router = useRouter()
  const { currentQuiz, score, resetQuiz } = useQuizStore()

  if (!currentQuiz) {
    router.push('/quiz')
    return null
  }

  const totalPoints = currentQuiz.questions.reduce((sum, q) => sum + q.points, 0)
  const percentage = (score / totalPoints) * 100

  const getMessage = () => {
    if (percentage >= 80) return { text: 'Excellent !', color: 'green' }
    if (percentage >= 60) return { text: 'Bien joué !', color: 'teal' }
    if (percentage >= 40) return { text: 'Pas mal !', color: 'yellow' }
    return { text: 'Continue à t\'entraîner', color: 'orange' }
  }

  const message = getMessage()

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card shadow="md" padding="xl">
        <Title order={1} ta="center" mb="lg">
          Résultats du Quiz
        </Title>

        <Title order={2} ta="center" mb="md" c={message.color}>
          {message.text}
        </Title>

        <div className="text-center mb-lg">
          <Text size="xl" fw={700}>
            {score} / {totalPoints} points
          </Text>
          <Progress value={percentage} color="teal" size="xl" mt="md" />
          <Text size="lg" mt="sm">
            {percentage.toFixed(0)}%
          </Text>
        </div>

        <div className="space-y-3">
          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <Button fullWidth color="teal" size="lg">
              Retour aux quiz
            </Button>
          </Link>

          <Button
            fullWidth
            variant="outline"
            onClick={() => {
              resetQuiz()
              router.push(`/quiz/${quizId}`)
            }}
          >
            Recommencer ce quiz
          </Button>
        </div>
      </Card>
    </div>
  )
}
```

### 4. Update Quiz Page to Load Data

#### Edit `/app/(with-header)/quiz/[quizId]/page.tsx`
```typescript
'use client'

import { use, useEffect, useState } from 'react'
import { useQuizStore } from '@/stores/useQuizStore'
import { useUserStore } from '@/stores/useUserStore'
import { quizApi } from '@/lib/api'
import QuizPlayer from '@/components/quiz/QuizPlayer'
import { Loader } from '@mantine/core'

export default function QuizPage({ params }: { params: Promise<{ quizId: string }> }) {
  const { quizId } = use(params)
  const setQuiz = useQuizStore(state => state.setQuiz)
  const token = useUserStore(state => state.user.token)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const data = await quizApi.fetchAll(token)
        const quiz = data.quizzes.find((q: any) => q.id === parseInt(quizId))
        if (quiz) {
          setQuiz(quiz)
        }
      } catch (error) {
        console.error('Error loading quiz:', error)
      } finally {
        setLoading(false)
      }
    }

    loadQuiz()
  }, [quizId, token, setQuiz])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader color="teal" size="lg" />
      </div>
    )
  }

  return <QuizPlayer quizId={quizId} />
}
```

---

## Phase 3: Math Rendering Tools

### Goal: Display equations and geometry

### 1. Install KaTeX Dependencies
```bash
npm install katex rehype-katex remark-math react-markdown remark-gfm
npm install --save-dev @types/katex
```

### 2. Create MathContent Component

#### Create `/components/math/MathContent.tsx`
```typescript
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'

interface MathContentProps {
  content: string
}

export default function MathContent({ content }: MathContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      className="prose max-w-none"
    >
      {content}
    </ReactMarkdown>
  )
}

// Usage example:
// <MathContent content="La formule quadratique est $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$" />
```

### 3. Install GeoGebra
```bash
npm install react-geogebra
```

### 4. Create GeogebraViewer Component

#### Create `/components/math/GeogebraViewer.tsx`
```typescript
'use client'

import { Geogebra } from 'react-geogebra'

interface GeogebraViewerProps {
  appName?: string
  width?: number
  height?: number
}

export default function GeogebraViewer({
  appName = 'classic',
  width = 800,
  height = 600
}: GeogebraViewerProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Geogebra
        appName={appName}
        width={width}
        height={height}
        showToolBar={true}
        showAlgebraInput={true}
        showMenuBar={true}
      />
    </div>
  )
}
```

### 5. Create Math Demo Pages

#### Create `/app/(with-header)/math/page.tsx`
```typescript
import { Card, Title, Text, SimpleGrid } from '@mantine/core'
import Link from 'next/link'

export default function MathToolsPage() {
  const tools = [
    {
      title: 'KaTeX',
      description: 'Affichage d\'équations mathématiques avec LaTeX',
      href: '/math/katex',
      icon: '∫',
    },
    {
      title: 'GeoGebra',
      description: 'Géométrie interactive et visualisation',
      href: '/math/geogebra',
      icon: '📐',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Title order={1} mb="lg">
        Outils Mathématiques
      </Title>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{ textDecoration: 'none' }}
          >
            <Card
              shadow="sm"
              padding="lg"
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <Text size="4xl" mb="md">{tool.icon}</Text>
              <Title order={3} mb="sm">{tool.title}</Title>
              <Text c="dimmed">{tool.description}</Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  )
}
```

#### Create `/app/(with-header)/math/katex/page.tsx`
```typescript
import { Title, Text } from '@mantine/core'
import MathContent from '@/components/math/MathContent'

export default function KatexDemoPage() {
  const examples = [
    {
      title: 'Formule Quadratique',
      content: 'La solution de $ax^2 + bx + c = 0$ est:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$'
    },
    {
      title: 'Identités Trigonométriques',
      content: '$$\\sin^2(x) + \\cos^2(x) = 1$$\n\n$$\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$$'
    },
    {
      title: 'Dérivées',
      content: 'La dérivée de $f(x) = x^n$ est:\n\n$$f\'(x) = nx^{n-1}$$'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Title order={1} mb="lg">Démonstration KaTeX</Title>

      <div className="space-y-6">
        {examples.map((example, i) => (
          <div key={i} className="border rounded-lg p-6 bg-white">
            <Title order={3} mb="md">{example.title}</Title>
            <MathContent content={example.content} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

#### Create `/app/(with-header)/math/geogebra/page.tsx`
```typescript
import { Title } from '@mantine/core'
import GeogebraViewer from '@/components/math/GeogebraViewer'

export default function GeogebraDemoPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Title order={1} mb="lg">Démonstration GeoGebra</Title>
      <GeogebraViewer />
    </div>
  )
}
```

### 6. Integrate KaTeX into Quiz Questions

#### Update QuizPlayer to support math in questions
```typescript
// In QuizPlayer.tsx, replace question name display with:
import MathContent from '@/components/math/MathContent'

// Replace:
<Title order={3} mb="md">
  {currentQuestion.name}
</Title>

// With:
<div className="mb-md">
  <MathContent content={currentQuestion.name} />
</div>

// Also for responses:
{currentQuestion.responses.map((response) => (
  <Button ...>
    <MathContent content={response.name} />
  </Button>
))}
```

---

## Installation Commands Summary

```bash
# Phase 1: State & Auth
npm install zustand react-hook-form

# Phase 2: Quiz System
npm install react-countdown-circle-timer

# Phase 3: Math Tools
npm install katex rehype-katex remark-math react-markdown remark-gfm react-geogebra
npm install --save-dev @types/katex
```

---

## File Structure After Implementation

```
math-elearning/
├── app/
│   ├── env.ts (NEW)
│   ├── layout.tsx
│   ├── signin/ (NEW)
│   │   └── page.tsx
│   ├── signup/ (NEW)
│   │   └── page.tsx
│   ├── (with-header)/
│   │   ├── quiz/
│   │   │   ├── page.tsx
│   │   │   └── [quizId]/
│   │   │       ├── page.tsx (UPDATED)
│   │   │       └── results/ (NEW)
│   │   │           └── page.tsx
│   │   └── math/ (NEW)
│   │       ├── page.tsx
│   │       ├── katex/
│   │       │   └── page.tsx
│   │       └── geogebra/
│   │           └── page.tsx
│
├── components/
│   ├── quiz/ (NEW)
│   │   └── QuizPlayer.tsx
│   ├── math/ (NEW)
│   │   ├── MathContent.tsx
│   │   └── GeogebraViewer.tsx
│   └── frontend/
│       └── LoginModal.tsx (UPDATED)
│
├── stores/ (NEW)
│   ├── useUserStore.ts
│   └── useQuizStore.ts
│
├── lib/ (NEW)
│   └── api.ts
│
├── middleware.ts (NEW)
└── package.json (UPDATED)
```

---

## Testing Checklist

### Phase 1:
- [ ] User can register
- [ ] User can login
- [ ] Session persists on refresh
- [ ] Protected routes redirect
- [ ] Logout works
- [ ] LoginModal connects to store

### Phase 2:
- [ ] Quiz loads from API
- [ ] Timer counts down
- [ ] Can select/deselect responses
- [ ] Timer expiration shows correct answers
- [ ] Score calculates correctly
- [ ] Results page displays
- [ ] Can navigate between questions
- [ ] Progress bar updates

### Phase 3:
- [ ] Math equations render with KaTeX
- [ ] Inline math works ($...$)
- [ ] Display math works ($$...$$)
- [ ] GeoGebra applet loads
- [ ] GeoGebra tools work
- [ ] Math in quiz questions renders
- [ ] Math in quiz responses renders

---

## Implementation Status

### ✅ Phase 0: Mock API (COMPLETED)
- [x] Mock authentication API
- [x] Mock quiz API with 3 sample quizzes
- [x] Test user accounts
- [x] API toggle for easy switching
- [x] Documentation

### ✅ Phase 1: Authentication & State Management (COMPLETED)
- [x] Zustand stores (User & Quiz)
- [x] Environment configuration
- [x] API utilities with mock support
- [x] Sign in page with test credentials display
- [x] Sign up page
- [x] LoginModal integration
- [x] Protected route middleware

### ✅ Phase 2: Multiple Choice Quiz System (COMPLETED)
- [x] Quiz store implementation
- [x] Quiz Player component
- [x] Multiple Choice Question component
- [x] Countdown Timer component
- [x] Quiz page with API integration
- [x] Results display
- [x] Score calculation

### ⏳ Phase 3: Math Rendering Tools (PENDING)
- [ ] Install KaTeX dependencies
- [ ] Create MathContent component
- [ ] Install GeoGebra
- [ ] Create GeogebraViewer component
- [ ] Integrate into quiz questions

---

## Next Steps

1. ✅ ~~Start with Phase 1~~ - Authentication working with Mock API
2. ✅ ~~Then Phase 2~~ - Quiz system fully functional
3. ⏳ **Next: Phase 3** - Add math tools (KaTeX & GeoGebra)
4. 🔄 **Replace Mock API** - When backend is ready

### To Test Right Now:

**No login required!** Just visit:

1. **Quiz 1 - Algèbre**: `/quiz/1` (3 questions, 10 min)
2. **Quiz 2 - Géométrie**: `/quiz/2` (2 questions, 15 min)
3. **Quiz 3 - Fonctions**: `/quiz/3` (2 questions, 12 min)

Optional: Visit `/signin` to test login (credentials: `test@test.com` / `password`)

---

## File Structure (Current Implementation)

```
math-elearning/
├── app/
│   ├── env.ts ✅
│   ├── signin/page.tsx ✅
│   ├── signup/page.tsx ✅
│   └── quiz/[quizId]/page.tsx ✅
│
├── components/
│   ├── quiz/
│   │   ├── QuizPlayer.tsx ✅
│   │   ├── MultipleChoiceQuestion.tsx ✅
│   │   └── CountdownTimer.tsx ✅
│   └── frontend/
│       ├── LoginModal.tsx ✅
│       └── SignupModal.tsx ✅
│
├── stores/
│   ├── useUserStore.ts ✅
│   └── useQuizStore.ts ✅
│
├── lib/
│   ├── api.ts ✅ (with mock toggle)
│   └── mockApi.ts ✅
│
├── MOCK_API_README.md ✅
└── SIMPLIFIED_INTEGRATION_PLAN.md ✅ (this file)
```

---

**Created by**: Claude (Sonnet 4.5)
**For**: Zabaqist MVP - Essential Features Only
**Last Updated**: 2026-01-13 (Added Mock API Support)
