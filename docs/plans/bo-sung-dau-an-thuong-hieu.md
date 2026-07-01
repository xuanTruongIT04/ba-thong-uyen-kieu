---
title: Bổ sung dấu ấn Giám đốc & cảm xúc thương hiệu (Phase 1.5)
status: Hoàn thành
created_date: 2026-07-01
completed_date: 2026-07-01
owner: ai (Claude) + xuanTruongIT04
related_spec: docs/plans/mvp-bathong.md
---

# Bổ sung dấu ấn thương hiệu — Phase 1.5

## Mục tiêu
Sau khi MVP Phase 1 xong, bổ sung "chữ ký" của Giám đốc Uyên Kiều và làm site truyền cảm
hứng/thân thiện hơn, dựa trên danh sách đã thống nhất với user. Vẫn trong phạm vi data-mock,
không đổi kiến trúc.

## Nguyên tắc khi triển khai
- **Không bịa số liệu/pháp lý/chứng nhận** (MST, giấy phép KD, "đã được Bộ Y Tế công bố"...) —
  sai thì rủi ro pháp lý thật cho doanh nghiệp thật. Mục nào cần dữ liệu thật → để trống có ghi
  chú, hoặc hỏi user trước khi viết.
- **Không tạo review/testimonial giả gán tên khách hàng cụ thể** — dễ bị xem là quảng cáo sai
  sự thật. Chỉ dùng nếu có nguồn thật, hoặc thay bằng hình thức khác (xem mục C).
- Nội dung mô tả chung (câu chuyện thương hiệu, giá trị, nguyên liệu...) → viết được ngay vì
  không phải tuyên bố sự thật cụ thể có thể sai.

---

## A. Chữ ký / dấu ấn Giám đốc Uyên Kiều — làm ngay được

| # | Việc làm | File chính | Ghi chú |
|---|----------|-----------|---------|
| A1 | Thêm field `owner.photo`, `owner.quote`, `owner.bio` vào `siteConfig` | `src/lib/config.ts` | `photo` trỏ ảnh, tạm dùng placeholder tới khi có ảnh thật |
| A2 | Thêm font chữ ký/viết tay (Google Font, vd `Dancing Script`) qua `next/font/google` | `src/app/layout.tsx`, `globals.css` | Chỉ dùng cho tên/chữ ký, không đổi font toàn site |
| A3 | Component `DirectorSignature` — ảnh (khung tròn/placeholder), trích dẫn cá nhân, tên viết bằng font chữ ký, chức danh | `src/components/layout/director-signature.tsx` (mới) | |
| A4 | Gắn `DirectorSignature` vào **trang chủ** (sau "Sản phẩm nổi bật") | `src/app/(store)/page.tsx` | |
| A5 | Viết lại mục "Thông điệp từ Giám đốc" ở **About** thành khối đầy đủ (ảnh + trích dẫn + chữ ký), thay đoạn văn hiện tại | `src/app/(store)/about/page.tsx` | |
| A6 | Thêm dòng chữ ký nhỏ ở **Footer**: "Sáng lập & điều hành bởi Giám đốc Uyên Kiều" + chữ ký cách điệu | `src/components/layout/footer.tsx` | |

→ Cần bạn: **ảnh chân dung Giám đốc** (nếu có) — nếu chưa có, tôi dùng khung avatar chữ cái đầu
tạm thời, thay ảnh sau cũng dễ.

## B. Cảm xúc / storytelling — làm ngay được (nội dung chung, không bịa số liệu)

| # | Việc làm | File chính |
|---|----------|-----------|
| B1 | Viết lại About: mở rộng câu chuyện thương hiệu, thêm mục "Nguồn gốc dược liệu" | `src/app/(store)/about/page.tsx` |
| B2 | Thêm ảnh hero ở trang chủ (dùng ảnh sản phẩm nổi bật đã có, hoặc ảnh Giám đốc nếu được cung cấp) thay vì chỉ có chữ | `src/app/(store)/page.tsx` |
| B3 | Viết lại giọng văn CTA — thêm câu dẫn cảm xúc trước nút "Mua ngay" / "Liên hệ đặt hàng" | `page.tsx`, `[slug]/product-detail-view.tsx` |
| B4 | Thêm mục "Quy trình chăm chút sản phẩm" (mô tả chung, không tuyên bố chứng nhận cụ thể) | `about/page.tsx` |

## C. Bằng chứng xã hội — **cần quyết định trước khi làm**

| # | Việc làm | Vấn đề |
|---|----------|--------|
| C1 | Mục "Khách hàng nói gì" (testimonials) | Nếu bịa tên+lời khách hàng → rủi ro sai sự thật. 3 lựa chọn: (a) dùng review thật nếu bạn có nguồn (Facebook/Zalo bathong.vn), (b) để khối trống có placeholder "Đánh giá sẽ cập nhật khi có khách hàng thực", (c) bỏ mục này ở Phase 1 |
| C2 | Số liệu "X khách hàng tin dùng", "X năm phát triển" | Cần số thật từ bạn, nếu không có tôi sẽ **không** tự đặt số |

## D. Tin cậy / uy tín — **cần dữ liệu thật hoặc quyết định scope**

| # | Việc làm | Vấn đề |
|---|----------|--------|
| D1 | Thông tin pháp lý ở footer (MST, giấy phép KD, địa chỉ đầy đủ) | Cần bạn cung cấp số thật; nếu chưa có, tôi để trống (không bịa số) |
| D2 | Huy hiệu chứng nhận (công bố Bộ Y Tế, GMP...) | Chỉ hiển thị nếu **có thật**; nếu không tôi dùng huy hiệu chung chung ("Cam kết chất lượng") thay vì tuyên bố chứng nhận cụ thể |
| D3 | Bật lại trang FAQ vào menu | Phase 1 đang giới hạn **5 trang chính** (quy tắc trong CLAUDE.md) — bật FAQ nghĩa là lên 6 trang, cần bạn xác nhận có muốn mở rộng scope không, hay nhúng gọn FAQ vào trang Liên hệ thay vì trang riêng |
| D4 | Bật lại trang Chính sách (đổi trả/bảo hành) vào menu | Tương tự D3 — ảnh hưởng số trang trong nav |

## E. Nội dung bổ sung khác — làm ngay được

| # | Việc làm | File chính |
|---|----------|-----------|
| E1 | Mục giới thiệu nguyên liệu nổi bật (bồ kết, bưởi, nghệ...) kèm ảnh sản phẩm liên quan đã có | `about/page.tsx` hoặc trang chủ |
| E2 | Bản đồ/địa chỉ cửa hàng ở trang Liên hệ | `contact/page.tsx` — cần địa chỉ thật, hiện `siteConfig.contact.address` đang trống |

## F. Thị giác/UX — làm ngay được

| # | Việc làm |
|---|----------|
| F1 | Hoạ tiết lá/thảo mộc trang trí nhẹ ở các section (hero, signature, footer) |
| F2 | Dùng font chữ ký (từ mục A2) cho trích dẫn/quote nói chung, không chỉ chữ ký |

---

## Câu hỏi cần chốt trước khi code (4 điểm) — ĐÃ CHỐT
1. Ảnh Giám đốc → **avatar chữ cái đầu tạm thời**, thay ảnh thật sau.
2. Testimonials → **placeholder rõ ràng**, không bịa nội dung/tên khách hàng.
3. Thông tin pháp lý → **tạm ẩn**, bổ sung khi có số liệu thật.
4. FAQ/Chính sách → **giữ 5 trang**, nhúng gọn FAQ vào trang Liên hệ. Chính sách (D4) tạm không làm vì cần nội dung pháp lý thật.

## Phạm vi triển khai đợt này
Làm: A (chữ ký Giám đốc, avatar chữ cái đầu), B (storytelling, hero image, CTA, quy trình),
C1 (testimonials placeholder), E1 (nguyên liệu — viết chung chung, không gán herb cụ thể chưa
xác nhận cho từng sản phẩm), F (hoạ tiết + font chữ ký).
Không làm đợt này: D1/D2/D4 (pháp lý, chứng nhận, trang chính sách riêng — thiếu dữ liệu thật),
E2 (bản đồ — thiếu địa chỉ thật), C2 (số liệu khách hàng/năm hoạt động — thiếu số thật).

## Định nghĩa Done
- Nhóm A, B, E, F triển khai xong, build xanh, verify bằng trình duyệt.
- Nhóm C, D chỉ triển khai phần đã được xác nhận nguồn dữ liệu; phần chưa có dữ liệu thật để
  placeholder rõ ràng, không bịa.

## Kết quả triển khai (2026-07-01)
- **A**: `DirectorSignature` component (avatar chữ cái đầu, trích dẫn, chữ ký font `Dancing Script`)
  — gắn ở trang chủ, About, và dòng chữ ký ở Footer. Config `siteConfig.owner` có thêm
  `quote`/`bio`/`photo` (photo rỗng → tự fallback avatar).
- **B**: About viết lại (câu chuyện mở rộng, Nguồn gốc dược liệu, Quy trình chăm chút sản phẩm).
  Hero trang chủ đổi bố cục 2 cột + ảnh sản phẩm thật + câu dẫn cảm xúc. CTA sản phẩm chi tiết
  thêm câu dẫn trước nút "Liên hệ đặt hàng".
- **C1**: Khối "Khách hàng nói gì" dạng placeholder (icon + ghi chú), không có tên/nội dung bịa.
- **D3 (điều chỉnh)**: Không bật trang FAQ riêng — nhúng 4 câu hỏi thường gặp (accordion) vào
  cuối trang Liên hệ, giữ đúng 5 trang chính trong nav.
- **F**: Hoạ tiết lá (Leaf icon mờ) trang trí góc khối chữ ký; font chữ ký dùng cho trích dẫn.
- Không làm: D1/D2/D4 (pháp lý, chứng nhận, trang chính sách riêng), E2 (bản đồ), C2 (số liệu
  khách hàng/năm hoạt động) — thiếu dữ liệu thật, chờ user cung cấp.
- Build xanh (`npm run build`), verify trực tiếp bằng trình duyệt ở Home/About/Contact/chi tiết
  sản phẩm, cả mobile và desktop.
