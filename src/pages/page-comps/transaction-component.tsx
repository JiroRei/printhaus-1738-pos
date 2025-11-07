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

const transactions = [
  {
    transactionNo: "001",
    date: "2025-11-06",
    amount: "₱50.00",
    paymentMethod: "Cash",
  },
  {
    transactionNo: "002",
    date: "2025-11-05",
    amount: "₱200.00",
    paymentMethod: "GCash",
  },
]

export function TransactionTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border shadow-sm">
      <Table className="min-w-full text-sm">
        <TableCaption className="text-gray-500 py-4">
          A list of your recent transactions.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-semibold">Invoice No.</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Amount</TableHead>
            <TableHead className="font-semibold">Payment Method</TableHead>
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((item) => (
            <TableRow key={item.transactionNo} className="transition-colors">
              <TableCell className="font-medium">{item.transactionNo}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
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
