import { Sidebar } from "lucide-react";
import { AppSidebar } from "./page-comps/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HeaderTransaction } from "./page-comps/header-transaction";
import { TransactionTable } from "./page-comps/transaction-component";

export default function TransactionPage() {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-svh bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <HeaderTransaction />


          <main className="ml-4 flex-1 overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Transaction</h1>


            <div className="h-[calc(100vh-8rem)] overflow-auto">
              <TransactionTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
