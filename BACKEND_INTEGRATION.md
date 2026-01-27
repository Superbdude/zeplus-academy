# Backend Integration Guide

## Overview
Your Zeplus Academy frontend is now configured to connect to your backend at `https://zeplus.onrender.com`. This includes integration for:
- ✅ Form submissions (all course forms)
- ✅ Admin authentication
- ✅ Admin dashboard & analytics
- ✅ User/team management
- ✅ Form viewing and management

## Quick Start

### 1. Environment Variables
The project uses Vite for environment variable management. The following files are already created:

- `.env.local` - Contains your API configuration (already set to backend URL)
- `.env.example` - Template for environment variables

To change backend URL:
```bash
# .env.local
VITE_API_BASE_URL=https://zeplus.onrender.com  # Production
# or
VITE_API_BASE_URL=http://localhost:3000        # Local development
```

### 2. Backend is Now Configured at
**`https://zeplus.onrender.com`**

Restart your dev server after changing environment variables.

---

## Architecture

### Service Layer
The frontend now has three service files for different operations:

#### **authService.ts** - Authentication
- `loginUser(email, password)` - Login and store auth token
- `logoutUser()` - Logout and clear auth
- `verifyAuth()` - Check if token is still valid
- `getCurrentUser()` - Get logged-in user info
- `hasAuthToken()` - Check if authenticated

#### **submissionsService.ts** - Form Submissions
- `fetchSubmissions()` - Get all submissions with filters
- `fetchSubmissionsByType(formType)` - Get forms for specific course
- `updateSubmission(id, updates)` - Update submission status
- `deleteSubmission(id)` - Delete a submission
- `getSubmissionMetrics()` - Get stats/analytics

#### **userService.ts** - Team Management
- `fetchUsers()` - Get all admin users
- `createUser(userData)` - Add new team member
- `updateUser(userId, updates)` - Edit user details
- `deleteUser(userId)` - Remove team member
- `suspendUser(userId)` - Suspend account
- `reactivateUser(userId)` - Reactivate account
- `changePassword(userId, currentPassword, newPassword)` - Change password

### API Config Layer
**config/api.ts** contains:
- `apiCall()` - Basic API requests (for public endpoints)
- `authenticatedApiCall()` - Requests with auth token (for admin endpoints)
- All endpoint URLs centralized in `API_CONFIG`

---

## API Endpoints Your Backend Needs

### Authentication
```
POST   /api/auth/login          - Login with email/password
POST   /api/auth/logout         - Logout (requires auth)
GET    /api/auth/verify         - Verify token validity (requires auth)
```

### Form Submissions
```
POST   /api/submissions         - Save new submission
GET    /api/submissions         - List all submissions (with filters)
GET    /api/submissions/:id     - Get single submission
PUT    /api/submissions/:id     - Update submission status
DELETE /api/submissions/:id     - Delete submission
GET    /api/submissions/metrics - Get analytics/statistics
```

### User Management
```
GET    /api/users               - List all users (admin only)
POST   /api/users               - Create new user (admin only)
PUT    /api/users/:id           - Update user (admin only)
DELETE /api/users/:id           - Delete user (admin only)
PUT    /api/users/:id/password  - Change password
```

### Response Format
All endpoints should return JSON with this structure:
```json
{
  "success": true,
  "data": {},
  "error": null
}
```

For errors:
```json
{
  "success": false,
  "data": null,
  "error": "Error message"
}
```

---

## How to Use in Components

### Form Submission (Public)
```tsx
import { saveSubmission } from './utils/storage'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await saveSubmission('courseType', formData)
    // Show success message
  } catch (error) {
    // Show error message
  }
}
```

### Admin Login
```tsx
import { loginUser } from './services/authService'

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await loginUser(email, password)
    navigate('/admin') // Redirect to dashboard
  } catch (error) {
    // Show error message
  }
}
```

### Fetch Submissions in Admin Dashboard
```tsx
import { fetchSubmissions } from './services/submissionsService'

useEffect(() => {
  const loadSubmissions = async () => {
    try {
      const submissions = await fetchSubmissions()
      setSubmissions(submissions)
    } catch (error) {
      console.error('Failed to load submissions:', error)
    }
  }
  loadSubmissions()
}, [])
```

### Manage Team Members
```tsx
import { fetchUsers, createUser, deleteUser } from './services/userService'

// Get all users
const users = await fetchUsers()

// Add new user
await createUser({
  email: 'admin@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'SecurePassword123',
  role: 'admin'
})

// Remove user
await deleteUser(userId)
```

---

## Authentication Flow

### Login
1. User enters email/password on `/admin/login`
2. Frontend calls `POST /api/auth/login`
3. Backend returns `{ token, user }`
4. Token stored in `localStorage` as `zeplus_auth_token`
5. User redirected to `/admin` dashboard

### Authenticated Requests
Every admin API call automatically includes:
```
Authorization: Bearer <token>
```

### Logout
1. User clicks logout
2. Frontend calls `POST /api/auth/logout`
3. Token cleared from localStorage
4. Redirect to `/admin/login`

### Token Expiration
- If backend returns `401 Unauthorized`, token is cleared
- User automatically redirected to login page

---

## CORS Configuration

Your backend needs to allow requests from:
```
https://yourdomain.com        # Production frontend
http://localhost:5173         # Local development (Vite default)
```

Add CORS headers:
```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

---

## Fallback to localStorage

The system is **fallback-safe**:
- Form submissions try backend first, fall back to localStorage if unavailable
- Admin features always require backend (no fallback)
- Data never lost - always stored locally as backup

---

## Migration from localStorage

### Current State
- Submissions stored in localStorage
- Users stored in localStorage
- No authentication required

### After Backend Connection
1. **Test with backend**: Make sure endpoints exist and work
2. **Update components**: Change `saveSubmission` calls to async
3. **Update admin pages**: Replace `getAllSubmissions()` with `fetchSubmissions()`
4. **Test authentication**: Verify login flow works
5. **Monitor data**: Ensure forms appear in backend

---

## Troubleshooting

### "API error: 404"
- Check endpoint URL in `API_CONFIG`
- Verify backend is running at configured URL
- Check backend logs for routing issues

### "API error: 401 Unauthorized"
- Token may be expired or invalid
- Check token is being sent in Authorization header
- Verify backend token validation logic

### "CORS error in console"
- Backend CORS headers not configured correctly
- Add your frontend domain to allowed origins
- Check `Access-Control-Allow-*` headers

### Submissions only in localStorage, not in backend
- Check network tab in DevTools for API requests
- Verify `USE_BACKEND = true` in `src/utils/storage.ts`
- Restart dev server after changing env variables
- Check backend is receiving POST requests

### Admin dashboard shows no data
- Verify user is authenticated (token exists)
- Check `fetchSubmissions()` is being called
- Verify backend endpoint `/api/submissions` returns data
- Check browser console for errors

---

## Files Modified/Created

✅ Created: `src/config/api.ts` - API configuration & utilities
✅ Created: `src/services/authService.ts` - Authentication service
✅ Created: `src/services/submissionsService.ts` - Submissions service
✅ Created: `src/services/userService.ts` - User management service
✅ Updated: `src/utils/storage.ts` - Backend-aware storage
✅ Created: `.env.example` - Environment variables template
✅ Created: `.env.local` - Local environment config

---

## Next Steps

1. **Test authentication**: Try login with your backend
2. **Verify endpoints**: Make sure all endpoints exist on backend
3. **Update components**: Make form submissions and admin pages async
4. **Configure CORS**: Allow your frontend domain on backend
5. **Monitor in production**: Watch for API errors after deployment

For more info, check comments in service files.

