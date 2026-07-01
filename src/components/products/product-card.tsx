import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/products/star-rating"
import { formatPrice } from "@/lib/utils"
import { PLACEHOLDER_IMAGE } from "@/lib/constants"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const defaultVariant = product.variants[0]
  if (!defaultVariant) return null

  const price = defaultVariant.price
  const compareAtPrice = defaultVariant.compareAtPrice
  const isOnSale = compareAtPrice && compareAtPrice > price
  const image = product.images[0]

  return (
    <Link href={`/${product.slug}`} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={image?.url ?? PLACEHOLDER_IMAGE}
          alt={image?.alt ?? product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {isOnSale && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-card text-xs"
          >
            Giảm giá
          </Badge>
        )}
      </div>
      <div className="mt-3">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        <h3 className="mt-1 text-sm font-medium text-foreground group-hover:underline">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium">
            {formatPrice(price, defaultVariant.currency)}
          </span>
          {isOnSale && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(compareAtPrice, defaultVariant.currency)}
            </span>
          )}
        </div>
        {product.variants.length > 1 && (
          <p className="mt-1 text-xs text-muted-foreground">
            {product.variants.length} tùy chọn
          </p>
        )}
      </div>
    </Link>
  )
}
