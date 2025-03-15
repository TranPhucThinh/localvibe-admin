import { MenuProps } from '@/types/utils'
import { LayoutDashboard, MapPinned, Settings2 } from 'lucide-react'

export const MENU: MenuProps[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: LayoutDashboard
  },
  {
    title: 'Tour',
    path: '#',
    icon: MapPinned,
    children: [
      {
        title: 'List',
        path: '/tour'
      },
      {
        title: 'Category',
        path: '/tour/category'
      },
      {
        title: 'Tag',
        path: '/tour/tag'
      }
    ]
  },
  {
    title: 'Settings',
    path: '#',
    icon: Settings2,
    children: [
      {
        title: 'General',
        path: '#'
      },
      {
        title: 'Team',
        path: '#'
      },
      {
        title: 'Billing',
        path: '#'
      }
    ]
  }
]
