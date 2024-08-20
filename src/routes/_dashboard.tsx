import { createFileRoute} from '@tanstack/react-router'
import { DashboardLayout } from '@/layouts/dashboard-layout';
export const Route = createFileRoute('/_dashboard')({
  beforeLoad: ({}) => {
    // if(!context.auth){
    //   throw redirect({from:location.pathname,to:'/login'})
    // }
  },
  component: DashboardLayout
})

