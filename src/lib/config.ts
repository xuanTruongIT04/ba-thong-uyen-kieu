// ============================================================================
// Cấu hình cửa hàng — nguồn dữ liệu duy nhất cho toàn bộ thiết lập site.
// Sửa file này để đổi tên thương hiệu, thông tin liên hệ, mạng xã hội, v.v.
// ============================================================================

export const siteConfig = {
  // Thương hiệu
  name: "Thảo Dược Bà Thông",
  tagline: "Thảo dược đến từ Đất Việt",
  description:
    "Thảo Dược Bà Thông — thương hiệu chăm sóc sức khỏe và sắc đẹp từ thảo dược thiên nhiên Việt Nam. Sản phẩm an toàn, lành tính, kế thừa tinh hoa y học cổ truyền.",

  // Chủ sở hữu
  owner: {
    name: "Uyên Kiều",
    title: "Giám đốc",
  },

  // Thanh thông báo trên cùng (để "" nếu muốn ẩn)
  announcement: "Miễn phí giao hàng cho đơn từ 500.000₫ — Đặt hàng ngay!",

  // URL
  url: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",

  // Liên hệ
  contact: {
    email: "lienhe@bathong.vn",
    phone: "1900 1234",
    zalo: "0900000000",
    address: {
      street: "",
      suite: "",
      city: "TP. Hồ Chí Minh",
      state: "",
      zip: "",
    },
  },

  // Mạng xã hội (để "" nếu muốn ẩn)
  social: {
    facebook: "https://facebook.com/thaoduocbathong",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "",
  },

  // Giao hàng
  freeShippingThreshold: 500000, // VND
  taxRate: 0,

  // Tiền tệ & ngôn ngữ
  currency: "VND",
  locale: "vi-VN",

  // Pháp lý
  copyrightYear: new Date().getFullYear(),
} as const

export type SiteConfig = typeof siteConfig
