import { AppContext } from '@/contexts/app.context'
import useTitle from '@/hooks/use-title'
import AdminLayout from '@/layouts/Admin'
import { convertRoutes } from '@/routes/helper'
import { protectedRoutes, publicRoutes } from '@/routes/menu'
import { lazy, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

const NotFound = lazy(() => import('@/pages/not-found'))

const ProtectedComponent = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <AdminLayout /> : <Navigate to='/login' />
}

const PublicComponent = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

const useRouteElements = () => {
  useTitle()

  const routeElements = useRoutes([
    {
      element: <ProtectedComponent />,
      children: convertRoutes(protectedRoutes)
    },
    {
      element: <PublicComponent />,
      children: convertRoutes(publicRoutes)
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}

export default useRouteElements
