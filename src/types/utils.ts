import { LucideIcon } from 'lucide-react'

export type MenuProps = {
  title: string
  path: string
  icon?: LucideIcon
  isActive?: boolean
  children?: {
    title: string
    path: string
    icon?: LucideIcon
  }[]
}

export type RoutesProps = {
  path: string
  element: React.ReactNode
  fallback?: React.ReactNode
  children?: RoutesProps[]
  label?: string
  icon?: React.ReactNode
  title?: string
}
