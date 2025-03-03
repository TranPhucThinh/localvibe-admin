import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import NavMain from './nav-main'
import { ITEMS_MENU } from './items-menu'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarContent>
        <NavMain items={ITEMS_MENU} />
      </SidebarContent>
    </Sidebar>
  )
}
