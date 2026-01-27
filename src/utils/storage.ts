import { API_CONFIG, apiCall } from '../config/api'

export type SubmissionRecord = {
  id: number
  createdAt: string
  data: any
}

const STORAGE_KEY = 'zeplus_submissions'
const USE_BACKEND = true // Set to false to use localStorage only

// Map form types to backend endpoints
const getEndpointForFormType = (formType: string): string => {
  const formTypeLower = formType.toLowerCase()
  
  if (formTypeLower === 'insider') return API_CONFIG.ENDPOINTS.INSIDER
  if (formTypeLower.includes('course') || formTypeLower.includes('bootcamp') || 
      ['frontend', 'cybersecurity', 'data', 'deeplearning', 'generative', 'introai', 'uidesign', 'fullstack', 'digital', 'gamedevelopment', 'aimachine', 'introweb', 'introcybersecurity', 'cybersecurityai'].includes(formTypeLower)) {
    return API_CONFIG.ENDPOINTS.COURSES
  }
  if (formTypeLower === 'tech4teen') return API_CONFIG.ENDPOINTS.TECH4TEEN
  if (formTypeLower === 'schoolpartner' || formTypeLower === 'school') return API_CONFIG.ENDPOINTS.SCHOOL
  if (formTypeLower === 'becomepartner' || formTypeLower === 'partner') return API_CONFIG.ENDPOINTS.PARTNER
  
  // Default to courses for unknown types
  return API_CONFIG.ENDPOINTS.COURSES
}

export const saveSubmission = async (formType: string, data: any) => {
  try {
    // Try to save to backend first
    if (USE_BACKEND) {
      try {
        const endpoint = getEndpointForFormType(formType)
        const response = await apiCall(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            formType,
            data,
            timestamp: new Date().toISOString(),
          }),
        })
        
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
