import { useState, useMemo, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./page-comps/app-sidebar"
import { CustomSidebarTrigger } from "./page-comps/sidebar-switch-graaah"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter as DialogActions } from "@/components/ui/dialog"
import { FormProvider, useForm } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

type PrintJobForm = {
  paperSize: string
  printColor: string
  printCopies: number
  orientation: string
  printFile: File | null
  printer: string
}

const PAPER_SIZES: Record<string, { width: number; height: number }> = {
  A3: { width: 1123, height: 1587 },
  A4: { width: 794, height: 1123 },
  A5: { width: 559, height: 794 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 },
  Tabloid: { width: 1056, height: 1632 },
}

function PrintJobs() {
  const [previewContent, setPreviewContent] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [fileType, setFileType] = useState<string | null>(null)
  const [printers, setPrinters] = useState<{ name: string }[]>([])

  const form = useForm<PrintJobForm>({
    defaultValues: {
      paperSize: "A4",
      printColor: "bw",
      printCopies: 1,
      orientation: "portrait",
      printFile: null,
      printer: "",
    },
  })

  const dimensions = useMemo(() => {
    const { paperSize, orientation } = form.getValues()
    const size = PAPER_SIZES[paperSize] || PAPER_SIZES["A4"]
    const width = orientation === "landscape" ? size.height : size.width
    const height = orientation === "landscape" ? size.width : size.height
    return { width, height }
  }, [form.watch("paperSize"), form.watch("orientation")])


  const [numPages, setNumPages] = useState<number>(0)

  const handlePreview = async () => {
    const data = form.getValues()
    if (!data.printFile) return alert("Please upload a file first.")
    const file = data.printFile
    const ext = file.name.split(".").pop()?.toLowerCase()
    setFileType(ext || null)

    if (ext === "pdf" || ["png", "jpg", "jpeg", "gif"].includes(ext || "")) {
      const url = URL.createObjectURL(file)
      setPreviewContent(url)
      setIsDialogOpen(true)
    } else {
      setPreviewContent("<p>Preview not supported for this file type.</p>")
      setIsDialogOpen(true)
    }
  }

  const handlePrint = async () => {
    const data = form.getValues()
    if (!data.printFile) return alert("No file selected.")
    const formData = new FormData()
    formData.append("file", data.printFile)
    formData.append("paperSize", data.paperSize)
    formData.append("copies", data.printCopies.toString())
    formData.append("printColor", data.printColor)
    formData.append("orientation", data.orientation)
    formData.append("printer", data.printer)
    await fetch("http://localhost:3000/print", { method: "POST", body: formData })
    setIsDialogOpen(false)
    console.log("Success Print?")
    console.log(data)
  }

  useEffect(() => {
    const loadPrinters = async () => {
      try {
        const res = await fetch("http://localhost:3000/print/printers")
        const data = await res.json()
        setPrinters(data)
      } catch {}
    }
    loadPrinters()
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <CustomSidebarTrigger />
      <main className=" bg-amber-200 min-h-screen">
        <div className="flex gap-2 m-4 p-4 rounded-lg">
          <Button>New Job Order</Button>
          <Card className="w-[400px] border-blue-400 border-2">
            <CardHeader>
              <CardTitle>NEW PRINT JOB</CardTitle>
              <CardDescription>Enter print job details below.</CardDescription>
              <Separator className="bg-black" />
            </CardHeader>
            <CardContent>
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
                            {Object.keys(PAPER_SIZES).map((key) => (
                              <SelectItem key={key} value={key}>
                                {key}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="orientation"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel>Orientation</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="portrait" id="portrait" className="border-blue-400"/>
                              <Label htmlFor="portrait">Portrait</Label>
                            </div>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="landscape" id="landscape" className="border-blue-400" />
                              <Label htmlFor="landscape">Landscape</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="printColor"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel>Color</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="bw" id="r1" className="border-blue-400"/>
                              <Label htmlFor="r1">Black & White</Label>
                            </div>
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="cmyk" id="r2" className="border-blue-400"/>
                              <Label htmlFor="r2">Colored</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="printCopies"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel>Number of Copies</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            value={field.value}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="border-blue-400 rounded-xs w-1/6"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="printFile"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel>Upload Document</FormLabel>
                        <FormControl>
                          <Input
                            id="document"
                            type="file"
                            accept=".pdf,.png,.jpg,.jpeg,.gif,.docx"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null
                              field.onChange(file)
                            }}
                            className="rounded-xs mt-1 border-blue-400"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </form>
              </FormProvider>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePreview}>Open Preview</Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl h-[90vh] flex flex-col items-center">
          <DialogHeader>
            <DialogTitle>Print Preview</DialogTitle>
          </DialogHeader>

          <div className="flex-grow flex items-center justify-center w-full p-4 overflow-hidden">
            {fileType === "pdf" && previewContent && (
            <div className="w-full flex flex-col items-center overflow-auto">
                <Document
                file={previewContent}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={<p>Loading PDF...</p>}
                >
                {Array.from(new Array(numPages), (_, index) => (
                    <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={0.5}
                    />
                ))}
                </Document>
            </div>
            )}

            {["png", "jpg", "jpeg", "gif"].includes(fileType || "") && previewContent && (
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={previewContent}
                  alt="Preview"
                  className="border shadow-md object-contain"
                  style={{
                    maxWidth: "95%",
                    maxHeight: "85vh",
                    transform: "scale(0.75)",
                  }}
                />
              </div>
            )}

            {!["pdf", "png", "jpg", "jpeg", "gif"].includes(fileType || "") && (
              <p className="text-center text-gray-500 mt-4">Preview not available for this file type.</p>
            )}
          </div>

          <div className="p-4 w-full max-w-md">
            <Label>Select Printer</Label>
            <Select
              onValueChange={(v) => form.setValue("printer", v)}
              defaultValue={form.getValues().printer}
            >
              <SelectTrigger className="border-blue-400 rounded-xs mt-1">
                <SelectValue placeholder="Select printer..." />
              </SelectTrigger>
              <SelectContent>
                {printers.map((p) => (
                  <SelectItem key={p.name} value={p.name}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogActions className="flex justify-end gap-2 mt-4">
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={handlePrint}>Simulate Print</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}

export default PrintJobs
