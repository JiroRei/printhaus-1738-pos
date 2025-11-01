"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import mammoth from "mammoth"

export default function PrintPreviewDialog({ open, onOpenChange, file }: { open: boolean; onOpenChange: (v: boolean) => void; file: File | null }) {
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [printer, setPrinter] = useState<string>("")
  const [paperSize, setPaperSize] = useState<string>("A4")
  const [orientation, setOrientation] = useState<string>("portrait")
  const [scaleFactor, setScaleFactor] = useState<number>(1)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const paperSizes: Record<string, [number, number]> = {
    A3: [297, 420],
    A4: [210, 297],
    A5: [148, 210],
    Letter: [216, 279],
    Legal: [216, 356],
    Tabloid: [279, 432],
  }

  useEffect(() => {
    const loadFile = async () => {
      if (!file) return
      const ext = file.name.split(".").pop()?.toLowerCase()
      if (ext === "pdf") {
        setPreviewUrl(URL.createObjectURL(file))
      } else if (ext === "docx") {
        const arrayBuffer = await file.arrayBuffer()
        const result = await mammoth.convertToHtml({ arrayBuffer })
        const blob = new Blob([result.value], { type: "text/html" })
        setPreviewUrl(URL.createObjectURL(blob))
      }
    }
    loadFile()
  }, [file])

  useEffect(() => {
    const updateScale = () => {
      const [w, h] = paperSizes[paperSize] || [210, 297]
      const isLandscape = orientation === "landscape"
      const dialog = document.querySelector("[role='dialog']") as HTMLElement
      if (!dialog) return
      const availableWidth = dialog.clientWidth * 0.9
      const availableHeight = dialog.clientHeight * 0.7
      const pageWidth = isLandscape ? h : w
      const pageHeight = isLandscape ? w : h
      const scale = Math.min(availableWidth / pageWidth, availableHeight / pageHeight)
      setScaleFactor(scale)
    }
    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [paperSize, orientation])

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) iframeRef.current.contentWindow.print()
  }

  const [pageWidth, pageHeight] =
    orientation === "landscape"
      ? paperSizes[paperSize].slice().reverse()
      : paperSizes[paperSize]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Print Preview</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between items-center space-x-2">
          <Select value={printer} onValueChange={setPrinter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select printer..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Printer1">Printer 1</SelectItem>
              <SelectItem value="Printer2">Printer 2</SelectItem>
            </SelectContent>
          </Select>
          <Select value={paperSize} onValueChange={setPaperSize}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Paper Size" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(paperSizes).map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Orientation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portrait">Portrait</SelectItem>
              <SelectItem value="landscape">Landscape</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md mt-2">
          {previewUrl && (
            <iframe
              ref={iframeRef}
              src={previewUrl}
              className="absolute top-0 left-0 origin-top-left border shadow-md"
              style={{
                width: `${pageWidth}px`,
                height: `${pageHeight}px`,
                transform: `scale(${scaleFactor})`,
                transformOrigin: "top left",
              }}
            />
          )}
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handlePrint}>Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
