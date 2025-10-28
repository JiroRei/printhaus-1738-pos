import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./page-comps/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import * as ico from "lucide-react"
import { CustomSidebarTrigger } from "./page-comps/sidebar-switch-graaah"


function PrintJobs() {
    
  return (
    <SidebarProvider>
      <AppSidebar />
      <CustomSidebarTrigger/>
      <main className="bg-yellow-100">
      <div className="bg-red-400 flex gap-2 mr-2 ml-2 mt-4">
      <Button>New Job Order</Button>
        <Card className="w-[800px] h-[500px]">
            <CardHeader>
                <CardTitle>NEW PRINT JOB</CardTitle>
                <CardDescription>
                    Enter print job details below.
                </CardDescription>
                <Separator className="bg-black"/>
            </CardHeader>
            <CardContent className="flex">
                <div>
                    <RadioGroup defaultValue="bw">
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="bw" id="r1" className="border-ringborder"/>
                            <Label htmlFor="r1">Black & White</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="cmyk" id="r2" className="border-ringborder"/>
                            <Label htmlFor="r2">Colored</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CardContent>
        </Card>
        </div>
        </main>
    </SidebarProvider>
    
  )
}

export default PrintJobs


