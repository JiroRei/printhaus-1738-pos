import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useReactToPrint } from "react-to-print";
import { AppSidebar } from "./page-comps/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import * as ico from "lucide-react"
import { CustomSidebarTrigger } from "./page-comps/sidebar-switch-graaah"
import { Form, FormProvider, useForm } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"


function PrintJobsA() {
type PrintJobForm = {
  paperSize: string
  printColor: string
  printFile: File | null
}

    const form = useForm<PrintJobForm>({
        defaultValues: {
      paperSize: "",
      printColor: "bw",
      printFile: null,
    }
    })
    

    const reactToPrintFn = () => {
        const data = form.getValues()
        console.log(data)

        if (data.printFile) {
            console.log("Uploaded file name:", data.printFile.name)
            console.log("File object:", data.printFile)
            
            if (data.printFile instanceof File) {
                const fileURL = URL.createObjectURL(data.printFile)
                const newWindow = window.open(fileURL)
                if (newWindow) newWindow.print()
            } else {
                alert("Please upload a file first.")
            }

        } else {
            console.log("No file selected")
        }
    }

  return (
    <SidebarProvider>
      <AppSidebar />
      <CustomSidebarTrigger/>
      <main className="bg-yellow-100">
      <div className="bg-red-400 flex gap-2 mr-2 ml-2 mt-4">
      <Button>New Job Order</Button>
        <Card className="w-[400px] h-[400px]">
            <CardHeader>
                <CardTitle>NEW PRINT JOB</CardTitle>
                <CardDescription>
                    Enter print job details below.
                </CardDescription>
                <Separator className="bg-black"/>
            </CardHeader>
            <CardContent className="flex">
            <FormProvider {...form}>
                <form>
                    <FormField
                        control={form.control}
                        name="paperSize"
                        render={({ field }) => (
                    <FormItem>
                        <FormLabel>Paper Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger className="border-blue-400 rounded-xs">
                            <SelectValue placeholder="Select paper size..." />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="A3">A3</SelectItem>
                        <SelectItem value="A4">A4</SelectItem>
                        <SelectItem value="A5">A5</SelectItem>
                        <SelectItem value="Legal">Legal</SelectItem>
                        <SelectItem value="Letter">Letter</SelectItem>
                        <SelectItem value="Tabloid">Tabloid</SelectItem>
                        </SelectContent>
                    </Select>
                    </FormItem>
                    )} />
                    
                    <div className="mt-3 gap-2">
                    <FormField
                    control={form.control}
                    name="printColor"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Color</FormLabel>
                        <FormControl>
                            <div>
                                <RadioGroup onValueChange={field.onChange} defaultValue="bw">
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
                        </FormControl>
                    </FormItem>
                    )} />
                    </div>

                    <div>
                    <FormField
                    control={form.control}
                    name="printFile"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="mt-4">Upload Document</FormLabel>
                        <FormControl>
                            <div>
                                <Input id="document" type="file" onChange={(e) => {
                                    const file = e.target.files?.[0] || null
                                    field.onChange(file)}}
                                    className="rounded-xs mt-1 border-blue-400" />                              
                            </div>
                        </FormControl>
                    </FormItem>
                    )} />
                    </div>
                    
            
                </form>
            </FormProvider>
            </CardContent>
            <CardFooter>
                <Button onClick={reactToPrintFn}>Print Preview</Button>
            </CardFooter>
        </Card>
        </div>
        </main>
    </SidebarProvider>
    
  )
}

export default PrintJobsA



