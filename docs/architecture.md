# Flower Shop Platform Architecture

This document describes the initial architecture and technology choices for the Flower Shop platform, covering the customer-facing storefront, backend API, and administrative dashboard.

## Monorepo Layout

```
/
├── frontend/    # Customer storefront (Next.js + Tailwind CSS)
├── backend/     # REST API (Node.js + Express + Prisma)
├── admin/       # Admin dashboard (Next.js + Tailwind CSS + Chart.js)
├── docs/        # Documentation and design assets
└── README.md    # Product requirements overview
```

All applications share a `.env.example` to document required environment variables and can be developed independently. The repository uses [`pnpm`](https://pnpm.io) workspaces to manage dependencies efficiently across the projects (see `pnpm-workspace.yaml`).

## Environment Overview

### Frontend (`frontend/`)
* **Framework:** Next.js 14 with the App Router.
* **Styling:** Tailwind CSS, Headless UI components, and Framer Motion for micro-interactions.
* **State Management:** React Query for remote state, Zustand for local UI state.
* **Auth:** JWTs stored in HttpOnly cookies, handled by the backend API.
* **Testing:** Playwright for end-to-end, Vitest + Testing Library for unit tests.

### Backend (`backend/`)
* **Framework:** Express 5 running on Node 20.
* **ORM:** Prisma connected to PostgreSQL (primary) with MongoDB support for catalog caching.
* **Security:** Helmet, CORS, rate limiting, and structured logging with Pino.
* **Payments:** Razorpay SDK integration with webhook verification.
* **Queue Processing:** BullMQ (Redis) for email delivery and background jobs.
* **Documentation:** Swagger UI served from `/docs`.

### Admin (`admin/`)
* **Framework:** Next.js 14 with App Router.
* **Styling:** Tailwind CSS and Radix UI primitives.
* **Charts:** Chart.js via `react-chartjs-2` with streaming updates powered by SSE.
* **Auth:** Admin JWT scope validated by backend.

### Shared Services
* **Email:** Nodemailer configured with SendGrid SMTP.
* **File Storage:** AWS S3 for product images, abstracted behind a shared `storage` utility.
* **CI/CD:** GitHub Actions pipeline for linting, tests, and deployment.

## API Contract Highlights

* **Authentication:** `/auth/register`, `/auth/login`, `/auth/logout`, `/auth/refresh`.
* **Products:** `/products`, `/products/:id`, `/categories` with filtering and sorting.
* **Orders:** `/orders`, `/orders/:id`, `/orders/:id/status`.
* **Payments:** `/payments/create-order` for Razorpay order creation, `/payments/webhook` for status updates.
* **Admin:** `/admin/users`, `/admin/orders`, `/admin/dashboard` (protected routes).

All endpoints return JSON responses with a consistent envelope (`{ data, meta, errors }`).

## Data Flow Summary

1. **Catalog Browsing:** Frontend fetches product lists via `GET /products`, caches responses with React Query, and uses ISR to revalidate pages.
2. **Checkout:** Cart items stored in Zustand state are submitted to `/orders` with payment intent created through `/payments/create-order`.
3. **Payment Confirmation:** Razorpay webhook notifies `/payments/webhook`; backend updates order status and enqueues confirmation email job.
4. **Admin Monitoring:** Admin dashboard consumes `/admin/orders` via SSE for near real-time updates. Status changes propagate to the storefront via React Query invalidation and optional WebSocket broadcasting.

## Deployment Topology

* **Frontend & Admin:** Deployed to Vercel with environment variables referencing the API domain.
* **Backend:** Deployed on a Node server managed by PM2 behind Nginx. Exposes HTTPS endpoints via Let's Encrypt certificates.
* **Database:** PostgreSQL on managed service (e.g., Supabase), Redis for queues, S3 for assets.

## Next Steps

1. Generate initial Next.js and Express applications within their respective directories.
2. Configure `pnpm` workspaces, linting, and formatter (ESLint + Prettier).
3. Scaffold Prisma schema with core models (User, Product, Category, Order, Payment, Address).
4. Implement authentication flow with JWTs and refresh tokens.
5. Build frontend pages following the product requirements and integrate API calls.

