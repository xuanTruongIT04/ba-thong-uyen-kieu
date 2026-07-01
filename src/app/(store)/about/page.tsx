import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Câu chuyện thương hiệu ${siteConfig.name} — ${siteConfig.tagline}.`,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">
        Về {siteConfig.name}
      </h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          {siteConfig.name} là thương hiệu chăm sóc sức khỏe và sắc đẹp từ thảo
          dược thiên nhiên Việt Nam. Chúng tôi kế thừa tinh hoa y học cổ truyền,
          kết hợp cùng công nghệ hiện đại để tạo nên những sản phẩm an toàn, lành
          tính và hiệu quả cho người Việt.
        </p>
        <p>
          Với triết lý <em>“Thảo dược đến từ Đất Việt”</em>, mỗi sản phẩm là sự
          chắt lọc từ nguồn dược liệu quý của thiên nhiên — từ chăm sóc da, chăm
          sóc cá nhân đến các sản phẩm hỗ trợ sức khỏe từ bên trong.
        </p>

        <h2 className="!mt-12 text-xl font-semibold text-foreground">
          Giá trị cốt lõi
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Nguyên liệu thảo dược thiên nhiên, an toàn và lành tính</li>
          <li>Kế thừa tinh hoa y học cổ truyền Việt Nam</li>
          <li>Kiểm soát chất lượng nghiêm ngặt trong từng sản phẩm</li>
          <li>Đồng hành cùng sức khỏe và sắc đẹp của người Việt</li>
        </ul>

        <h2 className="!mt-12 text-xl font-semibold text-foreground">
          Thông điệp từ Giám đốc
        </h2>
        <p>
          Dưới sự dẫn dắt của {siteConfig.owner.title} {siteConfig.owner.name},
          {" "}
          {siteConfig.name} không ngừng nỗ lực mang đến những sản phẩm chất lượng,
          đặt sức khỏe và sự hài lòng của khách hàng làm trọng tâm cho mọi hoạt
          động.
        </p>

        <h2 className="!mt-12 text-xl font-semibold text-foreground">
          Liên hệ với chúng tôi
        </h2>
        <p>
          Bạn cần tư vấn sản phẩm hoặc hợp tác?{" "}
          <Link href="/contact" className="underline hover:text-foreground">
            Liên hệ ngay
          </Link>{" "}
          để được hỗ trợ.
        </p>
      </div>
    </div>
  )
}
