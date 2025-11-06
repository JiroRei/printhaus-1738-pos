import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

const inventory = [
  {
    noStock: "001",
    productName: "Kokongban",
    productQuantity: "100",
    stockLevel: "Good",
    amount: "₱250.00",
  },
  {
    noStock: "002",
    productName: "A4 Paper",
    productQuantity: "50",
    stockLevel: "Low",
    amount: "₱150.00",
  },
]

export function InventoryTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border shadow-sm">
      <Table className="min-w-full text-sm">
        <TableCaption className="text-gray-500 py-4">
          A list of your inventory.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] font-semibold">No.</TableHead>
            <TableHead className="font-semibold ">Product Name</TableHead>
            <TableHead className="font-semibold ">Quantity on Stock</TableHead>
            <TableHead className="font-semibold">Stock Level</TableHead>
            <TableHead className="text-right font-semibold">Amount</TableHead>
            <TableHead className="font-semiboldtext-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.noStock} className="transition-colors">
              <TableCell className="font-medium">{item.noStock}</TableCell>
              <TableCell className="capitalize">{item.productName}</TableCell>
              <TableCell>{item.productQuantity}</TableCell>
              <TableCell
                className={`font-medium ${
                  item.stockLevel === "Low"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {item.stockLevel}
              </TableCell>
              <TableCell className="text-right">{item.amount}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Edit"
                  title="Edit"
                  className="text-blue-600"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Delete"
                  title="Delete"
                  className="text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
