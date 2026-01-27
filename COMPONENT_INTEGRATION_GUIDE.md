# Frontend Components - Import & Usage Guide

## Quick Copy-Paste Imports

Use these imports in your components to connect to the backend.

---

## 🔐 AdminLogin.tsx

```tsx
// OLD (localStorage-based)
import { authenticateUser, setCurrentUser } from '@/utils/userManagement'

// NEW (backend-based)
import { userLogin } from '@/services/userAuthService'
import { useNavigate } from 'react-router-dom'

// In component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError('')
  try {
    const response = await userLogin(email, password)
    // Response includes token and user info
    navigate('/admin/dashboard')
  } catch (error) {
    setError('Invalid credentials or server error')
  }
}
```

---

## 📊 AdminDashboard.tsx

```tsx
// OLD (localStorage-based)
import { getAllSubmissions } from '@/utils/storage'

// NEW (backend-based)
import { fetchDashboardMetrics, fetchSubmissionsByCategory } from '@/services/submissionsService'

// In component
useEffect(() => {
  const loadDashboard = async () => {
    try {
      const metrics = await fetchDashboardMetrics()
      // metrics.totalForms, metrics.insiderForms, metrics.courseBrochureForms, etc.
      setMetrics(metrics)
    } catch (error) {
      console.error('Failed to load metrics:', error)
    }
  }
  loadDashboard()
}, [])
```

---

## 📋 Leads.tsx

```tsx
// OLD (localStorage-based)
import { getAllSubmissions } from '@/utils/storage'

// NEW (backend-based)
import { fetchSubmissionsByCategory } from '@/services/submissionsService'

// In component
useEffect(() => {
  const loadSubmissions = async () => {
    try {
      const byCategory = await fetchSubmissionsByCategory()
      // byCategory.insider, byCategory.courses, byCategory.tech4teen, etc.
      setSubmissions(byCategory)
    } catch (error) {
      console.error('Failed to load submissions:', error)
    }
  }
  loadSubmissions()
}, [])
```

---

## 📝 FormSubmissions.tsx

```tsx
// OLD (localStorage-based)
import { getAllSubmissions, confirmSubmission } from '@/utils/storage'

// NEW (backend-based)
import { 
  fetchSubmissionsByCategory,
  updateInsiderStatus,
  updateCourseStatus,
  updateTech4TeenStatus,
  updatePartnerStatus,
  updateSchoolStatus,
} from '@/services/submissionsService'

// In component
useEffect(() => {
  const loadForms = async () => {
    try {
      const forms = await fetchSubmissionsByCategory()
      setSubmissions(forms)
    } catch (error) {
      console.error('Failed to load forms:', error)
    }
  }
  loadForms()
}, [])

// To update a form's status
const handleConfirm = async (formType: string, id: string) => {
  try {
    if (formType === 'insider') {
      await updateInsiderStatus(id, 'confirmed')
    } else if (formType === 'courses') {
      await updateCourseStatus(id, 'confirmed')
    }
    // Refresh list
    const forms = await fetchSubmissionsByCategory()
    setSubmissions(forms)
  } catch (error) {
    console.error('Failed to update:', error)
  }
}
```

---

## 👥 TeamManagement.tsx

```tsx
// OLD (localStorage-based)
import { getUsers, addUser, removeUser } from '@/utils/userManagement'

// NEW (backend-based)
import { 
  fetchUsers, 
  createUser, 
  getSuperAdmin 
} from '@/services/userService'

// In component
useEffect(() => {
  const loadTeam = async () => {
    try {
      const users = await fetchUsers()
      setAllUsers(users)
      
      const admin = await getSuperAdmin()
      setSuperAdmin(admin)
    } catch (error) {
      console.error('Failed to load team:', error)
    }
  }
  loadTeam()
}, [])

// Add new user
const handleAddUser = async (userData: any) => {
  try {
    const newUser = await createUser({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      password: userData.password,
      role: userData.role
    })
    
    // Refresh list
    const users = await fetchUsers()
    setAllUsers(users)
  } catch (error) {
    console.error('Failed to create user:', error)
  }
}

// Remove user
// Note: Delete endpoint needs to be added to backend
```

---

## ⚙️ Settings.tsx (if exists)

```tsx
// NEW - User profile management
import { 
  getUserProfile,
  updateUserProfile,
  updatePassword,
  logout
} from '@/services/userAuthService'

// Get current profile
useEffect(() => {
  const loadProfile = async () => {
    try {
      const profile = await getUserProfile()
      setProfileData(profile)
    } catch (error) {
      console.error('Failed to load profile:', error)
    }
  }
  loadProfile()
}, [])

// Update profile
const handleUpdateProfile = async (newData: any) => {
  try {
    await updateUserProfile({
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email
    })
    // Show success message
  } catch (error) {
    console.error('Failed to update profile:', error)
  }
}

// Change password
const handleChangePassword = async (current: string, newPass: string) => {
  try {
    await updatePassword(current, newPass)
    // Show success message
  } catch (error) {
    console.error('Failed to change password:', error)
  }
}

// Logout
const handleLogout = () => {
  logout()
  navigate('/admin/login')
}
```

---

## 🔑 ForgotPassword.tsx (if exists)

```tsx
// NEW - Password recovery
import { 
  forgotPassword,
  resendOtp,
  resetPassword
} from '@/services/userAuthService'

// Step 1: Request OTP
const handleRequestOTP = async (email: string) => {
  try {
    await forgotPassword(email)
    setStep('otp') // Go to OTP entry step
    setMessage('OTP sent to your email')
  } catch (error) {
    setError('Failed to send OTP')
  }
}

// Step 2: Resend OTP if needed
const handleResendOtp = async () => {
  try {
    await resendOtp(email)
    setMessage('OTP resent to your email')
  } catch (error) {
    setError('Failed to resend OTP')
  }
}

// Step 3: Reset password
const handleResetPassword = async (otp: string, newPassword: string) => {
  try {
    await resetPassword(email, otp, newPassword)
    setMessage('Password reset successful! Please login.')
    setTimeout(() => navigate('/admin/login'), 2000)
  } catch (error) {
    setError('Failed to reset password')
  }
}
```

---

## 📝 Form Pages (Auto-handled)

These pages automatically route to the correct endpoint - **NO CHANGES NEEDED**:

```tsx
// All these work automatically:
import { saveSubmission } from '@/utils/storage'

// These automatically route:
await saveSubmission('insider', data)              // → POST /insider
await saveSubmission('cybersecurity', data)        // → POST /courses
await saveSubmission('frontend', data)             // → POST /courses
await saveSubmission('data', data)                 // → POST /courses
await saveSubmission('deeplearning', data)         // → POST /courses
await saveSubmission('generative', data)           // → POST /courses
await saveSubmission('introai', data)              // → POST /courses
await saveSubmission('uidesign', data)             // → POST /courses
await saveSubmission('fullstack', data)            // → POST /courses
await saveSubmission('digital', data)              // → POST /courses
await saveSubmission('gamedevelopment', data)      // → POST /courses
await saveSubmission('aimachine', data)            // → POST /courses
await saveSubmission('introweb', data)             // → POST /courses
await saveSubmission('introcybersecurity', data)   // → POST /courses
await saveSubmission('cybersecurityai', data)      // → POST /courses
await saveSubmission('tech4teen', data)            // → POST /tech4teen
await saveSubmission('Tech4teen', data)            // → POST /tech4teen
await saveSubmission('becomepartner', data)        // → POST /partner
await saveSubmission('partner', data)              // → POST /partner
await saveSubmission('schoolpartner', data)        // → POST /school
await saveSubmission('school', data)               // → POST /school
await saveSubmission('aibootcamp', data)           // → POST /courses
```

Just make sure to use `await` and wrap in try/catch:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await saveSubmission('cybersecurity', formData)
    navigate('/thank-you')
  } catch (error) {
    console.error('Submission failed:', error)
    setError('Failed to submit form')
  }
}
```

---

## 📁 Import Paths Reference

### **All Available Imports**

```typescript
// Submission Services
import {
  fetchInsiderSubmissions,
  createInsiderSubmission,
  getInsiderSubmissionById,
  updateInsiderStatus,
  deleteInsiderSubmission,
  
  fetchCourseSubmissions,
  createCourseSubmission,
  getCourseSubmissionById,
  updateCourseStatus,
  deleteCourseSubmission,
  
  fetchTech4TeenSubmissions,
  createTech4TeenSubmission,
  getTech4TeenSubmissionById,
  updateTech4TeenStatus,
  deleteTech4TeenSubmission,
  
  fetchPartnerSubmissions,
  createPartnerSubmission,
  getPartnerSubmissionById,
  updatePartnerStatus,
  updatePartnerSubmission,
  deletePartnerSubmission,
  
  fetchSchoolSubmissions,
  createSchoolSubmission,
  getSchoolSubmissionById,
  updateSchoolStatus,
  deleteSchoolSubmission,
  
  fetchDashboardMetrics,
  fetchSubmissionsByCategory,
} from '@/services/submissionsService'

// User Authentication Services
import {
  userLogin,
  forgotPassword,
  resendOtp,
  resetPassword,
  updatePassword,
  getUserProfile,
  updateUserProfile,
  deleteOwnAccount,
  hasAuthToken,
  getCurrentUser,
  logout,
} from '@/services/userAuthService'

// User/Team Management Services
import {
  fetchUsers,
  getAllUsers,
  createUser,
  createUsers,
  getSuperAdmin,
} from '@/services/userService'

// Public Form Submission
import {
  saveSubmission,
} from '@/utils/storage'

// (Deprecated)
import {
  loginUser,
  logoutUser,
  verifyAuth,
} from '@/services/authService'
```

---

## 🧪 Testing Each Component

### **AdminLogin.tsx**
```bash
1. Navigate to /admin/login
2. Enter valid credentials
3. Click login
4. Check DevTools → Network → /auth/login POST request
5. Check localStorage → zeplus_auth_token should exist
6. Should redirect to /admin/dashboard
```

### **AdminDashboard.tsx**
```bash
1. After login, should see metrics
2. Check DevTools → Network → multiple GET requests
3. Should load: /insider, /courses, /tech4teen, /partner, /school
4. Metrics should show counts for each category
```

### **TeamManagement.tsx**
```bash
1. Navigate to Team Management
2. Check DevTools → Network → /team/getAllUsers GET request
3. List of users should display
4. Click "Add User"
5. Fill form, click Create
6. Check DevTools → Network → /team/createUsers POST request
7. New user should appear in list
```

### **Settings.tsx**
```bash
1. Navigate to Settings
2. Check DevTools → Network → /user/profile GET request
3. User data should populate form
4. Click "Update Profile"
5. Check DevTools → Network → /user/updateProfile PUT request
6. Should show success message
```

---

## 💡 Tips

1. **Always use `await`** for async functions
2. **Always wrap in try/catch** for error handling
3. **Check DevTools Network tab** to verify requests are going to correct endpoints
4. **Check localStorage** for tokens after login
5. **Check console** for detailed error messages
6. **Restart dev server** after updating .env files

