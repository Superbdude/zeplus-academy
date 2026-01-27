# Complete Backend Endpoints Integration

## ✅ All Endpoints Integrated

Your frontend is now fully configured to work with **ALL** your backend endpoints.

---

## 📋 Form Submission Endpoints

### **1. School Partnership for Teen**
```
POST   /school           - createSchool
GET    /school           - getAllSchools
GET    /school/{id}      - getSchoolById
PATCH  /school/{id}      - updateStatus
DELETE /school/{id}      - deleteSchool
```

**Frontend functions:**
```typescript
import { 
  fetchSchoolSubmissions, 
  createSchoolSubmission, 
  getSchoolSubmissionById, 
  updateSchoolStatus, 
  deleteSchoolSubmission 
} from '@/services/submissionsService'
```

---

## 🔐 User Authentication Endpoints

### **2. User Login**
```
POST /auth/login          - Login with email/password
POST /auth/forgotPassword - Request password reset (OTP)
POST /auth/resendOtp      - Resend OTP code
POST /auth/resetPassword  - Reset password with OTP
```

**Frontend functions:**
```typescript
import { 
  userLogin, 
  forgotPassword, 
  resendOtp, 
  resetPassword 
} from '@/services/userAuthService'

// Usage
const response = await userLogin(email, password)
// response.token, response.user

const forgot = await forgotPassword(email)
// { message: "OTP sent to email" }

const newOtp = await resendOtp(email)
// { message: "OTP resent" }

const reset = await resetPassword(email, otp, newPassword)
// { message: "Password reset successful" }
```

---

## 👤 User Profile Endpoints

### **3. User Profile Management**
```
PUT  /user/updatePassword   - Change password (authenticated)
PUT  /user/updateProfile    - Update profile info (authenticated)
GET  /user/profile          - Get user profile (authenticated)
DELETE /user/deleteOwnAccount - Delete own account (authenticated)
```

**Frontend functions:**
```typescript
import { 
  updatePassword, 
  updateUserProfile, 
  getUserProfile, 
  deleteOwnAccount 
} from '@/services/userAuthService'

// Usage
await updatePassword(currentPassword, newPassword)

await updateUserProfile({ 
  firstName: 'John', 
  lastName: 'Doe', 
  email: 'john@example.com' 
})

const profile = await getUserProfile()

await deleteOwnAccount(password)
```

---

## 👥 Team Management Endpoints

### **4. Super Admin**
```
POST /team/superAdmin       - Get Super Admin info (authenticated)
```

**Frontend functions:**
```typescript
import { getSuperAdmin } from '@/services/userService'

const admin = await getSuperAdmin()
```

### **5. Create Users**
```
POST /team/createUsers      - Create one or multiple users (Super Admin only)
```

**Frontend functions:**
```typescript
import { createUser, createUsers } from '@/services/userService'

// Create single user
await createUser({
  email: 'admin@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'SecurePass123',
  role: 'admin'
})

// Create multiple users
await createUsers([
  {
    email: 'admin1@example.com',
    firstName: 'Admin',
    lastName: 'One',
    password: 'Pass123',
    role: 'admin'
  },
  {
    email: 'admin2@example.com',
    firstName: 'Admin',
    lastName: 'Two',
    password: 'Pass456',
    role: 'admin'
  }
])
```

### **6. Get All Users**
```
GET /team/getAllUsers       - Get all users (authenticated)
```

**Frontend functions:**
```typescript
import { fetchUsers, getAllUsers } from '@/services/userService'

const users = await fetchUsers()
// or
const users = await getAllUsers()
```

---

## 📚 All Available Services

### **submissionsService.ts**
- Form submission CRUD for all categories:
  - Insider: `fetchInsiderSubmissions()`, `createInsiderSubmission()`, etc.
  - Courses: `fetchCourseSubmissions()`, `createCourseSubmission()`, etc.
  - Tech4Teen: `fetchTech4TeenSubmissions()`, `createTech4TeenSubmission()`, etc.
  - Partner: `fetchPartnerSubmissions()`, `createPartnerSubmission()`, etc.
  - School: `fetchSchoolSubmissions()`, `createSchoolSubmission()`, etc.
- Metrics: `fetchDashboardMetrics()`, `fetchSubmissionsByCategory()`

### **userAuthService.ts** (NEW)
- `userLogin(email, password)` - User login
- `forgotPassword(email)` - Request password reset
- `resendOtp(email)` - Resend OTP
- `resetPassword(email, otp, newPassword)` - Reset password
- `updatePassword(current, new)` - Change password (authenticated)
- `updateUserProfile(data)` - Update profile (authenticated)
- `getUserProfile()` - Get profile (authenticated)
- `deleteOwnAccount(password)` - Delete account (authenticated)
- `logout()` - Clear auth tokens
- `hasAuthToken()` - Check if authenticated
- `getCurrentUser()` - Get user from localStorage

### **userService.ts** (UPDATED)
- `fetchUsers()` / `getAllUsers()` - Get all users (Team Management)
- `createUser(data)` - Create single user
- `createUsers(array)` - Create multiple users
- `getSuperAdmin()` - Get super admin info
- Other functions (placeholder for future backend endpoints)

### **authService.ts** (DEPRECATED)
- Use `userAuthService.ts` for new code
- Kept for backward compatibility

---

## 🔄 Complete API Flow

### **User Registration/Login Flow**
```
1. User visits login page
2. Enters email/password
3. Frontend calls: userLogin(email, password)
4. Backend: POST /auth/login
5. Returns: { token, user }
6. Frontend stores token in localStorage
7. User redirected to dashboard
```

### **Forgot Password Flow**
```
1. User clicks "Forgot Password"
2. Enters email
3. Frontend calls: forgotPassword(email)
4. Backend: POST /auth/forgotPassword
5. User receives OTP via email
6. User enters OTP + new password
7. Frontend calls: resetPassword(email, otp, newPassword)
8. Backend: POST /auth/resetPassword
9. Password updated, user can login
```

### **Form Submission Flow**
```
1. User fills form on website
2. Form submitted
3. Frontend calls: createInsiderSubmission(data) etc.
4. Backend: POST /insider (or /courses, /partner, etc.)
5. Form stored in database
6. Admin can view in dashboard
7. Admin calls: updateInsiderStatus(id, 'reviewed')
8. Backend: PATCH /insider/{id}
```

### **Team Management Flow**
```
1. Super Admin logs in
2. Visits Team Management page
3. Clicks "Add User"
4. Fills form with new user details
5. Frontend calls: createUser(userData)
6. Backend: POST /team/createUsers
7. User created with credentials
8. New user can login
9. Super Admin can view all users: fetchUsers()
10. Backend: GET /team/getAllUsers
```

---

## 🔑 Authentication Flow

All authenticated requests automatically include:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**When token expires (401 response):**
1. Frontend clears token
2. User redirected to login page
3. User logs in again

---

## 📁 File Structure

```
src/
├── config/
│   └── api.ts                    # API config with all endpoints
├── services/
│   ├── authService.ts            # OLD - Deprecated
│   ├── userAuthService.ts        # NEW - User auth (login, password, profile)
│   ├── userService.ts            # Team management (create users, get users)
│   └── submissionsService.ts     # Form submissions by category
└── utils/
    └── storage.ts                # Auto-routes forms to correct endpoint
```

---

## 🚀 Quick Start

### **For Form Submissions (Public)**
```tsx
import { saveSubmission } from '@/utils/storage'

// Automatically routes to correct endpoint
await saveSubmission('cybersecurity', formData)  // POST /courses
await saveSubmission('insider', formData)         // POST /insider
await saveSubmission('schoolpartner', formData)   // POST /school
```

### **For User Login**
```tsx
import { userLogin } from '@/services/userAuthService'

try {
  const response = await userLogin(email, password)
  // User is authenticated, token stored
  navigate('/dashboard')
} catch (error) {
  // Show error message
}
```

### **For Admin Dashboard**
```tsx
import { 
  fetchDashboardMetrics, 
  fetchSubmissionsByCategory 
} from '@/services/submissionsService'

const metrics = await fetchDashboardMetrics()
const byCategory = await fetchSubmissionsByCategory()
```

### **For Team Management**
```tsx
import { 
  fetchUsers, 
  createUser, 
  getSuperAdmin 
} from '@/services/userService'

const admin = await getSuperAdmin()
const users = await fetchUsers()
await createUser({ email, firstName, lastName, password, role })
```

---

## ⚠️ Important Notes

1. **Authentication Token:**
   - Stored in `localStorage` as `zeplus_auth_token`
   - Automatically included in all authenticated requests
   - Cleared on logout

2. **User Data:**
   - Stored in `localStorage` as `zeplus_user`
   - Retrieved on app load
   - Updated after profile changes

3. **Error Handling:**
   - All functions throw errors on failure
   - Wrap in try/catch
   - Use console to debug

4. **CORS:**
   - Backend must allow requests from frontend domain
   - Include `Authorization` header support

---

## 📝 Component Updates Needed

1. **AdminLogin.tsx**
   - Replace `authenticateUser()` with `userLogin()`
   - Use `userAuthService` instead of `userManagement`

2. **AdminDashboard.tsx**
   - Use `fetchDashboardMetrics()` for data
   - Replace `getAllSubmissions()` calls

3. **TeamManagement.tsx**
   - Use `fetchUsers()`, `createUser()`, `getSuperAdmin()`
   - Handle team operations

4. **Settings/Profile.tsx**
   - Use `getUserProfile()`, `updateUserProfile()`, `updatePassword()`

5. **Forgot Password Page**
   - Use `forgotPassword()`, `resendOtp()`, `resetPassword()`

---

## Testing Checklist

- [ ] User can login with email/password
- [ ] Token is stored in localStorage after login
- [ ] Token is sent in Authorization header
- [ ] Forms submit to correct category endpoints
- [ ] Admin can view submissions by category
- [ ] Admin can update submission status
- [ ] Admin can create new users
- [ ] User can update password
- [ ] User can update profile
- [ ] Token expiration redirects to login
- [ ] Logout clears all data

