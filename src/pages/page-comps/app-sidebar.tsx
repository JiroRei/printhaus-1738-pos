import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import * as ico from "lucide-react"
import React from "react"
import { Separator } from "@/components/ui/separator" 
import { useTheme } from "./theme-provider"





export function AppSidebar() {

  const { toggleSidebar } = useSidebar();
  const {setTheme, theme} = useTheme();
    
    const toggleTheme = () => {
      
      if(theme == "light"){
        setTheme("dark")
      }else{
        setTheme("light")
      }
      console.log(theme)
    }
  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-max text-white text-xl mt-2 mb-3 bg-headkolor"><ico.Printer className="mr-1.5" onClick={() => {toggleSidebar(); toggleTheme();}} /><Separator orientation="vertical" className="mr-1 bg-white"/>
            ReamJob POS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4">
              <SidebarMenuItem>
                <div  className="text-background bg-kolor p-1">DASHBOARD</div>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="Dashboard">
                      <ico.Monitor/>
                      <span className="">Overview/Analytics</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>

                </SidebarMenuSub>
                <div  className="text-background bg-kolor p-1">SALES</div>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href="printjob">
                        <ico.FilePlus2 />
                        <span className="">New Print Job</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
                
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href="/TransactionPage">
                        <ico.List />
                        <span className="">Transactions</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
                
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href="Attendance">
                        <ico.Table2 />
                        <span className="">Sales Report</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>

                <div  className="text-background bg-kolor p-1">INVENTORY</div>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href="/InventoryPage">
                        <ico.Package />
                        <span className="">Inventory</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>

                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href="/InventoryManagement">
                        <ico.PackagePlus />
                        <span className="">Inventory Management</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>

              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="w-full border-green-950 border-t-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full">
                      <ico.User />
                      <div className="">User</div>
                      <ico.ChevronUp className="ml-auto"/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <a href="Account">
                        <SidebarMenuButton className="">Account</SidebarMenuButton>
                        </a>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <Dialog>
                            <DialogTrigger asChild>
                              <SidebarMenuButton className="">Log Out</SidebarMenuButton>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Confirm Logout</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to log out? Any unsaved changes may or may not be saved idk.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button className="text-white"><a href="/">Log Out</a></Button>
                              </DialogFooter>
                            </DialogContent>
                        </Dialog>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

                 
                
             