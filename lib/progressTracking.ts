/**
 * Progress Tracking Utility
 * Saves student progress to localStorage
 */

export interface CourseProgress {
  courseId: string
  lastVisitedTab: string
  completedTabs: string[]
  exercisesAttempted: number[]
  exercisesCompleted: number[]
  homeworkStarted: boolean
  homeworkCompleted: boolean
  lastUpdated: string
  timeSpent: number // in seconds
}

const STORAGE_KEY = 'zabaqist_course_progress'

/**
 * Get progress for a specific course
 */
export function getCourseProgress(courseId: string): CourseProgress | null {
  if (typeof window === 'undefined') return null

  try {
    const allProgress = localStorage.getItem(STORAGE_KEY)
    if (!allProgress) return null

    const progressMap: Record<string, CourseProgress> = JSON.parse(allProgress)
    return progressMap[courseId] || null
  } catch (error) {
    console.error('Error reading progress:', error)
    return null
  }
}

/**
 * Save progress for a specific course
 */
export function saveCourseProgress(progress: CourseProgress): void {
  if (typeof window === 'undefined') return

  try {
    const allProgress = localStorage.getItem(STORAGE_KEY)
    const progressMap: Record<string, CourseProgress> = allProgress
      ? JSON.parse(allProgress)
      : {}

    progressMap[progress.courseId] = {
      ...progress,
      lastUpdated: new Date().toISOString()
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressMap))
  } catch (error) {
    console.error('Error saving progress:', error)
  }
}

/**
 * Mark a tab as completed
 */
export function markTabCompleted(courseId: string, tabId: string): void {
  const progress = getCourseProgress(courseId) || {
    courseId,
    lastVisitedTab: tabId,
    completedTabs: [],
    exercisesAttempted: [],
    exercisesCompleted: [],
    homeworkStarted: false,
    homeworkCompleted: false,
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  if (!progress.completedTabs.includes(tabId)) {
    progress.completedTabs.push(tabId)
  }
  progress.lastVisitedTab = tabId

  saveCourseProgress(progress)
}

/**
 * Mark an exercise as attempted
 */
export function markExerciseAttempted(courseId: string, exerciseNumber: number): void {
  const progress = getCourseProgress(courseId) || {
    courseId,
    lastVisitedTab: 'exercices',
    completedTabs: [],
    exercisesAttempted: [],
    exercisesCompleted: [],
    homeworkStarted: false,
    homeworkCompleted: false,
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  if (!progress.exercisesAttempted.includes(exerciseNumber)) {
    progress.exercisesAttempted.push(exerciseNumber)
  }

  saveCourseProgress(progress)
}

/**
 * Mark an exercise as completed
 */
export function markExerciseCompleted(courseId: string, exerciseNumber: number): void {
  const progress = getCourseProgress(courseId) || {
    courseId,
    lastVisitedTab: 'exercices',
    completedTabs: [],
    exercisesAttempted: [],
    exercisesCompleted: [],
    homeworkStarted: false,
    homeworkCompleted: false,
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  if (!progress.exercisesCompleted.includes(exerciseNumber)) {
    progress.exercisesCompleted.push(exerciseNumber)
  }

  markExerciseAttempted(courseId, exerciseNumber)
}

/**
 * Mark homework as started
 */
export function markHomeworkStarted(courseId: string): void {
  const progress = getCourseProgress(courseId) || {
    courseId,
    lastVisitedTab: 'devoir',
    completedTabs: [],
    exercisesAttempted: [],
    exercisesCompleted: [],
    homeworkStarted: false,
    homeworkCompleted: false,
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  progress.homeworkStarted = true
  saveCourseProgress(progress)
}

/**
 * Mark homework as completed
 */
export function markHomeworkCompleted(courseId: string): void {
  const progress = getCourseProgress(courseId) || {
    courseId,
    lastVisitedTab: 'devoir',
    completedTabs: [],
    exercisesAttempted: [],
    exercisesCompleted: [],
    homeworkStarted: false,
    homeworkCompleted: false,
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  progress.homeworkCompleted = true
  markHomeworkStarted(courseId)
}

/**
 * Add time spent on course
 */
export function addTimeSpent(courseId: string, seconds: number): void {
  const progress = getCourseProgress(courseId)
  if (!progress) return

  progress.timeSpent += seconds
  saveCourseProgress(progress)
}

/**
 * Calculate completion percentage
 */
export function getCompletionPercentage(courseId: string, totalTabs: number = 6): number {
  const progress = getCourseProgress(courseId)
  if (!progress) return 0

  let completed = 0
  const weights = {
    tabs: 0.4,          // 40% for viewing tabs
    exercises: 0.3,     // 30% for exercises
    homework: 0.3       // 30% for homework
  }

  // Tab completion
  completed += (progress.completedTabs.length / totalTabs) * weights.tabs

  // Exercise completion (assume 4 exercises)
  completed += (progress.exercisesCompleted.length / 4) * weights.exercises

  // Homework completion
  if (progress.homeworkCompleted) {
    completed += weights.homework
  } else if (progress.homeworkStarted) {
    completed += weights.homework * 0.5
  }

  return Math.round(completed * 100)
}

/**
 * Get formatted time spent
 */
export function getFormattedTimeSpent(courseId: string): string {
  const progress = getCourseProgress(courseId)
  if (!progress) return '0m'

  const seconds = progress.timeSpent
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

/**
 * Reset progress for a course (for testing)
 */
export function resetCourseProgress(courseId: string): void {
  if (typeof window === 'undefined') return

  try {
    const allProgress = localStorage.getItem(STORAGE_KEY)
    if (!allProgress) return

    const progressMap: Record<string, CourseProgress> = JSON.parse(allProgress)
    delete progressMap[courseId]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressMap))
  } catch (error) {
    console.error('Error resetting progress:', error)
  }
}
