import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Funnel } from "lucide-react"
import { AddInventory } from "./add-inventory"

export function HeaderInventory() {
  return (
    <header className="flex items-center justify-between gap-4 p-4 shadow-sm rounded-xl">
      {/* Left side: Search input */}
      <div className="flex items-center gap-2 w-full max-w-sm">
        <Input type="text" placeholder="Search inventory..." className="w-full" />
      </div>

      {/* Right side: Action buttons */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" aria-label="Filter" title="Filter">
          <Funnel className="h-4 w-4" />
        </Button>

        <AddInventory />

      </div>
    </header>
  )
}
