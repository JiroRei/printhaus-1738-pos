import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/page-comps/app-sidebar";
import { Skeleton } from "@/components/ui/skeleton"
import { Pie, PieChart } from 'recharts';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { CustomSidebarTrigger } from "./page-comps/sidebar-switch-graaah";
import { Separator } from "@/components/ui/separator";




function Inventory() {
  return (
    <SidebarProvider>
      <AppSidebar />
      
      <CustomSidebarTrigger/>
      <main className="w-screen">
        <div className="flex gap-2 m-1 p-4">
            <h1 className="text-primary text-2xl font-bold">INVENTORY</h1>
        </div>
        <Separator className="bg-kolor"/>

        <Card className="w-xs m-3 border-blue-300 hover:border-primary">
            <CardHeader>
                <CardTitle>Hard Copy A4 Paper</CardTitle>
                <CardDescription>Reams: 3</CardDescription>
                <CardAction className="text-xs font-semibold">Stock: </CardAction>
            </CardHeader>
            <CardContent>
                <img src="src/assets/testpics/hca4.jpg" alt="" className="h-48 w-full object-cover"/>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>   
        </Card>
      </main>
    </SidebarProvider>
    
  )
}

export default Inventory
