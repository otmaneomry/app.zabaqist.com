import { API_URL } from '@/app/env'

// TEMPORARY: Import mock API until backend is ready
import {
  mockAuthApi,
  mockQuizApi,
  mockCountriesApi,
} from './mockApi'

interface ApiOptions extends RequestInit {
  token?: string | null
}

// Toggle between mock and real API
const USE_MOCK_API = true // Set to false when backend is ready

/**
 * Generic API call utility with automatic token injection
 */
export async function apiCall(endpoint: string, options: ApiOptions = {}) {
  const { token, ...fetchOptions } = options

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string> || {}),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'API Error' }))
    throw new Error(errorData.message || `API Error: ${response.status}`)
  }

  return response.json()
}

/**
 * Authentication API calls
 */
export const authApi = USE_MOCK_API ? mockAuthApi : {
  /**
   * Login user
   */
  login: async (email: string, password: string) => {
    return apiCall('/frontend/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
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
    return apiCall('/frontend/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  /**
   * Request password reset
   */
  forgotPassword: async (email: string) => {
    return apiCall('/frontend/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  },
}

/**
 * Quiz API calls
 */
export const quizApi = USE_MOCK_API ? mockQuizApi : {
  /**
   * Fetch all available quizzes
   */
  fetchAll: async (token: string | null) => {
    return apiCall('/backend/user/quiz', {
      method: 'GET',
      token,
    })
  },

  /**
   * Submit quiz responses
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
    return apiCall('/backend/execution-responses-quiz', {
      method: 'POST',
      token,
      body: JSON.stringify(data),
    })
  },

  /**
   * Mark quiz time as ended
   */
  timeEnded: async (
    token: string | null,
    data: {
      quizId: number
      questionId: number
    }
  ) => {
    return apiCall('/backend/execution-time-ended', {
      method: 'POST',
      token,
      body: JSON.stringify(data),
    })
  },
}

/**
 * Countries API calls
 */
export const countriesApi = USE_MOCK_API ? mockCountriesApi : {
  /**
   * Fetch all countries
   */
  fetchAll: async () => {
    return apiCall('/frontend/countries', {
      method: 'GET',
    })
  },
}
