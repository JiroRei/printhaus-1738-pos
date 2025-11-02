import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function AddInventory() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"><Plus/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Inventory</DialogTitle>
            <DialogDescription>
              Make changes to your inventory here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            

             <div className="grid gap-3">
              <Label htmlFor="name-1">Invoice</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Status</Label>
              <Input id="username-1" name="username" />
            </div>

             <div className="grid gap-3">
              <Label htmlFor="name-1">Method</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Amount</Label>
              <Input id="username-1" name="username" />
            </div>
          </div>


          







          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
