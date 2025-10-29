import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/page-comps/app-sidebar";
import { Skeleton } from "@/components/ui/skeleton"
import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { CustomSidebarTrigger } from "./page-comps/sidebar-switch-graaah";




function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      
      <CustomSidebarTrigger/>
      <main className="bg-amber-200">
        <h1>AAAAA</h1>
      </main>
    </SidebarProvider>
    
  )
}

export default Dashboard
