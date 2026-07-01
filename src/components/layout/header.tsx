"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchModal } from "@/components/search/search-modal"
import { mainLinks, mobileMenuSections } from "@/lib/navigation"
import { siteConfig } from "@/lib/config"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"

export function Header() {
  const t = useTranslations("nav")
  const tCommon = useTranslations("common")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Cmd+K / Ctrl+K để mở tìm kiếm
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:bg-accent hover:text-foreground lg:hidden"
              aria-label={t("openMenu")}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="!w-full !gap-0 sm:!w-80" showCloseButton={false}>
              <div className="shrink-0 px-6 pt-5 pb-2">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  &larr; {tCommon("close")}
                </button>
              </div>

              <nav className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
                {mobileMenuSections.map((section, sectionIdx) => (
                  <div key={section.label}>
                    {sectionIdx > 0 && <div className="my-4 border-t" />}
                    <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {section.label}
                    </p>
                    <div className="ml-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:gap-6">
            {mainLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
              aria-label={t("searchProducts")}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
