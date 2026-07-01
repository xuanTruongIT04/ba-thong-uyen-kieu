"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setTimeout(() => {
      toast.success("Cảm ơn bạn đã đăng ký!")
      setEmail("")
      setLoading(false)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md gap-2">
      <input
        type="email"
        placeholder="Nhập email của bạn"
        aria-label="Địa chỉ email nhận tin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-md border border-background/20 bg-background/10 px-4 py-2 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
      />
      <Button variant="secondary" type="submit" disabled={loading}>
        {loading ? "..." : "Đăng ký"}
      </Button>
    </form>
  )
}
