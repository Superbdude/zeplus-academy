import {
  createInsiderSubmission,
  createCourseSubmission,
  createTech4TeenSubmission,
  createPartnerSubmission,
  createSchoolSubmission,
} from '../services/submissionsService'

export type SubmissionRecord = {
  id: number
  createdAt: string
  data: any
}

const STORAGE_KEY = 'zeplus_submissions'
const USE_BACKEND = true // Re-enable backend

export const saveSubmission = async (formType: string, data: any) => {
  try {
    // Try to save to backend first
    if (USE_BACKEND) {
      try {
        let response

        // Use specific backend submission functions based on form type
        const formTypeLower = formType.toLowerCase()
        if (formTypeLower === 'insider') {
          response = await createInsiderSubmission(data)
        } else if (formTypeLower === 'tech4teen') {
          response = await createTech4TeenSubmission(data)
        } else if (formTypeLower === 'schoolpartner' || formTypeLower === 'school') {
          response = await createSchoolSubmission(data)
        } else if (formTypeLower === 'becomepartner' || formTypeLower === 'partner') {
          response = await createPartnerSubmission(data)
        } else {
          // Default to course submission for all other types
          response = await createCourseSubmission(data)
        }

        // If backend success, also save to localStorage as fallback
        saveToLocalStorage(formType, data)
        window.dispatchEvent(new Event('zeplus:submission'))
        return response
      } catch (backendError) {
        console.warn('Backend submission failed, falling back to localStorage:', backendError)
        // Fall back to localStorage if backend fails
        saveToLocalStorage(formType, data)
        window.dispatchEvent(new Event('zeplus:submission'))
      }
    } else {
      saveToLocalStorage(formType, data)
      window.dispatchEvent(new Event('zeplus:submission'))
    }
  } catch (err) {
    console.error('saveSubmission error:', err)
    throw err
  }
}

const saveToLocalStorage = (formType: string, data: any) => {
  const raw = localStorage.getItem(STORAGE_KEY) || '{}'
  const all = JSON.parse(raw) as Record<string, SubmissionRecord[]>
  if (!all[formType]) all[formType] = []
  all[formType].push({ id: Date.now(), createdAt: new Date().toISOString(), data })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
}

export const getAllSubmissions = (): Record<string, SubmissionRecord[]> => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch (err) {
    return {}
  }
}

export const clearSubmissions = (formType?: string) => {
  try {
    if (!formType) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    const all = getAllSubmissions()
    delete all[formType]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch (err) {
    // no-op
  }
}

// Confirm a submission by ID
export const confirmSubmission = (formType: string, submissionId: number) => {
  try {
    const all = getAllSubmissions()
    if (!all[formType]) return
    
    const submissions = all[formType]
    const index = submissions.findIndex(s => s.id === submissionId)
    
    if (index >= 0) {
      submissions[index].data = {
        ...submissions[index].data,
        status: 'Confirmed'
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
      window.dispatchEvent(new Event('zeplus:submission'))
    }
  } catch (err) {
    console.error('confirmSubmission error', err)
  }
}
