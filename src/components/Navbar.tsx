import logo from '../assets/img/logo.svg'
import exitIcon from '../assets/img/exit.png'
import menuIcon from '../assets/img/menu.png'
import cellIcon from '../assets/courses/cell.png'
import arrowright from '../assets/courses/torite.png'
import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!mobileRef.current) return
      if (e.target instanceof Node) {
        // ignore clicks that happen inside mobile panel or on the toggle button itself
        if (mobileRef.current.contains(e.target)) return
        if (toggleRef.current && toggleRef.current.contains(e.target)) return
        setMobileOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const navigate = useNavigate()

  const goToTestimonials = () => {
    // If already on home, scroll directly; otherwise navigate then scroll after a short delay
    if (window.location.pathname === '/') {
      const el = document.getElementById('testimonials')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
      // delay slightly to allow the home route to render
      setTimeout(() => {
        const el = document.getElementById('testimonials')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }
  const goToApply = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('apply-now')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById('apply-now')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }

  return (
    <section className='w-full  h-22  bg-[#FBFBF9] font-poppins sticky top-0 z-50'>
      <nav className='md:max-w-8xl w-full  mx-auto text-[16.5px] md:px-40'>
        <div className='flex items-center justify-between md:px-0 px-4 py-5 w-full text-sm'>
          {/* Left: logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={logo} alt='logo' className='h-8 w-39 object-contain' />
            </Link>
          </div>

          {/* Center: main links (centered on md+) */}
          <div className='hidden md:flex flex-1 justify-center space-x-8'>
            {/* Courses with dropdown */}
            <CoursesDropdown />

            <NavLink to='/tech4teen' className={({ isActive }) => `font-poppins underline-offset-2 ${isActive ? 'text-[#8F2436]' : 'text-[#7F676B]'} hover:text-[#8F2436]`}>Tech4Teen</NavLink>
            <button onClick={goToTestimonials} className={`font-poppins underline-offset-2 text-[#7F676B] hover:text-[#8F2436]`}>Testimonials</button>
            <PartnersDropdown />
            <NavLink to='/ai-bootcamp' className={({ isActive }) => `font-poppins underline-offset-2 ${isActive ? 'text-[#8F2436]' : 'text-[#7F676B]'} hover:text-[#8F2436]`}>AI Bootcamp</NavLink>
          </div>

          {/* Right: actions (aligned right on md+) */}
          <div className='hidden md:flex items-center space-x-6'>
            <a href="tel:+2348169669110" aria-label="Call +2348169669110" className='underline-offset-2'>
              <img src={cellIcon} alt="Call" className='w-6 h-6 object-contain inline-block' style={{ filter: 'invert(45%) sepia(12%) saturate(836%) hue-rotate(294deg) brightness(92%) contrast(87%)' }} />
            </a>
            <button onClick={goToApply} className='bg-[#8F2436] py-2 px-7 text-[#ffffff] rounded-xl text-sm inline-flex items-center'>
              <span>Apply Now</span>
              <span className='ml-3 bg-[#EFE1DD] rounded-full p-2 flex items-center justify-center'>
                <img src={arrowright} alt='arrow' className='w-3 h-3 object-contain' />
              </span>
            </button>
          </div>

          {/* Mobile: hamburger */}
          <div className='md:hidden flex items-center'>
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
              ref={toggleRef}
              className='w-10 h-10 p-2 rounded-md inline-flex items-center justify-center  '
            >
              <span className='relative w-6 h-6 block'>
                <img src={menuIcon} alt='open' className={`absolute inset-0 w-6 h-6 object-contain transition-opacity duration-150 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                <img src={exitIcon} alt='close' className={`absolute inset-0 w-6 h-6 object-contain transition-opacity duration-150 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          ref={mobileRef}
          className={`md:hidden fixed inset-x-0 top-20 z-50 ${mobileOpen ? 'max-h-[50vh] visible' : 'max-h-0 overflow-hidden invisible'}`}
        >
          <div className='pt-6 px-6 py-6 space- bg-[#60070B] text-white overflow-auto' style={{ maxHeight: '50vh' }}>
            <CoursesDropdownMobile onNavigate={() => setMobileOpen(false)} />
            <Link to='/tech4teen' onClick={() => setMobileOpen(false)} className='block py-2 text-white'>Tech4Teen</Link>
            <button onClick={() => { setMobileOpen(false); goToTestimonials() }} className='block py-2 text-white text-left w-full'>Testimonials</button>
            <PartnersDropdownMobile onNavigate={() => setMobileOpen(false)} />
            <Link to='/ai-bootcamp' onClick={() => setMobileOpen(false)} className='block py-2 text-white'>AI Bootcamp</Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar

function CoursesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current)
        closeTimer.current = undefined
      }
    }
  }, [])

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  const isInside = (node: Node | null, target: EventTarget | null) => {
    return Boolean(node && target instanceof Node && node.contains(target))
  }

  return (
    <div className='relative cursor-pointer' ref={ref}>
      <button
        aria-haspopup='true'
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => { setOpen(v => !v) }}
        onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false) } }}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the menu, don't close
          if (isInside(menuRef.current, e.relatedTarget)) return
          // delay close slightly to allow smooth movement into menu
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className='flex items-center space-x-1 focus:outline-none cursor-pointer text-[#7F676B] hover:text-[#8F2436]'
      >
        <span className='cursor-pointer'>Courses</span>
        <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div
        role='menu'
        aria-label='Courses'
        ref={menuRef}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          // if moving into the button, don't close
          if (isInside(buttonRef.current, e.relatedTarget)) return
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className={
          `absolute left-0 top-full z-50 w-56 bg-[#FBFBF9] border border-gray-200 rounded shadow-lg transition-all duration-150 ` +
          (open ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none')
        }
      >
        <div className='py-2 '>
          <Link to='/uidesign' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>UI/UX Design</Link>
          <Link to='/data' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>Data Analytics</Link>
          <Link to='/fullstack' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>Full Stack Development</Link>
           <Link to='cybersecurity' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>Cybersecurity</Link>
            <Link to='/digital' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>Digital Marketing</Link>
             <Link to='/aimachine' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436]' role='menuitem'>AI & Machine Learning</Link>
        </div>
      </div>
    </div>
  )
}

function PartnersDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  const isInside = (node: Node | null, target: EventTarget | null) => {
    return Boolean(node && target instanceof Node && node.contains(target))
  }

  return (
    <div className='relative cursor-pointer' ref={ref}>
      <button
        aria-haspopup='true'
        aria-expanded={open}
        ref={buttonRef}
        onClick={() => { setOpen(v => !v) }}
        onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false) } }}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          if (isInside(menuRef.current, e.relatedTarget)) return
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className='flex items-center space-x-1 focus:outline-none cursor-pointer text-[#7F676B] hover:text-[#8F2436]'
      >
        <span className='cursor-pointer'>Partners</span>
        <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>

      <div
        role='menu'
        aria-label='Partners'
        ref={menuRef}
        onPointerEnter={() => {
          if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = undefined
          }
          setOpen(true)
        }}
        onPointerLeave={(e: any) => {
          if (isInside(buttonRef.current, e.relatedTarget)) return
          closeTimer.current = window.setTimeout(() => {
            setOpen(false)
            closeTimer.current = undefined
          }, 150)
        }}
        className={
          `absolute left-0 top-full z-50 w-56 bg-[#FBFBF9] border border-gray-200 rounded shadow-lg transition-all duration-150 ` +
          (open ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none')
        }
      >
        <div className='py-2 '>
          <Link to='/becomepartner' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436] cursor-pointer' role='menuitem'>Become a Partner</Link>
          <Link to='/schoolpartner' onClick={() => setOpen(false)} className='block px-4 py-2 text-sm text-[#7F676B] hover:text-[#8F2436] cursor-pointer' role='menuitem'>School Partnership</Link>
        </div>
      </div>
    </div>
  )
}

function PartnersDropdownMobile({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate()

  const goToBecome = () => {
    if (onNavigate) onNavigate()
    navigate('/becomepartner')
  }

  const goToSchool = () => {
    if (onNavigate) onNavigate()
    navigate('/schoolpartner')
  }

  return (
    <div className=''>
      <button
        onClick={goToBecome}
        className='w-full text-left block py-2 text-white cursor-pointer'
      >
        Become a Partner
      </button>
      <button
        onClick={goToSchool}
        className='w-full text-left block py-2 text-white cursor-pointer'
      >
        School Partnership
      </button>
    </div>
  )
}

function CoursesDropdownMobile({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate()

  const goToPrograms = () => {
    // close the mobile panel first (parent provided)
    if (onNavigate) onNavigate()

    // If already on home, scroll directly; otherwise navigate then scroll after a short delay
    if (window.location.pathname === '/') {
      const el = document.getElementById('programs')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
      // delay slightly to allow the home route to render
      setTimeout(() => {
        const el = document.getElementById('programs')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }

  return (
    <div className=''>
      <button
        onClick={goToPrograms}
        aria-expanded={false}
        className='w-full flex items-center space-x-1 focus:outline-none cursor-pointer text-white'
      >
        <span>Courses</span>
        <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' aria-hidden>
          <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24
           4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' clipRule='evenodd' />
        </svg>
      </button>
    </div>
  )
}