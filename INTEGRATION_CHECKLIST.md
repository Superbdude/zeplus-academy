# Integration Checklist & Component Updates

## ✅ Backend Connection Complete

Your frontend now has full backend integration support for:
- Public form submissions
- Admin authentication
- Submissions management
- User/team management

---

## 📋 What Still Needs to Be Done

### 1. Update Form Submission Pages
Make `saveSubmission()` async in these files:

**Pages using `saveSubmission()`:**
- `src/pages/Schoolpartner.tsx`
- `src/pages/Cybersecurity.tsx`
- `src/pages/Insider.tsx`
- `src/pages/Becomepartner.tsx`
- `src/pages/Tech4teen.tsx`
- `src/pages/AIBootcamp.tsx`
- And other course pages...

**Change from:**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  saveSubmission('formType', data)
}
```

**Change to:**
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await saveSubmission('formType', data)
    // Show success message or redirect
  } catch (error) {
    // Show error message
  }
}
```

---

### 2. Update Admin Login Page
**File:** `src/pages/AdminLogin.tsx`

**Replace localStorage auth with backend:**

**Current code uses:**
```tsx
import { authenticateUser, setCurrentUser } from '../utils/userManagement'
const user = authenticateUser(email, password)
```

**Replace with:**
```tsx
import { loginUser } from '../services/authService'

const handleSubmit = async (e: any) => {
  e.preventDefault()
  setError('')
  try {
    await loginUser(email, password)
    navigate('/admin')
  } catch (error) {
    setError('Invalid credentials or server error')
  }
}
```

---

### 3. Update Admin Dashboard
**File:** `src/pages/AdminDashboard.tsx`

**Current code:**
```tsx
import { getAllSubmissions } from '../utils/storage'

useEffect(() => {
  setSubmissions(getAllSubmissions())
}, [])
```

**Replace with:**
```tsx
import { fetchSubmissions } from '../services/submissionsService'

useEffect(() => {
  const loadData = async () => {
    try {
      const data = await fetchSubmissions()
      setSubmissions(data)
    } catch (error) {
      console.error('Failed to load submissions:', error)
    }
  }
  loadData()
}, [])
```

---

### 4. Update Leads Page
**File:** `src/pages/Leads.tsx`

Same pattern as Admin Dashboard - replace `getAllSubmissions()` with `fetchSubmissions()`

---

### 5. Update FormSubmissions Page
**File:** `src/pages/FormSubmissions.tsx`

Same pattern - replace `getAllSubmissions()` with `fetchSubmissions()`

---

### 6. Update Admin Form Views
**File:** `src/pages/admin/FormViews.tsx`

- Replace `getAllSubmissions()` with `fetchSubmissions()`
- Replace `confirmSubmission()` with `updateSubmission(id, { status: 'Confirmed' })`

---

### 7. Update Team Management
**File:** `src/pages/TeamManagement.tsx`

**Current code:**
```tsx
import { getUsers, addUser, removeUser } from '../utils/userManagement'
```

**Replace with:**
```tsx
import { 
  fetchUsers, 
  createUser, 
  deleteUser,
  updateUser
} from '../services/userService'

// Load users
const loadUsers = async () => {
  try {
    const users = await fetchUsers()
    setAllUsers(users)
  } catch (error) {
    console.error('Failed to load users:', error)
  }
}

// Add user
const handleAddUser = async (userData) => {
  try {
    await createUser(userData)
    await loadUsers() // Refresh list
  } catch (error) {
    console.error('Failed to add user:', error)
  }
}

// Remove user
const handleRemoveUser = async (userId) => {
  try {
    await deleteUser(userId)
    await loadUsers() // Refresh list
  } catch (error) {
    console.error('Failed to remove user:', error)
  }
}
```

---

### 8. Update Settings Page
**File:** `src/pages/Settings.tsx`

If this page uses any user management functions, update them to use `userService.ts`

---

## 🚀 Backend Endpoints Needed

Make sure your backend has these endpoints:

### Authentication (Required)
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/logout` - Logout
- `GET /api/auth/verify` - Verify token

### Submissions (Required)
- `POST /api/submissions` - Save form submission
- `GET /api/submissions` - List submissions (with optional filters)
- `GET /api/submissions/:id` - Get single submission
- `PUT /api/submissions/:id` - Update submission
- `DELETE /api/submissions/:id` - Delete submission

### Users (Required for Admin)
- `GET /api/users` - List all users
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/:id/password` - Change password

---

## 🔑 Important: Auth Token Storage

The frontend now expects:
- Token stored in `localStorage` as `zeplus_auth_token`
- User info stored in `localStorage` as `zeplus_current_user`
- All admin requests include `Authorization: Bearer <token>` header

Your backend should:
1. Generate JWT token on login
2. Return token in login response
3. Validate token on authenticated endpoints
4. Return 401 if token invalid/expired

---

## 📝 Testing Checklist

After making updates, test:

- [ ] Form submissions still work and send to backend
- [ ] Admin login works with backend authentication
- [ ] Dashboard loads submissions from backend
- [ ] Can view and manage form submissions
- [ ] Can view and manage team members
- [ ] Logout clears authentication
- [ ] Returning to `/admin` after logout redirects to login
- [ ] Token expiration redirects to login
- [ ] All error messages display properly

---

## 🆘 If Backend Endpoints Don't Exist Yet

The frontend will still work with fallbacks:
- Form submissions fall back to localStorage
- Admin features will fail gracefully with console errors

Once backend endpoints are ready:
1. Update backend URLs in `.env.local` if needed
2. Restart frontend dev server
3. Test each component

---

## 📚 Service Files Reference

**Authentication:**
```
src/services/authService.ts
- loginUser()
- logoutUser()
- verifyAuth()
- getCurrentUser()
- hasAuthToken()
```

**Submissions:**
```
src/services/submissionsService.ts
- fetchSubmissions()
- fetchSubmissionsByType()
- updateSubmission()
- deleteSubmission()
- getSubmissionMetrics()
```

**Users:**
```
src/services/userService.ts
- fetchUsers()
- createUser()
- updateUser()
- deleteUser()
- suspendUser()
- reactivateUser()
- changePassword()
```

---

## Questions?

Check these files for more details:
- `BACKEND_INTEGRATION.md` - Complete integration guide
- `src/config/api.ts` - API configuration
- `src/services/*.ts` - Service implementations with JSDoc comments
