import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"
import { ProductGrid } from "@/components/products/product-grid"
import { NewsletterForm } from "@/components/layout/newsletter-form"
import { PLACEHOLDER_IMAGE } from "@/lib/constants"
import { productRepository, categoryRepository } from "@/lib/repositories"

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
}

const values = [
  {
    icon: Leaf,
    title: "Thảo dược thiên nhiên",
    description: "Nguyên liệu chiết xuất từ thảo dược Việt, lành tính và an toàn.",
  },
  {
    icon: ShieldCheck,
    title: "Chất lượng tin cậy",
    description: "Kế thừa tinh hoa y học cổ truyền, kiểm soát chất lượng nghiêm ngặt.",
  },
  {
    icon: Sparkles,
    title: "Hiệu quả rõ rệt",
    description: "Chăm sóc sức khỏe và sắc đẹp từ bên trong lẫn bên ngoài.",
  },
]

export default async function HomePage() {
  const categories = await categoryRepository.list()
  const featuredProducts = await productRepository.getFeatured(4)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex h-[560px] items-center justify-center bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/shop">
                Mua ngay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Câu chuyện thương hiệu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Giá trị thương hiệu */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <div key={v.title} className="flex items-start gap-4">
              <div className="rounded-lg bg-neutral-100 p-3">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Danh mục */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Mua theo danh mục</h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/${category.slug}`} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={category.image?.url ?? PLACEHOLDER_IMAGE}
                  alt={category.image?.alt ?? category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-medium group-hover:underline">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Sản phẩm nổi bật</h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="mt-8">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Đăng ký nhận tin
          </h2>
          <p className="mt-4 text-neutral-400">
            Nhận thông tin sản phẩm mới và ưu đãi độc quyền từ Thảo Dược Bà Thông.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
