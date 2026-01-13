// Environment configuration for Zabaqist

// Development configuration
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'

// API endpoints
export const ENDPOINTS = {
  // Authentication
  LOGIN: '/frontend/auth/login',
  REGISTER: '/frontend/auth/register',
  FORGOT_PASSWORD: '/frontend/auth/forgot-password',

  // Quiz
  QUIZZES: '/backend/user/quiz',
  SUBMIT_QUIZ: '/backend/execution-responses-quiz',
  QUIZ_TIME_ENDED: '/backend/execution-time-ended',

  // Countries
  COUNTRIES: '/frontend/countries',
}

export const APP_ENV = process.env.NODE_ENV || 'development'
export const APP_VERSION = '2.0.0'
