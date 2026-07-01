@AGENTS.md

# Project: Thảo Dược Bà Thông website

An e-commerce website for **Thảo Dược Bà Thông** ("Ba Thong Herbal" — cosmetics &
health-care products from Vietnamese natural herbs). Owner: **Director Uyên Kiều**.
Reference brand site: https://bathong.vn

## 3-phase roadmap

| Phase | Goal | Status |
|-------|------|--------|
| **1 — MVP** | React/Next.js + **mock data**, Vietnamese content, Bà Thông branding, deployed to Vercel to demo for the Director | **We are here** |
| **2 — Near-complete** | Still mock data + order placement → send email (API route), QR payment (VietQR) | Not started |
| **3 — Full** | Connect real API/DB (replace the `repositories/` layer), go-live, handover | Not started |

## Language (MUST FOLLOW)

- Respond to the user in **Vietnamese** for all explanations, summaries, questions, and chat.
- Code, identifiers, file paths, commands, commit messages, technical keywords: keep in English/code.
- Comments in code: keep the file's existing comment language style; don't translate existing comments.
- Error text quoted from logs/tools: keep the original, then explain in Vietnamese.

## Behavior rules (MUST FOLLOW)

1. **Clarify before coding** — do NOT write code when a requirement is unclear, has multiple
   interpretations, or scope isn't confirmed yet. → ASK the user first.
2. **Present before coding**: (1) Restate the problem → (2) Clarifying questions → (3) Proposed
   approach (no code) → (4) Confirm scope (what will / won't change) → WAIT for user confirmation.
3. **Simplicity first** — pick the simplest working solution. Don't add abstraction
   (service/repository/interface) unless it's actually needed. Reuse existing patterns, don't invent new ones.
4. **Surgical changes** — modify only the minimum required, don't refactor unrelated code,
   preserve existing architecture unless explicitly asked otherwise.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** — deployed on **Vercel**.
- **Tailwind CSS v4** + **shadcn/ui** (`src/components/ui/`).
- **next-intl** — Vietnamese only (`messages/vi.json`, default locale `vi`).
- **Zustand** (cart/wishlist/... stores — persisted to localStorage), **Zod** (form validation), **Sonner** (toasts).

> ⚠️ This is NOT the Next.js you know (see `@AGENTS.md`). APIs/conventions may differ from training data.
> READ the relevant guide under `node_modules/next/dist/docs/` before writing Next.js code.

## Key config files (check these first)

| To change | File |
|-----------|------|
| Brand name, contact info, hotline, social links, free-shipping threshold, currency | `src/lib/config.ts` |
| Navigation (5 MVP pages + categories) | `src/lib/navigation.ts` |
| Products / categories / brand (mock, **`.ts` file**, VND pricing) | `src/data/products.ts` |
| Translation strings (components using `useTranslations`) | `messages/vi.json` |
| VND price formatting | `src/lib/utils.ts` → `formatPrice` |
| Data access layer (swap to real API in Phase 3) | `src/lib/repositories/` |

## Data conventions

- **Prices are stored directly in VND** (NOT cents). `currency: "VND"`, `formatPrice` doesn't divide by 100.
- Mock data lives in a **`.ts` file** (`src/data/products.ts`), default-exporting `{ categories, products, brands }`.
- Repositories (`src/lib/repositories/`) are the backend-swap boundary — Phase 3 only replaces the implementation, keeping the interface.

## Phase 1 scope (current MVP)

- **5 main pages**: Home `/`, Products `/shop`, Product detail `/[slug]`, About `/about`, Contact `/contact`.
- Product detail page uses a **"Contact to order"** CTA (no cart/online checkout yet).
- Cart/checkout/auth/account/admin/wishlist/blog/brands/policies/faq routes **still have code but are hidden**
  from navigation — will be re-enabled from Phase 2 onward. When working on Phase 2, don't delete them,
  just re-link + finish translating them to Vietnamese.

## Git workflow (MUST FOLLOW)

- Use `git pull` (merge strategy). FORBIDDEN: `git pull --rebase`, `git rebase` on shared branches.
- Only commit/push when the user asks. If on the default branch → create a new branch first.

## Plan convention (when writing plans)

Every plan starts with frontmatter, stored under `docs/plans/`:

```yaml
---
title: <Feature name>
status: Đã lập kế hoạch   # Đã lập kế hoạch | Đang triển khai | Đang test | Hoàn thành | Hủy
created_date: YYYY-MM-DD
completed_date:
owner: <person/ai responsible>
---
```
`Hủy` (cancelled) must include a reason. Update `status` as work progresses.
