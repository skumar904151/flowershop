# Flower Shop Frontend

Customer-facing web storefront implemented with Next.js, Tailwind CSS, and React Query.

## Features (planned)
- Home page with featured bouquets, curated categories, and promotional banners.
- Product catalog with search, filtering, and sorting controls.
- Product detail pages with upsell suggestions and reviews.
- Cart and checkout experiences integrated with Razorpay payments.
- Account dashboard for managing orders, addresses, and saved payment methods.

## Development

```bash
pnpm install
pnpm --filter flowershop-frontend dev
```

The app consumes the REST API hosted at `API_BASE_URL` (see `.env.example`).
