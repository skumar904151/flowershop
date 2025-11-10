# Flower Shop Admin Dashboard

Administrative control panel for managing products, orders, and analytics.

## Planned Capabilities
- Role-based access with JWT validation.
- Real-time order feed with actionable status updates.
- Product and category CRUD, including media uploads.
- Customer insights with sales, revenue, and cohort analytics.

## Development

```bash
pnpm install
pnpm --filter flowershop-admin dev
```

The dashboard communicates with the REST API at `ADMIN_API_BASE_URL`.
