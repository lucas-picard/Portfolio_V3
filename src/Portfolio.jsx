import { lazy, Suspense, useEffect, useState } from 'react'

const DesktopPortfolio = lazy(() => import('./DesktopPortfolio.jsx'))
const App = lazy(() => import('./App.jsx'))

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia('(max-width: 1024px)').matches
  )

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1024px)')
    const updateViewport = (event) => setIsMobile(event.matches)

    mobileQuery.addEventListener('change', updateViewport)
    return () => mobileQuery.removeEventListener('change', updateViewport)
  }, [])

  return isMobile ? (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  ) : (
    <Suspense fallback={null}>
      <DesktopPortfolio />
    </Suspense>
  )
}
