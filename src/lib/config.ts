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

  // Chủ sở hữu — quote/bio dùng cho khối "chữ ký" trên trang chủ/Giới thiệu/footer
  owner: {
    name: "Uyên Kiều",
    title: "Giám đốc",
    quote:
      "Tôi tin mỗi người phụ nữ Việt đều xứng đáng được chăm sóc bằng những gì tự nhiên và an toàn nhất — đó là lý do Bà Thông ra đời.",
    bio: "Với tâm huyết gìn giữ và phát triển tinh hoa y học cổ truyền, Giám đốc Uyên Kiều trực tiếp đồng hành cùng đội ngũ Bà Thông trong từng công đoạn, từ chọn lọc dược liệu đến hoàn thiện sản phẩm.",
    // Ảnh chân dung thật — cập nhật khi có. Để trống thì site hiển thị avatar chữ cái đầu.
    photo: "/images/user/anh-giam-doc.jpg",
  },

  // Thanh thông báo trên cùng (để "" nếu muốn ẩn)
  announcement: "Miễn phí giao hàng cho đơn từ 500.000₫ — Đặt hàng ngay!",

  // URL
  url: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",

  // Liên hệ
  contact: {
    email: "lienhe@bathong.vn",
    phone: "0978 019 296",
    zalo: "0978019296",
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
