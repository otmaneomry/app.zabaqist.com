import { create } from 'zustand'

interface Response {
  id: number
  text: string
  correct_answer?: number
}

interface Question {
  id: number
  text: string
  type: string
  points: number
  allow_multiple?: boolean
  responses: Response[]
}

interface Quiz {
  id: number
  title: string
  duration_minutes?: number
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
