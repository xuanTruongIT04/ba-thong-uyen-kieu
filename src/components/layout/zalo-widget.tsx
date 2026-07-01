"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

const ZALO_BRAND = "#0068FF"

function buildZaloUrl(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  return `https://zalo.me/${digits}`
}

export function ZaloWidget() {
  const { contact, owner } = siteConfig
  const zaloPhone = contact.zalo || contact.phone
  if (!zaloPhone) return null

  const href = buildZaloUrl(zaloPhone)

  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [tooltipDismissed, setTooltipDismissed] = useState(false)

  useEffect(() => {
    const openTimer = window.setTimeout(() => setTooltipOpen(true), 1500)
    const closeTimer = window.setTimeout(() => setTooltipOpen(false), 6500)
    return () => {
      window.clearTimeout(openTimer)
      window.clearTimeout(closeTimer)
    }
  }, [])

  function dismissTooltip(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setTooltipOpen(false)
    setTooltipDismissed(true)
  }

  const showTooltip = tooltipOpen && !tooltipDismissed

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {/* Tooltip bong bóng chat */}
      <div
        className={cn(
          "relative max-w-[240px] rounded-2xl rounded-br-sm bg-card px-4 py-3 shadow-xl ring-1 ring-border transition-all duration-300",
          showTooltip
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
        role="status"
        aria-hidden={!showTooltip}
      >
        <button
          onClick={dismissTooltip}
          className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground shadow-sm ring-1 ring-border transition-colors hover:bg-foreground hover:text-background"
          aria-label="Đóng thông báo"
        >
          <X className="h-3 w-3" />
        </button>
        <p className="text-sm font-semibold text-foreground">
          Chat Zalo với {owner.title} {owner.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Tư vấn miễn phí — phản hồi nhanh
        </p>
        <span
          className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-card ring-1 ring-border"
          aria-hidden="true"
        />
      </div>

      {/* Nút Zalo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipOpen(true)}
        onFocus={() => setTooltipOpen(true)}
        onClick={() => setTooltipOpen(false)}
        aria-label={`Chat Zalo với ${owner.title} ${owner.name}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg outline-none ring-offset-2 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ backgroundColor: ZALO_BRAND }}
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 -z-0 animate-ping rounded-full opacity-60 motion-reduce:hidden"
          style={{ backgroundColor: ZALO_BRAND, animationDuration: "2s" }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 -z-0 rounded-full"
          style={{ backgroundColor: ZALO_BRAND }}
          aria-hidden="true"
        />

        {/* Logo Zalo (chữ "Zalo" cách điệu) */}
        <svg
          viewBox="0 0 48 48"
          className="relative z-10 h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.5 18.2h3.1v11.6h-3.1V18.2zm9.7-.3c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 9.3c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm7.8-9h3v11.6h-3V18.2zm6.7 0h3v11.6h-3V18.2zM24 4C12.9 4 4 12.9 4 24c0 3.9 1.1 7.5 3 10.5L4.6 42c-.2.5.3 1 .8.8l7.5-2.4c3 1.9 6.6 3 10.5 3 11.1 0 20-8.9 20-20S35.1 4 24 4z" />
        </svg>

        {/* Screen-reader text */}
        <span className="sr-only">
          Chat Zalo với {owner.title} {owner.name} — {zaloPhone}
        </span>
      </a>
    </div>
  )
}
