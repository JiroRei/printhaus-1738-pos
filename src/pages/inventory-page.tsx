import { Sidebar } from "lucide-react";
import { AppSidebar } from "./page-comps/app-sidebar";
import { HeaderInventory } from "./page-comps/header-inventory";
import { InventoryTable } from "./page-comps/inventory-component";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function InventoryManagement() {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-svh bg-background">
        <AppSidebar />


        <div className="flex-1 flex flex-col">
          <HeaderInventory />


          <main className="ml-4 flex-1 overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>


            <div className="h-[calc(100vh-8rem)] overflow-auto">
              <InventoryTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
