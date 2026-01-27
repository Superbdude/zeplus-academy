// Notification utilities for tracking unconfirmed submissions
export interface Notification {
  id: string
  type: 'insider' | 'course-brochure' | 'tech4teen' | 'becomepartner' | 'schoolpartner'
  title: string
  message: string
  timestamp: string
  read: boolean
}

// Get all unconfirmed submissions across all form types
export const getUnconfirmedCount = (): number => {
  let count = 0

  // Check Insider submissions
  try {
    const insiderData = localStorage.getItem('insider')
    if (insiderData) {
      const submissions = JSON.parse(insiderData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      count += unconfirmed.length
    }
  } catch (err) {
    console.error('Error reading insider submissions:', err)
  }

  // Check Tech4teen submissions
  try {
    const tech4teenData = localStorage.getItem('Tech4teen')
    if (tech4teenData) {
      const submissions = JSON.parse(tech4teenData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      count += unconfirmed.length
    }
  } catch (err) {
    console.error('Error reading Tech4teen submissions:', err)
  }

  // Check Become Partner submissions
  try {
    const becomePartnerData = localStorage.getItem('becomepartner')
    if (becomePartnerData) {
      const submissions = JSON.parse(becomePartnerData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      count += unconfirmed.length
    }
  } catch (err) {
    console.error('Error reading becomepartner submissions:', err)
  }

  // Check School Partner submissions
  try {
    const schoolPartnerData = localStorage.getItem('schoolpartner')
    if (schoolPartnerData) {
      const submissions = JSON.parse(schoolPartnerData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      count += unconfirmed.length
    }
  } catch (err) {
    console.error('Error reading schoolpartner submissions:', err)
  }

  // Check Course/Brochure submissions (19 different course keys)
  const courseKeys = [
    'digitalmarketing',
    'aimachine',
    'cybersecurity',
    'fullstack',
    'data',
    'uidesign',
    'gamedevelopment',
    'introweb',
    'frontend',
    'cybersecurityai',
    'introcybersecurity',
    'generative',
    'mastery',
    'introai',
    'deeplearning'
  ]

  courseKeys.forEach(key => {
    try {
      const data = localStorage.getItem(key)
      if (data) {
        const submissions = JSON.parse(data)
        const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
        count += unconfirmed.length
      }
    } catch (err) {
      console.error(`Error reading ${key} submissions:`, err)
    }
  })

  return count
}

// Get recent unconfirmed notifications with details
export const getRecentNotifications = (limit: number = 10): Notification[] => {
  const notifications: Notification[] = []

  // Check Insider
  try {
    const insiderData = localStorage.getItem('insider')
    if (insiderData) {
      const submissions = JSON.parse(insiderData)
      submissions
        .filter((s: any) => s.status !== 'Confirmed')
        .slice(0, 5)
        .forEach((s: any) => {
          notifications.push({
            id: `insider-${s.email}-${s.registered}`,
            type: 'insider',
            title: 'New Insider Submission',
            message: `${s.firstName} ${s.lastName} (${s.email})`,
            timestamp: s.registered || new Date().toISOString(),
            read: false
          })
        })
    }
  } catch (err) {
    console.error('Error processing insider notifications:', err)
  }

  // Check Tech4teen
  try {
    const tech4teenData = localStorage.getItem('Tech4teen')
    if (tech4teenData) {
      const submissions = JSON.parse(tech4teenData)
      submissions
        .filter((s: any) => s.status !== 'Confirmed')
        .slice(0, 5)
        .forEach((s: any) => {
          notifications.push({
            id: `tech4teen-${s.email}-${s.registered}`,
            type: 'tech4teen',
            title: 'New Tech4teen Registration',
            message: `${s.fullName} - ${s.courseSelection || 'Course not specified'}`,
            timestamp: s.registered || new Date().toISOString(),
            read: false
          })
        })
    }
  } catch (err) {
    console.error('Error processing Tech4teen notifications:', err)
  }

  // Check Become Partner
  try {
    const becomePartnerData = localStorage.getItem('becomepartner')
    if (becomePartnerData) {
      const submissions = JSON.parse(becomePartnerData)
      submissions
        .filter((s: any) => s.status !== 'Confirmed')
        .slice(0, 5)
        .forEach((s: any) => {
          notifications.push({
            id: `becomepartner-${s.email}-${s.registered}`,
            type: 'becomepartner',
            title: 'New Partnership Request',
            message: `${s.fullName} from ${s.company || 'Unknown Company'}`,
            timestamp: s.registered || new Date().toISOString(),
            read: false
          })
        })
    }
  } catch (err) {
    console.error('Error processing becomepartner notifications:', err)
  }

  // Check School Partner
  try {
    const schoolPartnerData = localStorage.getItem('schoolpartner')
    if (schoolPartnerData) {
      const submissions = JSON.parse(schoolPartnerData)
      submissions
        .filter((s: any) => s.status !== 'Confirmed')
        .slice(0, 5)
        .forEach((s: any) => {
          notifications.push({
            id: `schoolpartner-${s.email}-${s.registered}`,
            type: 'schoolpartner',
            title: 'New School Partnership',
            message: `${s.schoolName} - ${s.contactPerson}`,
            timestamp: s.registered || new Date().toISOString(),
            read: false
          })
        })
    }
  } catch (err) {
    console.error('Error processing schoolpartner notifications:', err)
  }

  // Sort by timestamp (newest first) and limit
  notifications.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return notifications.slice(0, limit)
}

// Format time ago
export const timeAgo = (timestamp: string): string => {
  const now = new Date().getTime()
  const then = new Date(timestamp).getTime()
  const diff = now - then

  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return new Date(timestamp).toLocaleDateString()
}

// Get form types that have unconfirmed submissions
export const getFormTypesWithUnconfirmed = (): string[] => {
  const formTypes: string[] = []

  // Check Insider
  try {
    const insiderData = localStorage.getItem('insider')
    if (insiderData) {
      const submissions = JSON.parse(insiderData)
      const hasUnconfirmed = submissions.some((s: any) => s.status !== 'Confirmed')
      if (hasUnconfirmed) formTypes.push('insider')
    }
  } catch (err) {
    console.error('Error checking insider submissions:', err)
  }

  // Check Course/Brochure
  const courseKeys = [
    'digitalmarketing', 'aimachine', 'cybersecurity', 'fullstack', 'data',
    'uidesign', 'gamedevelopment', 'introweb', 'frontend', 'cybersecurityai',
    'introcybersecurity', 'generative', 'mastery', 'introai', 'deeplearning'
  ]
  
  let hasCourseUnconfirmed = false
  courseKeys.forEach(key => {
    try {
      const data = localStorage.getItem(key)
      if (data) {
        const submissions = JSON.parse(data)
        if (submissions.some((s: any) => s.status !== 'Confirmed')) {
          hasCourseUnconfirmed = true
        }
      }
    } catch (err) {
      console.error(`Error checking ${key} submissions:`, err)
    }
  })
  if (hasCourseUnconfirmed) formTypes.push('course-brochure')

  // Check Tech4teen
  try {
    const tech4teenData = localStorage.getItem('Tech4teen')
    if (tech4teenData) {
      const submissions = JSON.parse(tech4teenData)
      const hasUnconfirmed = submissions.some((s: any) => s.status !== 'Confirmed')
      if (hasUnconfirmed) formTypes.push('tech4teen')
    }
  } catch (err) {
    console.error('Error checking Tech4teen submissions:', err)
  }

  // Check Become Partner
  try {
    const becomePartnerData = localStorage.getItem('becomepartner')
    if (becomePartnerData) {
      const submissions = JSON.parse(becomePartnerData)
      const hasUnconfirmed = submissions.some((s: any) => s.status !== 'Confirmed')
      if (hasUnconfirmed) formTypes.push('becomepartner')
    }
  } catch (err) {
    console.error('Error checking becomepartner submissions:', err)
  }

  // Check School Partner
  try {
    const schoolPartnerData = localStorage.getItem('schoolpartner')
    if (schoolPartnerData) {
      const submissions = JSON.parse(schoolPartnerData)
      const hasUnconfirmed = submissions.some((s: any) => s.status !== 'Confirmed')
      if (hasUnconfirmed) formTypes.push('schoolpartner')
    }
  } catch (err) {
    console.error('Error checking schoolpartner submissions:', err)
  }

  return formTypes
}

// Get unconfirmed count per form type
export const getUnconfirmedCountPerFormType = (): Record<string, number> => {
  const counts: Record<string, number> = {}

  // Check Insider
  try {
    const insiderData = localStorage.getItem('insider')
    if (insiderData) {
      const submissions = JSON.parse(insiderData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      if (unconfirmed.length > 0) {
        counts['insider'] = unconfirmed.length
      }
    }
  } catch (err) {
    console.error('Error reading insider submissions:', err)
  }

  // Check Course/Brochure
  const courseKeys = [
    'digitalmarketing', 'aimachine', 'cybersecurity', 'fullstack', 'data',
    'uidesign', 'gamedevelopment', 'introweb', 'frontend', 'cybersecurityai',
    'introcybersecurity', 'generative', 'mastery', 'introai', 'deeplearning'
  ]
  
  let totalCourseUnconfirmed = 0
  courseKeys.forEach(key => {
    try {
      const data = localStorage.getItem(key)
      if (data) {
        const submissions = JSON.parse(data)
        const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
        totalCourseUnconfirmed += unconfirmed.length
      }
    } catch (err) {
      console.error(`Error reading ${key} submissions:`, err)
    }
  })
  if (totalCourseUnconfirmed > 0) {
    counts['course-brochure'] = totalCourseUnconfirmed
  }

  // Check Tech4teen
  try {
    const tech4teenData = localStorage.getItem('Tech4teen')
    if (tech4teenData) {
      const submissions = JSON.parse(tech4teenData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      if (unconfirmed.length > 0) {
        counts['tech4teen'] = unconfirmed.length
      }
    }
  } catch (err) {
    console.error('Error reading Tech4teen submissions:', err)
  }

  // Check Become Partner
  try {
    const becomePartnerData = localStorage.getItem('becomepartner')
    if (becomePartnerData) {
      const submissions = JSON.parse(becomePartnerData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      if (unconfirmed.length > 0) {
        counts['becomepartner'] = unconfirmed.length
      }
    }
  } catch (err) {
    console.error('Error reading becomepartner submissions:', err)
  }

  // Check School Partner
  try {
    const schoolPartnerData = localStorage.getItem('schoolpartner')
    if (schoolPartnerData) {
      const submissions = JSON.parse(schoolPartnerData)
      const unconfirmed = submissions.filter((s: any) => s.status !== 'Confirmed')
      if (unconfirmed.length > 0) {
        counts['schoolpartner'] = unconfirmed.length
      }
    }
  } catch (err) {
    console.error('Error reading schoolpartner submissions:', err)
  }

  return counts
}
