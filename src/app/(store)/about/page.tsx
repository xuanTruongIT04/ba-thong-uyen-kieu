import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircleHeart } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { DirectorSignature } from "@/components/layout/director-signature"

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Câu chuyện thương hiệu ${siteConfig.name} — ${siteConfig.tagline}.`,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
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
            sóc cá nhân đến các sản phẩm hỗ trợ sức khỏe từ bên trong. Chúng tôi tin
            rằng vẻ đẹp bền vững luôn bắt đầu từ những điều tự nhiên và chân thật
            nhất, và hành trình đó cần được nuôi dưỡng mỗi ngày, không phải chỉ
            trong một sớm một chiều.

          </p>

          <h2 className="!mt-12 text-xl font-semibold text-foreground">
            Nguồn gốc dược liệu
          </h2>
          <p>
            Nhiều sản phẩm của {siteConfig.name} lấy cảm hứng từ những bí quyết dân
            gian quen thuộc với người Việt qua nhiều thế hệ — như bồ kết, bưởi, sả,
            nghệ — vốn được tin dùng để chăm sóc tóc, da và sức khỏe một cách tự
            nhiên. Chúng tôi trân trọng gìn giữ những giá trị truyền thống ấy, đồng
            thời không ngừng nghiên cứu để mang lại trải nghiệm hiện đại và hiệu
            quả hơn cho khách hàng.
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
            Quy trình chăm chút sản phẩm
          </h2>
          <p>
            Mỗi sản phẩm của {siteConfig.name} đều trải qua quá trình chọn lọc dược
            liệu kỹ lưỡng, bào chế theo phương pháp y học cổ truyền kết hợp kiểm
            soát chất lượng ở từng công đoạn, trước khi đến tay khách hàng. Đó là
            cách chúng tôi giữ trọn sự an tâm cho mỗi sản phẩm mang tên Bà Thông.
          </p>
        </div>
      </div>

      {/* Thông điệp từ Giám đốc */}
      <DirectorSignature />

      {/* Khách hàng nói gì — placeholder, chưa có dữ liệu thật */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground">
          Khách hàng nói gì
        </h2>
        <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-dashed p-10 text-center">
          <MessageCircleHeart className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Chúng tôi đang thu thập những chia sẻ từ khách hàng — mục đánh giá sẽ
            sớm được cập nhật tại đây.
          </p>
        </div>

        <h2 className="!mt-12 text-xl font-semibold text-foreground">
          Liên hệ với chúng tôi
        </h2>
        <p className="mt-6 text-muted-foreground">
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
