import { userApis } from '@/api/user';
import { Icon } from '@/components/ui/icon';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { data } = userApis.useCurrentMenu();
  return (
    <div className="flex">
      <div>
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className='flex flex-col'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/_dashboard')({
  beforeLoad: ({ context, location }) => {
    // if(!context.auth){
    //   throw redirect({from:location.pathname,to:'/login'})
    // }
  },
  component: DashboardLayout
})

