import {
  createInsiderSubmission,
  createCourseSubmission,
  createTech4TeenSubmission,
  createPartnerSubmission,
  createSchoolSubmission,
  fetchInsiderSubmissions,
  fetchCourseSubmissions,
  fetchTech4TeenSubmissions,
  fetchPartnerSubmissions,
  fetchSchoolSubmissions,
  updateInsiderStatus,
  updateCourseStatus,
  updateTech4TeenStatus,
  updatePartnerStatus,
  updateSchoolStatus,
  type Submission,
} from '../services/submissionsService'

export type SubmissionRecord = Submission

export const saveSubmission = async (formType: string, data: any) => {
  try {
    // Submit directly to backend - no localStorage fallback
    const formTypeLower = formType.toLowerCase()
    if (formTypeLower === 'insider') {
      return await createInsiderSubmission(data)
    } else if (formTypeLower === 'tech4teen') {
      return await createTech4TeenSubmission(data)
    } else if (formTypeLower === 'schoolpartner' || formTypeLower === 'school') {
      return await createSchoolSubmission(data)
    } else if (formTypeLower === 'becomepartner' || formTypeLower === 'partner') {
      return await createPartnerSubmission(data)
    } else {
      // Default to course submission for all other types
      return await createCourseSubmission(data)
    }
  } catch (err) {
    console.error('saveSubmission error:', err)
    throw err
  }
}

// Export all fetch and update functions for use in admin components
export const getAllSubmissions = async () => {
  try {
    const [insider, courses, tech4teen, partner, school] = await Promise.all([
      fetchInsiderSubmissions(),
      fetchCourseSubmissions(),
      fetchTech4TeenSubmissions(),
      fetchPartnerSubmissions(),
      fetchSchoolSubmissions(),
    ])

    return {
      insider: insider.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      courses: courses.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      tech4teen: tech4teen.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      partner: partner.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      school: school.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      becomepartner: partner.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      schoolpartner: school.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      Tech4teen: tech4teen.map(item => ({ ...item, id: item.id, createdAt: item.createdAt })),
      aibootcamp: [], // No separate AI bootcamp endpoint
    }
  } catch (error) {
    console.error('Failed to fetch submissions:', error)
    return {
      insider: [],
      courses: [],
      tech4teen: [],
      partner: [],
      school: [],
      becomepartner: [],
      schoolpartner: [],
      Tech4teen: [],
      aibootcamp: [],
    }
  }
}

export const confirmSubmission = async (formType: string, submissionId: string | number) => {
  try {
    switch (formType.toLowerCase()) {
      case 'insider':
        await updateInsiderStatus(submissionId, 'Confirmed')
        break
      case 'courses':
      case 'course-brochure':
        await updateCourseStatus(submissionId, 'Confirmed')
        break
      case 'tech4teen':
        await updateTech4TeenStatus(submissionId, 'Confirmed')
        break
      case 'partner':
      case 'becomepartner':
        await updatePartnerStatus(submissionId, 'Confirmed')
        break
      case 'school':
      case 'schoolpartner':
        await updateSchoolStatus(submissionId, 'Confirmed')
        break
      default:
        console.warn('Unknown form type for confirmation:', formType)
    }
  } catch (error) {
    console.error('Failed to confirm submission:', error)
  }
}
