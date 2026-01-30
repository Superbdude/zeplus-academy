import { API_CONFIG, authenticatedApiCall } from '../config/api'

export interface Submission {
  id: string | number
  formType: string
  data: any
  createdAt: string
  updatedAt?: string
  status?: string
}

// Form type categories as used in the dashboard
export const FORM_CATEGORIES = {
  INSIDER: 'insider',
  COURSES: 'courses',
  TECH4TEEN: 'tech4teen',
  PARTNER: 'partner',
  SCHOOL: 'school',
} as const

// All course form types
export const COURSE_FORM_TYPES = [
  'apply_now',
  'frontend',
  'cybersecurity',
  'data',
  'deeplearning',
  'generative',
  'introweb',
  'Introweb',
  'introcybersecurity',
  'fullstack',
  'uidesign',
  'digital',
  'gamedevelopment',
  'mastery',
  'introai',
  'Introai',
  'aimachine',
  'cybersecurityai',
  'teen-adult-brochure'
] as const

/**
 * Generic function to fetch submissions from any category endpoint
 */
const fetchFromEndpoint = async (endpoint: string): Promise<Submission[]> => {
  try {
    return await authenticatedApiCall(endpoint, { method: 'GET' })
  } catch (error) {
    console.error(`Failed to fetch from ${endpoint}:`, error)
    throw error
  }
}

/**
 * Get all insider form submissions
 * GET /insider/getAllInsiders
 */
export const fetchInsiderSubmissions = async (): Promise<Submission[]> => {
  return fetchFromEndpoint(API_CONFIG.ENDPOINTS.INSIDER_GET_ALL)
}

/**
 * Create insider submission
 * POST /insider/createInsider
 */
export const createInsiderSubmission = async (data: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.INSIDER_CREATE, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Failed to create insider submission:', error)
    throw error
  }
}

/**
 * Get insider submission by ID
 * GET /insider/getInsiderById/:id
 */
export const getInsiderSubmissionById = async (id: string | number): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.INSIDER_GET_BY_ID}/${id}`, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get insider submission:', error)
    throw error
  }
}

/**
 * Update insider submission status
 * PATCH /insider/updateInsiderStatus/:id
 */
export const updateInsiderStatus = async (id: string | number, status: string): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.INSIDER_UPDATE_STATUS}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    })
  } catch (error) {
    console.error('Failed to update insider status:', error)
    throw error
  }
}

/**
 * Delete insider submission
 * DELETE /insider/deleteInsider/:id
 */
export const deleteInsiderSubmission = async (id: string | number): Promise<void> => {
  try {
    await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.INSIDER_DELETE}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete insider submission:', error)
    throw error
  }
}

// ============================================
// COURSES AND BROCHURES ENDPOINTS
// ============================================

/**
 * Get all course submissions
 * GET /courses/getAllCourses
 */
export const fetchCourseSubmissions = async (): Promise<Submission[]> => {
  return fetchFromEndpoint(API_CONFIG.ENDPOINTS.COURSES_GET_ALL)
}

/**
 * Create course submission
 * POST /courses/createCourse
 */
export const createCourseSubmission = async (data: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.COURSES_CREATE, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Failed to create course submission:', error)
    throw error
  }
}

/**
 * Get course submission by ID
 * GET /courses/getCourseById/:id
 */
export const getCourseSubmissionById = async (id: string | number): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.COURSES_GET_BY_ID}/${id}`, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get course submission:', error)
    throw error
  }
}

/**
 * Update course submission status
 * PATCH /courses/updateCourseStatus/:id
 */
export const updateCourseStatus = async (id: string | number, status: string): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.COURSES_UPDATE_STATUS}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    })
  } catch (error) {
    console.error('Failed to update course status:', error)
    throw error
  }
}

/**
 * Delete course submission
 * DELETE /courses/deleteCourse/:id
 */
export const deleteCourseSubmission = async (id: string | number): Promise<void> => {
  try {
    await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.COURSES_DELETE}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete course submission:', error)
    throw error
  }
}

// ============================================
// TECH4TEEN ENDPOINTS
// ============================================

/**
 * Get all Tech4Teen submissions
 * GET /tech4teen/getAllTech4Teens
 */
export const fetchTech4TeenSubmissions = async (): Promise<Submission[]> => {
  return fetchFromEndpoint(API_CONFIG.ENDPOINTS.TECH4TEEN_GET_ALL)
}

/**
 * Create Tech4Teen submission
 * POST /tech4teen/createTech4Teen
 */
export const createTech4TeenSubmission = async (data: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.TECH4TEEN_CREATE, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Failed to create Tech4Teen submission:', error)
    throw error
  }
}

/**
 * Get Tech4Teen submission by ID
 * GET /tech4teen/getTech4TeenById/:id
 */
export const getTech4TeenSubmissionById = async (id: string | number): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.TECH4TEEN_GET_BY_ID}/${id}`, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get Tech4Teen submission:', error)
    throw error
  }
}

/**
 * Update Tech4Teen submission status
 * PATCH /tech4teen/updateTech4TeenStatus/:id
 */
export const updateTech4TeenStatus = async (id: string | number, status: string): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.TECH4TEEN_UPDATE_STATUS}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    })
  } catch (error) {
    console.error('Failed to update Tech4Teen status:', error)
    throw error
  }
}

/**
 * Delete Tech4Teen submission
 * DELETE /tech4teen/deleteTech4Teen/:id
 */
export const deleteTech4TeenSubmission = async (id: string | number): Promise<void> => {
  try {
    await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.TECH4TEEN_DELETE}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete Tech4Teen submission:', error)
    throw error
  }
}

// ============================================
// PARTNER ENDPOINTS
// ============================================

/**
 * Get all partner submissions
 * GET /partner/getPartners
 */
export const fetchPartnerSubmissions = async (): Promise<Submission[]> => {
  return fetchFromEndpoint(API_CONFIG.ENDPOINTS.PARTNER_GET_ALL)
}

/**
 * Create partner submission
 * POST /partner/createPartner
 */
export const createPartnerSubmission = async (data: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.PARTNER_CREATE, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Failed to create partner submission:', error)
    throw error
  }
}

/**
 * Get partner submission by ID
 * GET /partner/getPartnerById/:id
 */
export const getPartnerSubmissionById = async (id: string | number): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.PARTNER_GET_BY_ID}/${id}`, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get partner submission:', error)
    throw error
  }
}

/**
 * Update partner submission status
 * PUT /partner/updatePartnerStatus/:id
 */
export const updatePartnerStatus = async (id: string | number, status: string): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.PARTNER_UPDATE_STATUS}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    })
  } catch (error) {
    console.error('Failed to update partner status:', error)
    throw error
  }
}

/**
 * Update partner submission details
 * PUT /partner/updatePartner/:id
 */
export const updatePartnerSubmission = async (id: string | number, updates: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.PARTNER_UPDATE}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  } catch (error) {
    console.error('Failed to update partner submission:', error)
    throw error
  }
}

/**
 * Delete partner submission
 * DELETE /partner/deletePartnerrtne/:id
 */
export const deletePartnerSubmission = async (id: string | number): Promise<void> => {
  try {
    await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.PARTNER_DELETE}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete partner submission:', error)
    throw error
  }
}

// ============================================
// SCHOOL PARTNERSHIP ENDPOINTS
// ============================================

/**
 * Get all school partnership submissions
 * GET /school/getSchools
 */
export const fetchSchoolSubmissions = async (): Promise<Submission[]> => {
  return fetchFromEndpoint(API_CONFIG.ENDPOINTS.SCHOOL_GET_ALL)
}

/**
 * Create school partnership submission
 * POST /school/createSchool
 */
export const createSchoolSubmission = async (data: any): Promise<Submission> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.SCHOOL_CREATE, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Failed to create school submission:', error)
    throw error
  }
}

/**
 * Get school submission by ID
 * GET /school/getSchoolById/:id
 */
export const getSchoolSubmissionById = async (id: string | number): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.SCHOOL_GET_BY_ID}/${id}`, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get school submission:', error)
    throw error
  }
}

/**
 * Update school submission status
 * PATCH /school/updateStatus/:id
 */
export const updateSchoolStatus = async (id: string | number, status: string): Promise<Submission> => {
  try {
    return await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.SCHOOL_UPDATE_STATUS}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    })
  } catch (error) {
    console.error('Failed to update school status:', error)
    throw error
  }
}

/**
 * Delete school submission
 * DELETE /school/deleteSchool/:id
 */
export const deleteSchoolSubmission = async (id: string | number): Promise<void> => {
  try {
    await authenticatedApiCall(`${API_CONFIG.ENDPOINTS.SCHOOL_DELETE}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete school submission:', error)
    throw error
  }
}

// ============================================
// DASHBOARD METRICS
// ============================================

/**
 * Fetch dashboard metrics - get counts for each form category
 */
export const fetchDashboardMetrics = async (): Promise<any> => {
  try {
    const [insiders, courses, tech4teens, partners, schools] = await Promise.all([
      fetchInsiderSubmissions().catch(() => []),
      fetchCourseSubmissions().catch(() => []),
      fetchTech4TeenSubmissions().catch(() => []),
      fetchPartnerSubmissions().catch(() => []),
      fetchSchoolSubmissions().catch(() => []),
    ])

    // Ensure each result is an array, even if API returns unexpected data
    const ensureArray = (data: any): any[] => {
      if (Array.isArray(data)) return data
      console.warn('API returned non-array data:', data)
      return []
    }

    const insidersArray = ensureArray(insiders)
    const coursesArray = ensureArray(courses)
    const tech4teensArray = ensureArray(tech4teens)
    const partnersArray = ensureArray(partners)
    const schoolsArray = ensureArray(schools)

    // Filter out null/undefined items from each array
    const filteredInsiders = insidersArray.filter(item => item && typeof item === 'object')
    const filteredCourses = coursesArray.filter(item => item && typeof item === 'object')
    const filteredTech4teens = tech4teensArray.filter(item => item && typeof item === 'object')
    const filteredPartners = partnersArray.filter(item => item && typeof item === 'object')
    const filteredSchools = schoolsArray.filter(item => item && typeof item === 'object')

    return {
      totalForms: filteredInsiders.length + filteredCourses.length + filteredTech4teens.length + filteredPartners.length + filteredSchools.length,
      insiderForms: filteredInsiders.length,
      courseBrochureForms: filteredCourses.length,
      techForTeen: filteredTech4teens.length,
      generalPartnership: filteredPartners.length,
      schoolPartnership: filteredSchools.length,
      aiBootcamp: 0, // Not in current API structure
      // Also return the filtered data for the chart component
      insider: filteredInsiders,
      courses: filteredCourses,
      tech4teen: filteredTech4teens,
      partner: filteredPartners,
      school: filteredSchools,
    }
  } catch (error) {
    console.error('Failed to fetch dashboard metrics:', error)
    throw error
  }
}

/**
 * Get grouped submissions by category
 */
export const fetchSubmissionsByCategory = async (): Promise<Record<string, Submission[]>> => {
  try {
    const [insiders, courses, tech4teens, partners, schools] = await Promise.all([
      fetchInsiderSubmissions().catch(() => []),
      fetchCourseSubmissions().catch(() => []),
      fetchTech4TeenSubmissions().catch(() => []),
      fetchPartnerSubmissions().catch(() => []),
      fetchSchoolSubmissions().catch(() => []),
    ])

    // Ensure each result is an array
    const ensureArray = (data: any): Submission[] => {
      if (Array.isArray(data)) return data
      console.warn('API returned non-array data:', data)
      return []
    }

    return {
      insider: ensureArray(insiders),
      courses: ensureArray(courses),
      tech4teen: ensureArray(tech4teens),
      partner: ensureArray(partners),
      school: ensureArray(schools),
    }
  } catch (error) {
    console.error('Failed to fetch submissions by category:', error)
    throw error
  }
}
