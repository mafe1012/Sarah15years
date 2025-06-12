"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, RotateCcw } from "lucide-react"

export default function Component() {
  const [gCount, setGCount] = useState(4)
  const [customText, setCustomText] = useState("")

  const generateGs = (count: number) => "g".repeat(count)

  const addG = () => setGCount((prev) => prev + 1)
  const removeG = () => setGCount((prev) => Math.max(1, prev - 1))
  const reset = () => {
    setGCount(4)
    setCustomText("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-700">G Generator</CardTitle>
          <CardDescription>Started with "gggg" - let's make it more interesting!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-mono font-bold text-green-600 bg-green-50 p-4 rounded-lg border-2 border-green-200 min-h-[80px] flex items-center justify-center break-all">
              {generateGs(gCount)}
            </div>
            <Badge variant="secondary" className="mt-2">
              {gCount} G{gCount !== 1 ? "s" : ""}
            </Badge>
          </div>

          <div className="flex gap-2 justify-center">
            <Button onClick={removeG} variant="outline" size="sm">
              <Minus className="w-4 h-4" />
            </Button>
            <Button onClick={addG} variant="default" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
            <Button onClick={reset} variant="ghost" size="sm">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <label htmlFor="custom" className="text-sm font-medium">
              Or try your own pattern:
            </label>
            <Input
              id="custom"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type anything..."
              className="text-center font-mono"
            />
            {customText && (
              <div className="text-2xl font-mono font-bold text-blue-600 bg-blue-50 p-3 rounded-lg border-2 border-blue-200 text-center break-all">
                {customText}
              </div>
            )}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Sometimes the simplest inputs lead to the most fun! 🎉</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
