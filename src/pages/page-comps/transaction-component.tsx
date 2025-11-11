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
import moment from 'moment';
import { Pencil, Trash2, PhilippinePeso } from "lucide-react"
import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator";



export function TransactionTable() {

  const [transactions, setTransactions] = useState([]);

  function fetchTransactions(){
    fetch('http://localhost:3000/print-attribs')
    .then(res => res.json())
    .then(data => setTransactions(data.data))
  }
  useEffect(() => {
    fetchTransactions()
    console.log("AAAAAAAAAAAAAA")
  }, [])
  

  return (
    <div className="w-[165vh] overflow-x-auto rounded-xl border shadow-sm">
      <Table className="min-w-full text-sm">
        <TableCaption className="text-gray-500 py-4">
          A list of your recent transactions.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-semibold flex items-center gap-2">Transaction ID</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Time</TableHead>
            <TableHead className="font-semibold">Amount</TableHead>
            <TableHead className="font-semibold">Payment Method</TableHead>
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="border-b-1">
          {transactions.map((printvalues: any) => (
            <TableRow key={printvalues.transactionID} className="transition-colors">
              <TableCell className="font-medium text-sm font-stretch-extra-condensed">{printvalues.transactionID}</TableCell>
              <TableCell>{moment(printvalues.createdAt).isValid() ? moment(printvalues.createdAt).format('L') : ""}</TableCell>
              <TableCell>{moment(printvalues.createdAt).isValid() ? moment(printvalues.createdAt).format('LTS') : ""}</TableCell>
              <TableCell>{printvalues.paymentMethod}</TableCell>
              <TableCell>₱ {Number(printvalues.printPrice).toFixed(2)}</TableCell>
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
