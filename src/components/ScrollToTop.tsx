import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Using 'instant' instead of 'smooth' to prevent jarring experience during navigation
    })
  }, [pathname])

  return null
}