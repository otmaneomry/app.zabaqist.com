/**
 * Progress Tracking Utility
 * Saves student progress to localStorage
 */

import { logSectionRead, logSeconds } from './activity'

/**
 * What this device remembers about one chapter.
 *
 * It used to carry `exercisesAttempted`, `exercisesCompleted`,
 * `homeworkStarted` and `homeworkCompleted` — four fields left from the
 * hand-written JSX courses, which nothing has written or read since the
 * markdown migration. `getCompletionPercentage` scored them on invented
 * weights (40% for tabs over a hardcoded six, 30% for exercises "assume 4",
 * 30% for homework) and had no callers at all: a second, wrong answer to the
 * question `summarize()` already answers by counting sections against the
 * chapter's real total.
 */
export interface CourseProgress {
  courseId: string
  lastVisitedTab: string
  completedTabs: string[]
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
    lastUpdated: new Date().toISOString(),
    timeSpent: 0
  }

  if (!progress.completedTabs.includes(tabId)) {
    progress.completedTabs.push(tabId)
    // Dated history for the dashboard — only on the FIRST open, so revisiting
    // a section does not inflate the chart.
    logSectionRead()
  }
  progress.lastVisitedTab = tabId

  saveCourseProgress(progress)
}





/**
 * Add time spent on course
 */
export function addTimeSpent(courseId: string, seconds: number): void {
  const progress = getCourseProgress(courseId)
  if (!progress) return

  progress.timeSpent += seconds
  logSeconds(seconds)
  saveCourseProgress(progress)
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

