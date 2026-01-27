import { useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import WhatsAppBubble from './components/WhatsAppBubble'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Digital from './pages/Digital'
import Aimachine from './pages/Aimachine'
import Cybersecurity from './pages/Cybersecurity'
import Fullstack from './pages/Fullstack'
import Data from './pages/Data'
import Uidesign from './pages/Uidesign'
import Tech4teen from './pages/Tech4teen'
import Schoolpartner from './pages/Schoolpartner'
import Becomepartner from './pages/Becomepartner'
import AIBootcamp from './pages/AIBootcamp'
import Footer from './components/Footer'
import Gamedevelopment from './pages/Gamedevelopment'
import Insider from './pages/Insider'

import Introweb from './pages/introweb'
import Frontend from './pages/Frontend'
import Cybersecurityai from './pages/cybersecurityai'
import Introcybersecurity from './pages/introcybersecurity'
import Generative from './pages/Generative'

import Introai from './pages/Introai'
import Deeplearning from './pages/Deeplearning'
import ThankYou from './pages/ThankYou'
import AdminDashboard from './pages/AdminDashboard'
import AdminLayout from './components/admin/AdminLayout'
import Leads from './pages/Leads'
import AdminLogin from './pages/AdminLogin'
import FormSubmissions from './pages/FormSubmissions'

import { 
  InsiderForms, 
  CourseBrochureForms,  
  BecomePartnerForms, 
  SchoolPartnershipForms,
  Tech4teenForms,
  AIBootcampForms
} from './pages/admin/FormViews'
import TeamManagement from './pages/TeamManagement'
import Settings from './pages/Settings'
import { initializeUsers } from './utils/userManagement'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const intervalRef = useRef<number | null>(null)

  // Initialize default superadmin user on first load
  useEffect(() => {
    initializeUsers()
  }, [])

  useEffect(() => {
    // Skip insider navigation if admin is logged in
    const isAdminPath = location.pathname.startsWith('/admin')
    if (isAdminPath) return

    // navigate to the Insider page every 1 minute (60000 ms) - only for non-admin users
    // Temporarily disable the insider popup for debugging
    // const showInsider = () => {
    //   if (location.pathname !== '/insider') navigate('/insider')
    // }

    // intervalRef.current = window.setInterval(() => {
    //   showInsider()
    // }, 1 * 60 * 1000)

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [navigate, location])

  const isAdminPath = location.pathname.startsWith('/admin')

  return (
    <>
      <ScrollToTop />
      {!isAdminPath && <Navbar />}
      {!isAdminPath && <WhatsAppBubble />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/aimachine" element={<Aimachine />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/data" element={<Data />} />
        <Route path="/uidesign" element={<Uidesign />} />
        <Route path="/schoolpartner" element={<Schoolpartner />} />
        <Route path="/tech4teen" element={<Tech4teen />} />
        <Route path="/becomepartner" element={<Becomepartner />} />
        <Route path="/gamedevelopment" element={<Gamedevelopment />} />
        <Route path="/introweb" element={<Introweb />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/cybersecurityai" element={<Cybersecurityai />} />
        <Route path="/introcybersecurity" element={<Introcybersecurity />} />
        <Route path="/generative" element={<Generative />} />
        
        <Route path="/introai" element={<Introai />} />
        <Route path="/ai-bootcamp" element={<AIBootcamp />} />
        <Route path="/deeplearning" element={<Deeplearning />} />
        <Route path="/insider" element={<Insider />} />
        <Route path="/insider/thank-you" element={<ThankYou />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}> 
          <Route index element={<AdminDashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="forms" element={<FormSubmissions />} />
          <Route path="forms/insider" element={<InsiderForms />} />
          <Route path="forms/course-brochure" element={<CourseBrochureForms />} />        
          <Route path="forms/tech4teen" element={<Tech4teenForms />} />
          <Route path="forms/becomepartner" element={<BecomePartnerForms />} />
          <Route path="forms/schoolpartner" element={<SchoolPartnershipForms />} />
          <Route path="forms/aibootcamp" element={<AIBootcampForms />} />
          <Route path="team-management" element={<TeamManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!isAdminPath && <Footer />}
      {/* Render modal after page content so underlying page is visible/dimmed when modal opens */}
      
    </>
  )
}

export default App