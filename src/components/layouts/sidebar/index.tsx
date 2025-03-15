import Footer from '@/components/layouts/sidebar/footer'
import Header from '@/components/layouts/sidebar/header'
import NavMain from '@/components/layouts/sidebar/nav-main'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='shadow-sm'>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter className='border-t'>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  )
}
