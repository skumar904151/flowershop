# Flower Shop API

Express-based REST API providing authentication, product catalog management, order processing, and integrations for the Flower Shop platform.

## Getting Started

```bash
pnpm install
pnpm --filter flowershop-backend dev
```

The server defaults to `http://localhost:4000`. A `GET /api/health` endpoint is available to verify the service is running.

## Scripts

- `pnpm dev` – Run the API in watch mode using `tsx`.
- `pnpm build` – Compile TypeScript using `tsup`.
- `pnpm start` – Execute the compiled JavaScript bundle.
- `pnpm lint` – Run ESLint across the codebase.
- `pnpm test` – Execute Vitest suites (tests to be added).

## Environment Variables

See the repository-wide `.env.example` for the required secrets and configuration values.
