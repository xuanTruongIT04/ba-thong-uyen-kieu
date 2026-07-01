export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  label: string
  items: NavItem[]
}

// Nguồn dữ liệu duy nhất cho toàn bộ điều hướng (header desktop, menu mobile, footer).
// Phase 1 (MVP) chỉ giữ 5 trang chính.

export const mainLinks: NavItem[] = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/shop" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Liên hệ", href: "/contact" },
]

export const shopLinks: NavItem[] = [
  { name: "Chăm sóc da", href: "/cham-soc-da" },
  { name: "Chăm sóc cá nhân", href: "/cham-soc-ca-nhan" },
  { name: "Sức khỏe", href: "/suc-khoe" },
]

export const mobileMenuSections: NavSection[] = [
  { label: "Menu", items: mainLinks },
  { label: "Danh mục", items: shopLinks },
]
