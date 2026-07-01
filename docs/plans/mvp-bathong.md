---
title: MVP Website Thảo Dược Bà Thông (Phase 1)
status: Hoàn thành
created_date: 2026-07-01
completed_date: 2026-07-01
owner: ai (Claude) + xuanTruongIT04
related_spec: https://bathong.vn
---

# MVP Bà Thông — Phase 1

## Mục tiêu
Từ template `nextjs-ecommerce-starter` (Next.js 16 + Tailwind 4 + shadcn/ui), dựng nhanh một
bản MVP data-mock, Việt hóa 100%, gắn branding **Thảo Dược Bà Thông** / Giám đốc Uyên Kiều,
build xanh và sẵn sàng deploy Vercel để demo cho Giám đốc.

## Phạm vi đã làm
- **Branding & tiền tệ**: `src/lib/config.ts` (tên, slogan "Thảo dược đến từ Đất Việt", hotline,
  email, owner Uyên Kiều, VND, `taxRate: 0`, ngưỡng freeship 500.000₫).
- **Giá VND**: `formatPrice` bỏ chia /100, `maximumFractionDigits: 0`; `formatDate` → `vi-VN`.
- **i18n**: chỉ tiếng Việt — thêm `messages/vi.json` (dịch toàn bộ), default locale `vi`
  (`src/i18n/config.ts`), xóa `messages/es.json`. Font Inter thêm subset `vietnamese`.
- **Mock data `.ts`**: `src/data/products.ts` — 3 danh mục (Chăm sóc da / Chăm sóc cá nhân / Sức khỏe),
  1 thương hiệu, 10 sản phẩm thật kèm giá VND. 6 importer `products.json` đổi sang `products`.
- **Rút gọn về 5 trang**: `src/lib/navigation.ts` (mainLinks + danh mục); header bỏ cart/wishlist/user
  (giữ tìm kiếm); footer bỏ branding Epic, chỉ link trang MVP; `(store)/layout.tsx` bỏ CartDrawer.
- **Việt hóa nội dung**: Home (hero + giá trị thương hiệu + danh mục + nổi bật + newsletter),
  About (câu chuyện thương hiệu), Contact (form + hotline/email/địa chỉ), Shop, Search,
  category-view, brand-view, product-card, trust-signals, search-modal, recently-viewed, not-found.
- **Trang chi tiết SP**: thay "Thêm vào giỏ" bằng CTA **"Liên hệ đặt hàng"** + nút gọi hotline;
  gỡ cart/wishlist hooks; sửa JSON-LD giá theo VND.
- **Deprecation Next 16**: đổi `src/middleware.ts` → `src/proxy.ts` (hàm `proxy`).

## Định nghĩa Done — ĐÃ ĐẠT
- `npm run build` xanh, `tsc --noEmit` sạch. 14 trang SSG sinh đúng slug tiếng Việt.
- Site chạy tiếng Việt, branding Bà Thông, giá VND, 5 trang gọn gàng.

## Deploy Vercel
1. Push code lên GitHub (đã có repo).
2. Vercel → New Project → import repo (tự nhận Next.js, không cần config).
3. (Tùy chọn) Env `NEXT_PUBLIC_BASE_URL` = domain thật để SEO/canonical đúng.
4. Deploy → lấy link demo gửi Giám đốc.

## Ghi chú cho Phase 2
- Các route cart/checkout/auth/account/admin/wishlist/blog/brands/policies/faq **vẫn còn code**,
  chỉ ẩn khỏi điều hướng. Phase 2 nối lại link + Việt hóa nốt (các trang này còn tiếng Anh).
- Đặt hàng → gửi email: dùng Next.js Route Handler (`app/api/...`). Thanh toán QR: VietQR.
- `CheckoutProvider` (`src/lib/checkout/`) đã có interface sẵn để cắm cổng thanh toán.
