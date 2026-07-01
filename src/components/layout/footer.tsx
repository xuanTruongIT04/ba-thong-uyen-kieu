import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/config"
import { shopLinks } from "@/lib/navigation"

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const companyLinks = [
  { name: "Giới thiệu", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Sản phẩm */}
          <div>
            <h3 className="text-sm font-semibold">Sản phẩm</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Tất cả sản phẩm
                </Link>
              </li>
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thương hiệu */}
          <div>
            <h3 className="text-sm font-semibold">Thương hiệu</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {siteConfig.contact.phone && (
                <li className="text-sm text-muted-foreground">
                  Hotline: {siteConfig.contact.phone}
                </li>
              )}
              {siteConfig.contact.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Bảo lưu mọi quyền.
          </p>
          {siteConfig.social.facebook && (
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <IconFacebook className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
