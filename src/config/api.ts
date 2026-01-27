// API configuration for connecting to the backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://zeplus.onrender.com/api/v1'

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    // INSIDER ROUTES
    INSIDER_CREATE: `${API_BASE_URL}/insider/createInsider`,
    INSIDER_GET_ALL: `${API_BASE_URL}/insider/getAllInsiders`,
    INSIDER_GET_BY_ID: `${API_BASE_URL}/insider/getInsiderById`,
    INSIDER_UPDATE_STATUS: `${API_BASE_URL}/insider/updateInsiderStatus`,
    INSIDER_DELETE: `${API_BASE_URL}/insider/deleteInsider`,
    INSIDER: `${API_BASE_URL}/insider`,
    
    // COURSES & BROCHURE ROUTES
    COURSES_CREATE: `${API_BASE_URL}/courses/createCourse`,
    COURSES_GET_ALL: `${API_BASE_URL}/courses/getAllCourses`,
    COURSES_GET_BY_ID: `${API_BASE_URL}/courses/getCourseById`,
    COURSES_UPDATE_STATUS: `${API_BASE_URL}/courses/updateCourseStatus`,
    COURSES_DELETE: `${API_BASE_URL}/courses/deleteCourse`,
    COURSES: `${API_BASE_URL}/courses`,
    
    // TECH4TEEN ROUTES
    TECH4TEEN_CREATE: `${API_BASE_URL}/tech4teen/createTech4Teen`,
    TECH4TEEN_GET_ALL: `${API_BASE_URL}/tech4teen/getAllTech4Teens`,
    TECH4TEEN_GET_BY_ID: `${API_BASE_URL}/tech4teen/getTech4TeenById`,
    TECH4TEEN_UPDATE_STATUS: `${API_BASE_URL}/tech4teen/updateTech4TeenStatus`,
    TECH4TEEN_DELETE: `${API_BASE_URL}/tech4teen/deleteTech4Teen`,
    TECH4TEEN: `${API_BASE_URL}/tech4teen`,
    
    // PARTNER ROUTES
    PARTNER_CREATE: `${API_BASE_URL}/partner/createPartner`,
    PARTNER_GET_ALL: `${API_BASE_URL}/partner/getPartners`,
    PARTNER_GET_BY_ID: `${API_BASE_URL}/partner/getPartnerById`,
    PARTNER_UPDATE_STATUS: `${API_BASE_URL}/partner/updatePartnerStatus`,
    PARTNER_UPDATE: `${API_BASE_URL}/partner/updatePartner`,
    PARTNER_DELETE: `${API_BASE_URL}/partner/deletePartnerrtne`,
    PARTNER: `${API_BASE_URL}/partner`,
    
    // SCHOOL PARTNERSHIP ROUTES
    SCHOOL_CREATE: `${API_BASE_URL}/school/createSchool`,
    SCHOOL_GET_ALL: `${API_BASE_URL}/school/getSchools`,
    SCHOOL_GET_BY_ID: `${API_BASE_URL}/school/getSchoolById`,
    SCHOOL_UPDATE_STATUS: `${API_BASE_URL}/school/updateStatus`,
    SCHOOL_DELETE: `${API_BASE_URL}/school/deleteSchool`,
    SCHOOL: `${API_BASE_URL}/school`,
    
    // USER AUTHENTICATION ROUTES
    USER_REGISTER: `${API_BASE_URL}/user/register`,
    USER_LOGIN: `${API_BASE_URL}/user/login`,
    FORGOT_PASSWORD: `${API_BASE_URL}/user/forgotPassword`,
    RESEND_OTP: `${API_BASE_URL}/user/resendOtp`,
    RESET_PASSWORD: `${API_BASE_URL}/user/resetPassword`,
    
    // USER PROFILE & SETTINGS ROUTES
    UPDATE_PASSWORD: `${API_BASE_URL}/user/updatePassword`,
    UPDATE_PROFILE: `${API_BASE_URL}/user/updateProfile`,
    GET_PROFILE: `${API_BASE_URL}/user/getProfile`,
    GET_ALL_USERS: `${API_BASE_URL}/user/getAllusers`,
    DELETE_ACCOUNT: `${API_BASE_URL}/user/deleteOwnAccount`,
  }
}

export const apiCall = async (
  url: string,
  options?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}

// Authenticated API call - includes authorization token
export const authenticatedApiCall = async (
  url: string,
  options?: RequestInit
): Promise<any> => {
  try {
    const token = localStorage.getItem('zeplus_auth_token')
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options?.headers,
      },
    })

    // Handle unauthorized - user needs to re-login
    if (response.status === 401) {
      localStorage.removeItem('zeplus_auth_token')
      localStorage.removeItem('zeplus_current_user')
      window.location.href = '/admin/login'
      throw new Error('Authentication required. Please login again.')
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Authenticated API call failed:', error)
    throw error
  }
}
