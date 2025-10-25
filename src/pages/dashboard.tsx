import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/page-comps/app-sidebar";
import { Skeleton } from "@/components/ui/skeleton"
import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';




function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
    
  )
}

export default Dashboard
