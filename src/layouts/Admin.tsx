import { AppSidebar } from '@/components/layouts/sidebar'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

const TopSidebar = () => {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
      </div>
    </header>
  )
}

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <section className='shadow-sm'>
          <TopSidebar />
        </section>
        <section className='p-4'>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout
