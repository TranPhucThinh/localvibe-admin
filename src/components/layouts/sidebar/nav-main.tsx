import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { MENU } from '@/components/layouts/sidebar/menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const NavMain = () => {
  const location = useLocation()
  const currentPath = location.pathname

  // ✅ Tìm menu có chứa path hiện tại để mở sẵn
  const [openMenu, setOpenMenu] = useState<string | null>(() => {
    const activeMenu = MENU.find((menu) => menu.children?.some((child) => child.path === currentPath))
    return activeMenu?.title || null
  })

  const handleToggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title))
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {MENU.map((menu) => {
          const hasChildren = !!menu.children?.length

          if (!hasChildren) {
            return (
              <SidebarMenuItem key={menu.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={menu.title}
                  className={cn(
                    'h-9 rounded-none hover:bg-pink-100 hover:border-r-pink-400',
                    menu.path === currentPath ? 'bg-orange-100 text-primary border-r-2 border-r-orange-400' : ''
                  )}
                  onClick={() => setOpenMenu(null)}
                >
                  <Link to={menu.path} className='flex items-center gap-2 w-full'>
                    {menu.icon && <menu.icon />}
                    <span className='line-clamp-1'>{menu.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          return (
            <Collapsible key={menu.title} asChild open={openMenu === menu.title} className='group/collapsible'>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={menu.title} onClick={() => handleToggleMenu(menu.title)} className='h-9'>
                    {menu.icon && <menu.icon />}
                    <span className='line-clamp-1'>{menu.title}</span>
                    <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menu.children!.map((subItem) => {
                      const isSubActive = subItem.path === currentPath
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className={cn(
                              'cursor-pointer h-9 rounded-none hover:bg-pink-100 hover:border-r-pink-400',
                              isSubActive ? 'bg-orange-100 text-primary border-r-2 border-r-orange-400' : ''
                            )}
                          >
                            <Link to={subItem.path}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavMain
