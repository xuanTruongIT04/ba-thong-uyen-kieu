"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner"
import { contactFormSchema } from "@/lib/validators"
import { siteConfig } from "@/lib/config"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const result = contactFormSchema.safeParse(form)
    if (!result.success) {
      toast.error(result.error.issues[0].message)
      return
    }

    setLoading(true)
    // Bản demo: chưa gửi thật. Phase 2 sẽ gửi email qua API route của Next.js.
    setTimeout(() => {
      toast.success("Đã gửi! Chúng tôi sẽ liên hệ lại với bạn sớm.")
      setForm({ name: "", email: "", subject: "", message: "" })
      setLoading(false)
    }, 500)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        title="Liên hệ"
        description="Bạn có câu hỏi hoặc cần tư vấn sản phẩm? Điền vào biểu mẫu bên dưới hoặc liên hệ trực tiếp, chúng tôi sẽ phản hồi sớm nhất có thể."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Contact info cards */}
        <div className="space-y-4 lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                Hotline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                Địa chỉ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.address.city}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact form */}
        <Card className="lg:col-span-2">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ tên</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Họ tên của bạn"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@cuaban.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Chúng tôi có thể giúp gì cho bạn?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cho chúng tôi biết thêm về nhu cầu của bạn..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                {loading ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
