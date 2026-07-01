// ============================================================================
// Dữ liệu mock (Phase 1 — MVP). Giá lưu trực tiếp bằng VND.
// Sản phẩm lấy đúng tên + giá từ bathong.vn (trang chủ + /san-pham) để demo
// sát thực tế. Đây là nguồn dữ liệu tạm cho tới khi kết nối API/DB thật ở Phase 3.
// Giữ đúng shape { categories, products, brands } để repositories dùng lại.
// ============================================================================
import type { Brand, Category, Product } from "@/types"

// Ảnh sản phẩm thật, tải về từ bathong.vn, đặt tên theo đúng slug sản phẩm.
function img(slug: string, alt: string, ext: "jpg" | "png" = "jpg") {
  return [{ url: `/images/products/${slug}.${ext}`, alt, width: 400, height: 400 }]
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Chăm sóc da",
    slug: "cham-soc-da",
    description:
      "Kem chống nắng, serum, nước rửa mặt, toner và kem dưỡng chiết xuất thảo dược thiên nhiên — lành tính cho mọi loại da.",
    image: { url: "/images/products/kem-chong-nang-tan-duong-thao.jpg", alt: "Chăm sóc da" },
    order: 1,
  },
  {
    id: "cat-2",
    name: "Chăm sóc cá nhân",
    slug: "cham-soc-ca-nhan",
    description:
      "Sữa tắm, cao gội, cao xả, tinh dầu và dung dịch vệ sinh từ thảo mộc — dịu nhẹ, an toàn cho sức khỏe.",
    image: { url: "/images/products/cao-goi-thao-duoc-thu-thong-an.jpg", alt: "Chăm sóc cá nhân" },
    order: 2,
  },
  {
    id: "cat-3",
    name: "Sức khỏe",
    slug: "suc-khoe",
    description:
      "Men vi sinh, kem thảo dược hỗ trợ sức khỏe từ bên trong, kế thừa tinh hoa y học cổ truyền.",
    image: { url: "/images/products/men-vi-sinh-duong-phuc-nhan.jpg", alt: "Sức khỏe" },
    order: 3,
  },
  {
    id: "cat-4",
    name: "Mỹ phẩm",
    slug: "my-pham",
    description:
      "Bộ sản phẩm đặc trị chuyên sâu từ thảo dược — xoá nám, dưỡng trắng và tái tạo làn da rạng rỡ, đều màu.",
    image: { url: "/images/products/tan-ngoc-nhan.jpg", alt: "Mỹ phẩm" },
    order: 4,
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
  imageExt?: "jpg" | "png"
}): Product {
  const now = "2025-06-01T00:00:00Z"
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    body: p.body,
    images: img(p.slug, p.name, p.imageExt),
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

// 18 sản phẩm thật, lấy tên + giá từ bathong.vn (trang chủ + /san-pham).
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
    name: "Nước Rửa Mặt Bà Thông",
    slug: "nuoc-rua-mat-ba-thong",
    description:
      "Sữa rửa mặt thảo mộc làm sạch sâu, lấy đi bụi bẩn và dầu thừa mà vẫn giữ độ ẩm tự nhiên cho da.",
    body: "<h2>Làm sạch dịu nhẹ mỗi ngày</h2><p>Nước Rửa Mặt Bà Thông giúp làm sạch sâu lỗ chân lông, loại bỏ bã nhờn mà không làm khô căng da.</p>",
    price: 270000,
    categoryIds: ["cat-1"],
    tags: ["rửa mặt", "chăm sóc da", "làm sạch"],
    rating: 4.7,
    reviewCount: 98,
    imageExt: "png",
    featured: true,
  }),
  product({
    id: "prod-3",
    name: "Diện Hồng Nhan",
    slug: "dien-hong-nhan",
    description:
      "Sản phẩm dưỡng da cao cấp, tinh chất cô đọng giúp làm sáng, mờ thâm và tái tạo làn da rạng rỡ từ thảo dược quý.",
    body: "<h2>Tinh hoa dưỡng da cao cấp</h2><p>Diện Hồng Nhan cô đọng dưỡng chất từ thảo dược quý, hỗ trợ làm sáng da, mờ thâm nám và nuôi dưỡng làn da khỏe đẹp từ bên trong.</p>",
    price: 2990000,
    categoryIds: ["cat-1"],
    tags: ["cao cấp", "dưỡng sáng", "thảo dược"],
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
    name: "Nước Hoa Hồng Mộc Thông An",
    slug: "nuoc-hoa-hong-moc-thong-an",
    description:
      "Nước hoa hồng thảo dược giúp cân bằng độ pH, se khít lỗ chân lông và cấp ẩm tức thì cho da.",
    price: 330000,
    categoryIds: ["cat-1"],
    tags: ["toner", "cân bằng", "chăm sóc da"],
    rating: 4.6,
    reviewCount: 73,
    featured: true,
  }),
  product({
    id: "prod-6",
    name: "Dưỡng Da DN",
    slug: "duong-da-dn",
    description:
      "Kem dưỡng giàu dưỡng chất thảo mộc, hỗ trợ làm sáng và mềm mịn làn da mỗi ngày.",
    price: 490000,
    categoryIds: ["cat-1"],
    tags: ["kem dưỡng", "chăm sóc da"],
    rating: 4.7,
    reviewCount: 89,
  }),
  product({
    id: "prod-7",
    name: "Gel Vệ Sinh Bà Thông",
    slug: "gel-ve-sinh-ba-thong",
    description:
      "Gel vệ sinh dịu nhẹ từ thảo mộc, giúp cân bằng và bảo vệ vùng nhạy cảm.",
    price: 195000,
    categoryIds: ["cat-2"],
    tags: ["vệ sinh", "thảo mộc", "chăm sóc cá nhân"],
    rating: 4.6,
    reviewCount: 110,
  }),
  product({
    id: "prod-8",
    name: "Cao Gội Thảo Dược Thủ Thông An",
    slug: "cao-goi-thao-duoc-thu-thong-an",
    description:
      "Cao gội thảo dược truyền thống giúp tóc chắc khỏe, giảm gãy rụng và giữ hương thảo mộc dịu nhẹ.",
    price: 499000,
    categoryIds: ["cat-2"],
    tags: ["cao gội", "chăm sóc tóc", "thảo dược"],
    rating: 4.8,
    reviewCount: 134,
  }),
  product({
    id: "prod-9",
    name: "Cao Xả Thảo Dược Thủ Thông An",
    slug: "cao-xa-thao-duoc-thu-thong-an",
    description:
      "Cao xả thảo dược nuôi dưỡng tóc mềm mượt, phục hồi hư tổn, đi kèm bộ Cao Gội Thủ Thông An.",
    price: 499000,
    categoryIds: ["cat-2"],
    tags: ["cao xả", "chăm sóc tóc", "thảo dược"],
    rating: 4.7,
    reviewCount: 92,
  }),
  product({
    id: "prod-10",
    name: "Tinh Dầu Thảo Dược Thủ Thông An",
    slug: "tinh-dau-thao-duoc-thu-thong-an",
    description:
      "Tinh dầu thảo dược kích thích mọc tóc, giảm rụng và nuôi dưỡng mái tóc chắc khỏe, óng mượt.",
    price: 699000,
    categoryIds: ["cat-2"],
    tags: ["tinh dầu", "chăm sóc tóc", "thảo dược"],
    rating: 4.8,
    reviewCount: 145,
  }),
  product({
    id: "prod-11",
    name: "Sữa Tắm Tuyết Ý Hương",
    slug: "sua-tam-tuyet-y-huong",
    description:
      "Sữa tắm thảo dược hương thơm dịu nhẹ, làm sạch và dưỡng ẩm da toàn thân.",
    price: 790000,
    categoryIds: ["cat-2"],
    tags: ["sữa tắm", "chăm sóc cá nhân"],
    rating: 4.7,
    reviewCount: 68,
  }),
  product({
    id: "prod-12",
    name: "Kem Dưỡng Thể Tuyết Ý Hương",
    slug: "kem-duong-the-tuyet-y-huong",
    description:
      "Kem dưỡng thể chiết xuất thảo dược, cấp ẩm sâu, giúp da mềm mịn và thơm hương dịu nhẹ suốt ngày dài.",
    price: 790000,
    categoryIds: ["cat-1"],
    tags: ["kem dưỡng thể", "chăm sóc da"],
    rating: 4.7,
    reviewCount: 71,
  }),
  product({
    id: "prod-13",
    name: "Kem Thảo Dược Thông Tâm Mạch",
    slug: "kem-thao-duoc-thong-tam-mach",
    description:
      "Kem thảo dược hỗ trợ lưu thông khí huyết, dùng xoa bóp thư giãn, kế thừa bài thuốc y học cổ truyền.",
    price: 499000,
    categoryIds: ["cat-3"],
    tags: ["thảo dược", "sức khỏe", "khí huyết"],
    rating: 4.6,
    reviewCount: 57,
  }),
  product({
    id: "prod-14",
    name: "Tinh Chất CL",
    slug: "tinh-chat-cl",
    description:
      "Tinh chất chăm sóc da cô đặc, hỗ trợ phục hồi và cải thiện kết cấu da rõ rệt sau thời gian ngắn.",
    price: 990000,
    categoryIds: ["cat-1"],
    tags: ["tinh chất", "chăm sóc da"],
    rating: 4.7,
    reviewCount: 49,
  }),
  product({
    id: "prod-15",
    name: "Kem CL",
    slug: "kem-cl",
    description:
      "Kem chăm sóc da chuyên sâu, đi kèm Tinh Chất CL, giúp nuôi dưỡng và bảo vệ hàng rào da.",
    price: 990000,
    categoryIds: ["cat-1"],
    tags: ["kem dưỡng", "chăm sóc da"],
    rating: 4.7,
    reviewCount: 44,
  }),
  product({
    id: "prod-16",
    name: "Dưỡng Ngọc Nhan",
    slug: "duong-ngoc-nhan",
    description:
      "Dòng sản phẩm dưỡng da cao cấp nhất của Bà Thông, tinh chế từ dược liệu quý, dành cho làn da cần phục hồi chuyên sâu.",
    body: "<h2>Đỉnh cao dưỡng da thảo dược</h2><p>Dưỡng Ngọc Nhan là dòng sản phẩm cao cấp, chắt lọc tinh hoa dược liệu quý hiếm, dành cho những ai mong muốn làn da được chăm sóc chuyên sâu và toàn diện nhất.</p>",
    price: 6990000,
    categoryIds: ["cat-1"],
    tags: ["cao cấp", "dưỡng da", "thảo dược quý"],
    rating: 4.9,
    reviewCount: 21,
    imageExt: "png",
  }),
  product({
    id: "prod-17",
    name: "Dưỡng Phục VIP",
    slug: "duong-phuc-vip",
    description:
      "Sản phẩm dưỡng da cao cấp, hỗ trợ phục hồi và tái tạo làn da chuyên sâu dành riêng cho khách hàng VIP.",
    price: 2900000,
    categoryIds: ["cat-1"],
    tags: ["cao cấp", "phục hồi da"],
    rating: 4.8,
    reviewCount: 33,
  }),
  product({
    id: "prod-18",
    name: "Skin Care Acnes Serum Pro (10ml)",
    slug: "skin-care-acnes-serum-pro",
    description:
      "Serum đặc trị mụn, hỗ trợ giảm viêm, làm dịu da mụn và ngăn ngừa thâm sẹo sau mụn.",
    price: 540000,
    categoryIds: ["cat-1"],
    tags: ["serum", "trị mụn", "chăm sóc da"],
    rating: 4.6,
    reviewCount: 87,
  }),
  product({
    id: "prod-19",
    name: "Tán Ngọc Nhan",
    slug: "tan-ngoc-nhan",
    description:
      "Bảo bối cho làn da không nám sạm — bộ đặc trị Tán Ngọc Nhan giúp xoá nám, sáng da, đều màu và tái tạo làn da rạng rỡ từ tinh chất thảo dược quý.",
    body: "<h2>Bảo bối cho làn da không nám sạm</h2><p>Bộ sản phẩm Tán Ngọc Nhan là giải pháp đặc trị chuyên sâu, hỗ trợ xoá nám, làm sáng và đều màu da từ tinh chất thảo dược quý. Kiên trì sử dụng giúp làn da phục hồi rạng rỡ, mịn màng từ bên trong.</p><ul><li>Hỗ trợ làm mờ nám, tàn nhang, đốm sạm</li><li>Dưỡng trắng, đều màu da tự nhiên</li><li>Chiết xuất thảo dược lành tính, phù hợp mọi loại da</li></ul>",
    price: 3490000,
    categoryIds: ["cat-4"],
    tags: ["mỹ phẩm", "xoá nám", "dưỡng trắng", "thảo dược"],
    rating: 4.9,
    reviewCount: 58,
    featured: true,
  }),
]

const data = { categories, products, brands }
export default data
