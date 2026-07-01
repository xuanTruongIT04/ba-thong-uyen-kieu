import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnnouncementBar } from "@/components/layout/announcement-bar"

export default function NotFound() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Không tìm thấy trang
          </h1>
          <p className="mt-4 text-muted-foreground">
            Rất tiếc, chúng tôi không tìm thấy trang bạn đang tìm.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/">Về trang chủ</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/shop">Xem sản phẩm</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
