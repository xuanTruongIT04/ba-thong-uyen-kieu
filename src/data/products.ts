// ============================================================================
// Dữ liệu mock (Phase 1 — MVP). Giá lưu trực tiếp bằng VND.
// Đây là nguồn dữ liệu tạm cho tới khi kết nối API/DB thật ở Phase 3.
// Giữ đúng shape { categories, products, brands } để repositories dùng lại.
// ============================================================================
import type { Brand, Category, Product } from "@/types"

const PLACEHOLDER = "/images/products/placeholder.svg"

function img(alt: string) {
  return [{ url: PLACEHOLDER, alt, width: 800, height: 800 }]
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Chăm sóc da",
    slug: "cham-soc-da",
    description:
      "Kem chống nắng, serum, nước rửa mặt, toner và kem dưỡng chiết xuất thảo dược thiên nhiên — lành tính cho mọi loại da.",
    image: { url: PLACEHOLDER, alt: "Chăm sóc da" },
    order: 1,
  },
  {
    id: "cat-2",
    name: "Chăm sóc cá nhân",
    slug: "cham-soc-ca-nhan",
    description:
      "Dầu gội, tinh dầu dưỡng tóc và dung dịch vệ sinh từ thảo mộc — dịu nhẹ, an toàn cho sức khỏe.",
    image: { url: PLACEHOLDER, alt: "Chăm sóc cá nhân" },
    order: 2,
  },
  {
    id: "cat-3",
    name: "Sức khỏe",
    slug: "suc-khoe",
    description:
      "Men vi sinh, viên uống bổ sung hỗ trợ tiêu hóa, đẹp da và tăng cường sức khỏe từ bên trong.",
    image: { url: PLACEHOLDER, alt: "Sức khỏe" },
    order: 3,
  },
]

export const brands: Brand[] = [
  {
    id: "brand-1",
    name: "Thảo Dược Bà Thông",
    slug: "ba-thong",
    description:
      "Thương hiệu chăm sóc sức khỏe và sắc đẹp từ thảo dược thiên nhiên Việt Nam, kế thừa tinh hoa y học cổ truyền.",
  },
]

// Helper tạo product gọn để giảm lặp code.
function product(p: {
  id: string
  name: string
  slug: string
  description: string
  body?: string
  price: number
  compareAtPrice?: number
  categoryIds: string[]
  tags: string[]
  rating: number
  reviewCount: number
  featured?: boolean
  quantity?: number
}): Product {
  const now = "2025-06-01T00:00:00Z"
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    body: p.body,
    images: img(p.name),
    status: "active",
    brandId: "brand-1",
    categoryIds: p.categoryIds,
    tags: p.tags,
    rating: p.rating,
    reviewCount: p.reviewCount,
    featured: p.featured ?? false,
    createdAt: now,
    updatedAt: now,
    variants: [
      {
        id: `${p.id}-v1`,
        productId: p.id,
        sku: p.id.toUpperCase(),
        name: "Mặc định",
        price: p.price,
        compareAtPrice: p.compareAtPrice,
        currency: "VND",
        inventory: {
          quantity: p.quantity ?? 100,
          trackInventory: true,
          allowBackorder: false,
        },
        options: [],
        images: [],
      },
    ],
  }
}

export const products: Product[] = [
  product({
    id: "prod-1",
    name: "Kem Chống Nắng Tán Dương Thảo",
    slug: "kem-chong-nang-tan-duong-thao",
    description:
      "Kem chống nắng chiết xuất thảo dược, bảo vệ da khỏi tia UV, không gây bết dính, nâng tông tự nhiên.",
    body: "<h2>Bảo vệ da từ thiên nhiên</h2><p>Kem chống nắng Tán Dương Thảo với chiết xuất thảo dược giúp bảo vệ da trước tác hại của tia UV, đồng thời dưỡng ẩm và làm dịu da.</p><ul><li>Kết cấu mỏng nhẹ, thấm nhanh</li><li>Không gây bí da, phù hợp da nhạy cảm</li><li>Chiết xuất thảo mộc lành tính</li></ul>",
    price: 390000,
    categoryIds: ["cat-1"],
    tags: ["chống nắng", "chăm sóc da", "thảo dược"],
    rating: 4.8,
    reviewCount: 126,
    featured: true,
  }),
  product({
    id: "prod-2",
    name: "Nước Rửa Mặt Thảo Mộc",
    slug: "nuoc-rua-mat-thao-moc",
    description:
      "Làm sạch sâu, lấy đi bụi bẩn và dầu thừa mà vẫn giữ độ ẩm tự nhiên cho da nhờ chiết xuất thảo mộc.",
    body: "<h2>Làm sạch dịu nhẹ mỗi ngày</h2><p>Nước rửa mặt thảo mộc giúp làm sạch sâu lỗ chân lông, loại bỏ bã nhờn mà không làm khô căng da.</p>",
    price: 270000,
    categoryIds: ["cat-1"],
    tags: ["rửa mặt", "chăm sóc da", "làm sạch"],
    rating: 4.7,
    reviewCount: 98,
    featured: true,
  }),
  product({
    id: "prod-3",
    name: "Serum Diện Hồng Nhan",
    slug: "serum-dien-hong-nhan",
    description:
      "Tinh chất dưỡng cao cấp giúp làm sáng, mờ thâm và tái tạo làn da rạng rỡ từ tinh hoa thảo dược.",
    body: "<h2>Tinh hoa dưỡng da cao cấp</h2><p>Serum Diện Hồng Nhan cô đọng dưỡng chất từ thảo dược quý, hỗ trợ làm sáng da, mờ thâm nám và nuôi dưỡng làn da khỏe đẹp từ bên trong.</p>",
    price: 2990000,
    compareAtPrice: 3490000,
    categoryIds: ["cat-1"],
    tags: ["serum", "cao cấp", "dưỡng sáng"],
    rating: 4.9,
    reviewCount: 64,
    featured: true,
  }),
  product({
    id: "prod-4",
    name: "Men Vi Sinh Dưỡng Phục Nhan",
    slug: "men-vi-sinh-duong-phuc-nhan",
    description:
      "Men vi sinh hỗ trợ cân bằng hệ tiêu hóa, tăng cường hấp thu và nuôi dưỡng làn da khỏe đẹp từ bên trong.",
    body: "<h2>Đẹp da từ hệ tiêu hóa khỏe mạnh</h2><p>Men vi sinh Dưỡng Phục Nhan bổ sung lợi khuẩn, hỗ trợ cân bằng hệ vi sinh đường ruột, cải thiện tiêu hóa và làn da.</p>",
    price: 1290000,
    categoryIds: ["cat-3"],
    tags: ["men vi sinh", "sức khỏe", "tiêu hóa"],
    rating: 4.8,
    reviewCount: 152,
    featured: true,
  }),
  product({
    id: "prod-5",
    name: "Toner Cân Bằng Thảo Dược",
    slug: "toner-can-bang-thao-duoc",
    description:
      "Nước hoa hồng thảo dược giúp cân bằng độ pH, se khít lỗ chân lông và cấp ẩm tức thì cho da.",
    price: 250000,
    categoryIds: ["cat-1"],
    tags: ["toner", "cân bằng", "chăm sóc da"],
    rating: 4.6,
    reviewCount: 73,
  }),
  product({
    id: "prod-6",
    name: "Kem Dưỡng Trắng Ngọc Dung",
    slug: "kem-duong-trang-ngoc-dung",
    description:
      "Kem dưỡng giàu dưỡng chất thảo mộc, hỗ trợ làm sáng và mềm mịn làn da mỗi ngày.",
    price: 520000,
    categoryIds: ["cat-1"],
    tags: ["kem dưỡng", "dưỡng trắng", "chăm sóc da"],
    rating: 4.7,
    reviewCount: 89,
  }),
  product({
    id: "prod-7",
    name: "Dung Dịch Vệ Sinh Phụ Nữ Thảo Mộc",
    slug: "dung-dich-ve-sinh-thao-moc",
    description:
      "Dung dịch vệ sinh dịu nhẹ từ thảo mộc, giúp cân bằng và bảo vệ vùng nhạy cảm.",
    price: 180000,
    categoryIds: ["cat-2"],
    tags: ["vệ sinh", "thảo mộc", "chăm sóc cá nhân"],
    rating: 4.6,
    reviewCount: 110,
  }),
  product({
    id: "prod-8",
    name: "Dầu Gội Thảo Dược Bồ Kết",
    slug: "dau-goi-thao-duoc-bo-ket",
    description:
      "Dầu gội bồ kết truyền thống giúp tóc chắc khỏe, giảm gãy rụng và giữ hương thảo mộc dịu nhẹ.",
    price: 220000,
    categoryIds: ["cat-2"],
    tags: ["dầu gội", "bồ kết", "chăm sóc tóc"],
    rating: 4.8,
    reviewCount: 134,
  }),
  product({
    id: "prod-9",
    name: "Viên Uống Đẹp Da Collagen Thảo Mộc",
    slug: "vien-uong-collagen-thao-moc",
    description:
      "Viên uống bổ sung collagen kết hợp thảo mộc, hỗ trợ da căng mịn và tươi trẻ từ bên trong.",
    price: 650000,
    categoryIds: ["cat-3"],
    tags: ["viên uống", "collagen", "sức khỏe"],
    rating: 4.7,
    reviewCount: 76,
  }),
  product({
    id: "prod-10",
    name: "Tinh Dầu Dưỡng Tóc Bưởi",
    slug: "tinh-dau-duong-toc-buoi",
    description:
      "Tinh dầu bưởi kích thích mọc tóc, giảm rụng và nuôi dưỡng mái tóc chắc khỏe, óng mượt.",
    price: 190000,
    categoryIds: ["cat-2"],
    tags: ["tinh dầu", "bưởi", "chăm sóc tóc"],
    rating: 4.8,
    reviewCount: 145,
  }),
]

const data = { categories, products, brands }
export default data
