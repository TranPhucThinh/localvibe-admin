import { protectedRoutes, publicRoutes } from '@/routes/menu'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const allRoutes = [...protectedRoutes, ...publicRoutes]
    const matchedRoute = allRoutes.find((route) => route.path === location.pathname)
    if (matchedRoute && matchedRoute.title) {
      document.title = matchedRoute.title
    } else {
      document.title = 'Dashboard'
    }
  }, [location])
}

export default useTitle
