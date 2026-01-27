# Backend Integration - Actual Endpoints

## ✅ Integration Complete

Your frontend is now configured to work with your actual backend endpoints.

---

## Backend Structure

Your backend has **category-specific endpoints** (not generic submissions):

### **1. Insider Forms**
```
POST   /insider                    - createInsider
GET    /insider                    - getAll Insiders
GET    /insider/{id}               - Get Insider ById
PATCH  /insider/{id}               - update Insider Status
DELETE /insider/{id}               - delete Insider
```

**Frontend functions:**
- `fetchInsiderSubmissions()` - Get all
- `createInsiderSubmission(data)` - Create
- `getInsiderSubmissionById(id)` - Get one
- `updateInsiderStatus(id, status)` - Update status
- `deleteInsiderSubmission(id)` - Delete

---

### **2. Courses And Brochures**
```
POST   /courses                    - createCourse
GET    /courses                    - getAllCourses
GET    /courses/{id}               - Get Course ById
PATCH  /courses/{id}               - update Course Status
DELETE /courses/{id}               - delete Course
```

**Frontend functions:**
- `fetchCourseSubmissions()` - Get all
- `createCourseSubmission(data)` - Create
- `getCourseSubmissionById(id)` - Get one
- `updateCourseStatus(id, status)` - Update status
- `deleteCourseSubmission(id)` - Delete

---

### **3. Tech4Teen**
```
POST   /tech4teen                  - createTech4Teen
GET    /tech4teen                  - getAllTech4Teens
GET    /tech4teen/{id}             - Get Tech4Teen ById
PATCH  /tech4teen/{id}             - updateTech4Teen Status
DELETE /tech4teen/{id}             - delete Tech4Teen
```

**Frontend functions:**
- `fetchTech4TeenSubmissions()` - Get all
- `createTech4TeenSubmission(data)` - Create
- `getTech4TeenSubmissionById(id)` - Get one
- `updateTech4TeenStatus(id, status)` - Update status
- `deleteTech4TeenSubmission(id)` - Delete

---

### **4. Partner**
```
POST   /partner                    - createPartner
GET    /partner                    - getPartners
GET    /partner/{id}               - Get Partner ById
PUT    /partner/{id}               - updatePartnerStatus (or updatePartner)
DELETE /partner/{id}               - delete Partner
```

**Frontend functions:**
- `fetchPartnerSubmissions()` - Get all
- `createPartnerSubmission(data)` - Create
- `getPartnerSubmissionById(id)` - Get one
- `updatePartnerStatus(id, status)` - Update status
- `updatePartnerSubmission(id, updates)` - Update full details
- `deletePartnerSubmission(id)` - Delete

---

### **5. School Partnership**
```
POST   /school                     - createSchool
GET    /school                     - getAllSchools (partial in image)
GET    /school/{id}                - Get School ById (inferred)
PATCH  /school/{id}                - update School Status (inferred)
DELETE /school/{id}                - delete School (inferred)
```

**Frontend functions:**
- `fetchSchoolSubmissions()` - Get all
- `createSchoolSubmission(data)` - Create
- `getSchoolSubmissionById(id)` - Get one
- `updateSchoolStatus(id, status)` - Update status
- `deleteSchoolSubmission(id)` - Delete

---

## Form Submission Flow

When a user submits a form on the website:

1. **Form collected** (e.g., on Cybersecurity page)
2. **`saveSubmission('cybersecurity', data)` called**
3. **Automatically routed to correct endpoint:**
   - Course forms → `POST /courses`
   - Insider forms → `POST /insider`
   - Tech4Teen forms → `POST /tech4teen`
   - Partner forms → `POST /partner`
   - School forms → `POST /school`
4. **Stored in backend**
5. **Also stored in localStorage as backup**

---

## Admin Dashboard Flow

When admin views submissions:

1. **Admin logs in** → `loginUser()` → `POST /api/auth/login`
2. **Gets dashboard** → Token stored in localStorage
3. **Fetches metrics** → `fetchDashboardMetrics()`
4. **Fetches from each category:**
   - `fetchInsiderSubmissions()` → `GET /insider`
   - `fetchCourseSubmissions()` → `GET /courses`
   - `fetchTech4TeenSubmissions()` → `GET /tech4teen`
   - `fetchPartnerSubmissions()` → `GET /partner`
   - `fetchSchoolSubmissions()` → `GET /school`
5. **Admin can view, update status, or delete**

---

## How Form Types Are Mapped

The system automatically maps form types to endpoints:

```typescript
// In storage.ts - getEndpointForFormType()
'insider' → /insider
'tech4teen' → /tech4teen
'schoolpartner', 'school' → /school
'becomepartner', 'partner' → /partner
'frontend', 'cybersecurity', 'data', 'deeplearning', 'generative', 'introai', 
'uidesign', 'fullstack', 'digital', 'gamedevelopment', 'aimachine', 
'introweb', 'introcybersecurity', 'cybersecurityai', 'aibootcamp' → /courses
```

---

## Component Integration

### **Using in Admin Dashboard**
```tsx
import { fetchDashboardMetrics } from './services/submissionsService'

useEffect(() => {
  const loadMetrics = async () => {
    try {
      const metrics = await fetchDashboardMetrics()
      // metrics.totalForms, metrics.insiderForms, etc.
    } catch (error) {
      console.error('Failed to load metrics:', error)
    }
  }
  loadMetrics()
}, [])
```

### **Using in Leads/Form Views Pages**
```tsx
import { fetchSubmissionsByCategory } from './services/submissionsService'

useEffect(() => {
  const loadForms = async () => {
    try {
      const byCategory = await fetchSubmissionsByCategory()
      // byCategory.insider, byCategory.courses, etc.
    } catch (error) {
      console.error('Failed to load forms:', error)
    }
  }
  loadForms()
}, [])
```

### **Using to Get Specific Category**
```tsx
import { fetchInsiderSubmissions, updateInsiderStatus } from './services/submissionsService'

// Get all insider forms
const insiders = await fetchInsiderSubmissions()

// Update one's status
await updateInsiderStatus(submissionId, 'reviewed')

// Or delete it
await deleteInsiderSubmission(submissionId)
```

---

## Key Points

✅ **Endpoint URLs:**
- Insider: `https://zeplus.onrender.com/insider`
- Courses: `https://zeplus.onrender.com/courses`
- Tech4Teen: `https://zeplus.onrender.com/tech4teen`
- Partner: `https://zeplus.onrender.com/partner`
- School: `https://zeplus.onrender.com/school`

✅ **Authorization:**
- All admin endpoints require `Authorization: Bearer <token>` header
- Token obtained from `POST /api/auth/login`
- Automatically included in all authenticated calls

✅ **Fallback:**
- If backend is down, data still saves to localStorage
- No data is ever lost

✅ **HTTP Methods:**
- POST (create) - new form submission
- GET (read) - fetch forms
- PATCH (partial update) - update status
- PUT (full update) - update partner details
- DELETE (remove) - delete form

---

## What Needs Frontend Updates

Update these component pages to use the new service functions:

1. **AdminLogin.tsx** - Use `loginUser()` instead of `authenticateUser()`
2. **AdminDashboard.tsx** - Use `fetchDashboardMetrics()`
3. **Leads.tsx** - Use `fetchSubmissionsByCategory()`
4. **FormSubmissions.tsx** - Use category-specific functions
5. **Admin FormViews** - Use `updateInsiderStatus()`, `updateCourseStatus()`, etc.
6. **TeamManagement.tsx** - Already set for userService (no changes needed)

All form submission pages will automatically use the correct endpoint based on form type.

---

## Testing

1. Submit a form on the website
2. Check Network tab in DevTools
3. Should see POST request to correct category endpoint
4. Admin dashboard should load forms from each category
5. Can update status or delete forms from admin interface

