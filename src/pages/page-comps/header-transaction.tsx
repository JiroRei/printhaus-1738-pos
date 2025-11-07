import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Funnel, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddTransaction } from "./add-transaction"

export function HeaderTransaction() {
  const [downloadFormat, setDownloadFormat] = React.useState("pdf")
  const [sortBy, setSortBy] = React.useState("name")

  return (
    <header className="flex items-center justify-between gap-4 p-4 shadow-sm rounded-xl">

      <div className="flex items-center gap-2 w-full sm:w-auto flex-grow max-w-sm">
        <Input type="text" placeholder="Search transaction..." className="w-full" />
      </div>

      {/* Right side: Buttons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Download dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download As
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Choose File Format</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={downloadFormat}
              onValueChange={setDownloadFormat}
            >
              <DropdownMenuRadioItem value="pdf">PDF</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="excel">Excel</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="csv">CSV</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Funnel className="h-4 w-4" />
              Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Sort Inventory</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="quantity">Quantity</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="amount">Amount</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Example of an "Add" button if needed */}
        <AddTransaction />
      </div>
    </header>
  )
}
