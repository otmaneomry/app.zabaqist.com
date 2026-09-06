/**
 * TEMPORARY MOCK API - REPLACE WITH REAL API WHEN BACKEND IS READY
 * This file simulates API responses for development without a backend
 */

// Simulated user database (stored in memory)
const mockUsers: Array<{
  id: number
  name: string
  email: string
  password: string
  country: string
  avatar: string | null
}> = [
  {
    id: 1,
    name: "Test User",
    email: "test@test.com",
    password: "password",
    country: "Morocco",
    avatar: null,
  },
  {
    id: 2,
    name: "Demo User",
    email: "demo@demo.com",
    password: "demo123",
    country: "France",
    avatar: null,
  },
]

// Simulated quiz database - matches the Quiz Store structure
const mockQuizzes = [
  {
    id: 1,
    title: "Algèbre - Niveau 1",
    description: "Introduction aux équations du premier degré",
    duration_minutes: 10,
    questions: [
      {
        id: 1,
        text: "Résoudre: $2x + 5 = 13$",
        type: "multiple_choice",
        points: 10,
        allow_multiple: false,
        responses: [
          { id: 1, text: "$x = 4$", correct_answer: 1 },
          { id: 2, text: "$x = 8$", correct_answer: 0 },
          { id: 3, text: "$x = 9$", correct_answer: 0 },
          { id: 4, text: "$x = 6.5$", correct_answer: 0 },
        ],
      },
      {
        id: 2,
        text: "Quelle est la valeur de $x$ si $3x - 7 = 14$ ?",
        type: "multiple_choice",
        points: 10,
        allow_multiple: false,
        responses: [
          { id: 5, text: "$x = 5$", correct_answer: 0 },
          { id: 6, text: "$x = 7$", correct_answer: 1 },
          { id: 7, text: "$x = 21$", correct_answer: 0 },
          { id: 8, text: "$x = 2.33$", correct_answer: 0 },
        ],
      },
      {
        id: 3,
        text: "Simplifier: $2(x + 3) - 4x$",
        type: "multiple_choice",
        points: 10,
        allow_multiple: false,
        responses: [
          { id: 9, text: "$-2x + 6$", correct_answer: 1 },
          { id: 10, text: "$2x + 6$", correct_answer: 0 },
          { id: 11, text: "$-2x - 6$", correct_answer: 0 },
          { id: 12, text: "$6x$", correct_answer: 0 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Géométrie - Triangles",
    description: "Propriétés des triangles et théorème de Pythagore",
    duration_minutes: 15,
    questions: [
      {
        id: 4,
        text: "Dans un triangle rectangle, si les côtés sont 3 et 4, quelle est l'hypoténuse ?",
        type: "multiple_choice",
        points: 15,
        allow_multiple: false,
        responses: [
          { id: 13, text: "$5$", correct_answer: 1 },
          { id: 14, text: "$7$", correct_answer: 0 },
          { id: 15, text: "$6$", correct_answer: 0 },
          { id: 16, text: "$4.5$", correct_answer: 0 },
        ],
      },
      {
        id: 5,
        text: "Quelles affirmations sont vraies pour un triangle équilatéral ?",
        type: "multiple_choice",
        points: 15,
        allow_multiple: true,
        responses: [
          { id: 17, text: "Tous les côtés sont égaux", correct_answer: 1 },
          { id: 18, text: "Tous les angles sont égaux", correct_answer: 1 },
          { id: 19, text: "Chaque angle mesure 60°", correct_answer: 1 },
          { id: 20, text: "Il a un angle droit", correct_answer: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Fonctions - Introduction",
    description: "Comprendre les fonctions linéaires et affines",
    duration_minutes: 12,
    questions: [
      {
        id: 6,
        text: "Si $f(x) = 2x + 3$, quelle est la valeur de $f(5)$ ?",
        type: "multiple_choice",
        points: 10,
        allow_multiple: false,
        responses: [
          { id: 21, text: "$13$", correct_answer: 1 },
          { id: 22, text: "$10$", correct_answer: 0 },
          { id: 23, text: "$8$", correct_answer: 0 },
          { id: 24, text: "$15$", correct_answer: 0 },
        ],
      },
      {
        id: 7,
        text: "Quelle est la pente de la droite $y = -3x + 7$ ?",
        type: "multiple_choice",
        points: 10,
        allow_multiple: false,
        responses: [
          { id: 25, text: "$-3$", correct_answer: 1 },
          { id: 26, text: "$3$", correct_answer: 0 },
          { id: 27, text: "$7$", correct_answer: 0 },
          { id: 28, text: "$-7$", correct_answer: 0 },
        ],
      },
    ],
  },
]

/**
 * Simulate API delay
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Mock Authentication API
 */
export const mockAuthApi = {
  /**
   * Login user
   */
  login: async (email: string, password: string) => {
    await delay(500) // Simulate network delay

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (!user) {
      throw new Error("Email ou mot de passe incorrect")
    }

    // Generate a fake token
    const token = `mock_token_${user.id}_${Date.now()}`

    return {
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        country: user.country,
        avatar: user.avatar,
        token,
      },
    }
  },

  /**
   * Register new user
   */
  register: async (data: {
    name: string
    email: string
    password: string
    country: string
  }) => {
    await delay(500)

    // Check if user already exists
    if (mockUsers.find((u) => u.email === data.email)) {
      throw new Error("Cet email est déjà utilisé")
    }

    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      name: data.name,
      email: data.email,
      password: data.password,
      country: data.country,
      avatar: null,
    }

    mockUsers.push(newUser)

    // Generate token
    const token = `mock_token_${newUser.id}_${Date.now()}`

    return {
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        country: newUser.country,
        avatar: newUser.avatar,
        token,
      },
    }
  },

  /**
   * Request password reset
   */
  forgotPassword: async (email: string) => {
    await delay(500)

    const user = mockUsers.find((u) => u.email === email)

    if (!user) {
      throw new Error("Aucun compte trouvé avec cet email")
    }

    return {
      message: "Instructions de réinitialisation envoyées par email",
    }
  },
}

/**
 * Mock Quiz API
 */
export const mockQuizApi = {
  /**
   * Fetch all available quizzes (no auth required)
   */
  fetchAll: async (token: string | null) => {
    await delay(300)

    // Auth not required for simplified app
    return {
      quizzes: mockQuizzes,
    }
  },

  /**
   * Submit quiz responses (no auth required)
   */
  submitQuiz: async (
    token: string | null,
    data: {
      quizId: number
      questionId: number
      responses: Array<{ responseId: number; selected: boolean }>
      startDate?: number
    }
  ) => {
    await delay(300)

    // Auth not required for simplified app
    return {
      success: true,
      message: "Réponse enregistrée",
    }
  },

  /**
   * Mark quiz time as ended (no auth required)
   */
  timeEnded: async (
    token: string | null,
    data: {
      quizId: number
      questionId: number
    }
  ) => {
    await delay(300)

    // Auth not required for simplified app
    return {
      success: true,
      message: "Temps terminé",
    }
  },
}

/**
 * Mock Countries API
 */
export const mockCountriesApi = {
  /**
   * Fetch all countries
   */
  fetchAll: async () => {
    await delay(200)

    return {
      countries: [
        { id: 1, name: "Morocco" },
        { id: 2, name: "France" },
        { id: 3, name: "Tunisia" },
        { id: 4, name: "Algeria" },
        { id: 5, name: "Spain" },
        { id: 6, name: "Italy" },
      ],
    }
  },
}

// Test credentials for easy reference
if (process.env.NODE_ENV !== 'production') console.log("🔧 MOCK API ACTIVE - Test Credentials:")
if (process.env.NODE_ENV !== 'production') console.log("  Email: test@test.com | Password: password")
if (process.env.NODE_ENV !== 'production') console.log("  Email: demo@demo.com | Password: demo123")
