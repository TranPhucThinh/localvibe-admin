import { Dashboard, Login, TourList, TourCategory, TourTag } from '@/routes/component'
import { RoutesProps } from '@/types/utils'

export const protectedRoutes: RoutesProps[] = [
  {
    path: '/',
    element: <Dashboard />,
    title: 'Dashboard',
    fallback: <div>Đang tải trang chủ...</div>
  },
  {
    path: '/tour',
    element: <TourList />,
    title: 'Dashboard | Tour',
    fallback: <div>Đang tải trang tour...</div>
  },
  {
    path: '/tour/category',
    element: <TourCategory />,
    title: 'Dashboard | Category',
    fallback: <div>Đang tải trang tour...</div>
  },
  {
    path: '/tour/tag',
    element: <TourTag />,
    title: 'Dashboard | Tag',
    fallback: <div>Đang tải trang tour...</div>
  }
]

export const publicRoutes: RoutesProps[] = [
  {
    path: '/login',
    element: <Login />,
    title: 'Login',
    fallback: <div>Đang tải trang đăng nhập...</div>
  }
]
