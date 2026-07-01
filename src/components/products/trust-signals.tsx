import { Truck, RotateCcw, Shield } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { siteConfig } from "@/lib/config"

export function TrustSignals() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Truck className="h-4 w-4" />
        <span>Miễn phí giao hàng cho đơn từ {formatPrice(siteConfig.freeShippingThreshold)}</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <RotateCcw className="h-4 w-4" />
        <span>Đổi trả trong 30 ngày</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Shield className="h-4 w-4" />
        <span>Cam kết hàng chính hãng</span>
      </div>
    </div>
  )
}
