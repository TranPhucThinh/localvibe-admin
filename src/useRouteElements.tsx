import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import MainLayout from './layout'
import Login from './pages/Login'

export default function useRouteElements() {
  const { isAuthenticated } = useContext(AppContext)

  const ProtectedRoute = () => (isAuthenticated ? <Outlet /> : <Navigate to='/login' />)

  const RejectedRoute = () => (!isAuthenticated ? <Outlet /> : <Navigate to='/' />)

  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: <MainLayout>Anh muốn code qq chi trong ni đó anh code</MainLayout>
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          index: true,
          element: <Login />
        }
      ]
    }
  ])

  return routeElements
}
