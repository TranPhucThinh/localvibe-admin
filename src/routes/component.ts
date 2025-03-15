/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

type Importer = () => Promise<{ default: ComponentType<object> }>
type LazyComponent = LazyExoticComponent<ComponentType<object>>

const modules = import.meta.glob<Importer>('@/pages/**/{index,loading}.tsx')

const lazyComponents: Record<string, LazyComponent> = {}

Object.entries(modules).forEach(([path, importer]) => {
  // Match: /pages/dashboard/index.tsx, /pages/tour/list/loading.tsx, etc.
  const match = path.match(/\/pages\/(.+)\/(index|loading)\.tsx$/)
  if (!match) return

  const [, fullFolder, type] = match

  // fullFolder: "dashboard" | "tour/list" | "tour/category"
  // Chuyển sang tên component: TourList, TourCategory, Dashboard, v.v.
  const name =
    fullFolder
      .split('/')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
      .join('') + (type === 'loading' ? 'Loading' : '')

  lazyComponents[name] = lazy(importer as any)
})

// ✅ Xuất các component đã biết (ép kiểu chắc chắn)
export const {
  Dashboard,
  DashboardLoading,
  TourList,
  TourListLoading,
  TourCategory,
  TourCategoryLoading,
  TourTag,
  TourTagLoading,
  Login,
  LoginLoading
} = lazyComponents as {
  Dashboard: LazyComponent
  DashboardLoading?: LazyComponent
  TourList: LazyComponent
  TourListLoading?: LazyComponent
  TourCategory: LazyComponent
  TourCategoryLoading?: LazyComponent
  TourTag: LazyComponent
  TourTagLoading?: LazyComponent
  Login: LazyComponent
  LoginLoading?: LazyComponent
}
