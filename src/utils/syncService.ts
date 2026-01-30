import { getAllSubmissions } from './storage'
import {
  createInsiderSubmission,
  createCourseSubmission,
  createTech4TeenSubmission,
  createPartnerSubmission,
  createSchoolSubmission,
} from '../services/submissionsService'

/**
 * Sync localStorage submissions to backend when admin logs in
 */
export const syncLocalStorageToBackend = async (): Promise<void> => {
  try {
    const localData = getAllSubmissions()
    let syncCount = 0

    // Sync insider forms
    if (localData.insider && Array.isArray(localData.insider)) {
      for (const submission of localData.insider) {
        try {
          await createInsiderSubmission(submission.data)
          syncCount++
        } catch (error) {
          console.warn('Failed to sync insider submission:', error)
        }
      }
    }

    // Sync course forms
    const courseTypes = ['apply_now', 'frontend', 'cybersecurity', 'data', 'deeplearning', 'generative', 'introai', 'uidesign', 'fullstack', 'digital', 'gamedevelopment', 'aimachine', 'introweb', 'introcybersecurity', 'cybersecurityai']

    for (const courseType of courseTypes) {
      if (localData[courseType] && Array.isArray(localData[courseType])) {
        for (const submission of localData[courseType]) {
          try {
            await createCourseSubmission(submission.data)
            syncCount++
          } catch (error) {
            console.warn(`Failed to sync ${courseType} submission:`, error)
          }
        }
      }
    }

    // Sync tech4teen forms
    if (localData.tech4teen && Array.isArray(localData.tech4teen)) {
      for (const submission of localData.tech4teen) {
        try {
          await createTech4TeenSubmission(submission.data)
          syncCount++
        } catch (error) {
          console.warn('Failed to sync tech4teen submission:', error)
        }
      }
    }

    // Sync partner forms
    if (localData.becomepartner && Array.isArray(localData.becomepartner)) {
      for (const submission of localData.becomepartner) {
        try {
          await createPartnerSubmission(submission.data)
          syncCount++
        } catch (error) {
          console.warn('Failed to sync partner submission:', error)
        }
      }
    }

    // Sync school forms
    if (localData.schoolpartner && Array.isArray(localData.schoolpartner)) {
      for (const submission of localData.schoolpartner) {
        try {
          await createSchoolSubmission(submission.data)
          syncCount++
        } catch (error) {
          console.warn('Failed to sync school submission:', error)
        }
      }
    }

    if (syncCount > 0) {
      console.log(`Successfully synced ${syncCount} submissions to backend`)
      // Clear localStorage after successful sync
      localStorage.removeItem('zeplus_submissions')
    }
  } catch (error) {
    console.error('Failed to sync localStorage to backend:', error)
  }
}