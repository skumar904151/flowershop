Full-Stack Flower Shop System Specification
🌸 Frontend (user.flowershop.com)

Tech Stack: React (or Next.js) + Tailwind CSS for modern, mobile-responsive UI

Features:

Home page with featured products, categories, and image sliders

Product listing with filters, search, and sorting

Product detail pages with “Add to Cart” and “Buy Now” options

User authentication system: Signup, Login, Logout (JWT-based sessions)

User Profile Dashboard:

View & edit account information

View order history & payment details

Shopping cart with full checkout flow

Razorpay payment gateway integration for secure payments

On successful order placement:

Send automatic order confirmation email using Nodemailer (or SendGrid)

All frontend data fetched and updated through backend REST APIs (api.flowershop.com)

⚙️ Backend API (api.flowershop.com)

Tech Stack: Node.js + Express

Database: MongoDB (Mongoose ORM) or PostgreSQL (Sequelize/Prisma)

Core Features:

Secure REST API endpoints for:

User management (signup, login, JWT auth)

Product management (CRUD for products & categories)

Order management (create, view, update)

Payment handling (Razorpay integration)

Admin operations (secured routes with role-based access)

Authentication & Authorization:

JWT for users and admins

Middleware for token verification & access control

Order Processing Workflow:

Handle order creation, payment confirmation, and status updates

Trigger email notifications using Nodemailer

Real-time sync with admin panel via REST or WebSocket

Clean and modular folder structure (controllers, routes, models, middlewares, config)

Well-documented endpoints with Swagger or Postman collection

🧑‍💼 Admin Panel (admin.flowershop.com)

Tech Stack: React (or Vue.js) + Tailwind + Chart.js

Features:

Secure Admin Login (JWT or session-based)

Real-time order monitoring dashboard:

View, accept, reject, or update order status

Automatic synchronization with frontend via backend API

Product & Category Management:

Add, edit, delete products and categories

Upload product images

Customer Management:

View user details, order history, and payment info

Reports & Analytics:

Sales overview, top products, revenue tracking

Responsive and professional UI/UX for smooth management

🌐 Architecture & Integration

Frontend, Backend, and Admin Panel hosted on separate subdomains

user.flowershop.com → React UI

api.flowershop.com → Node.js REST API

admin.flowershop.com → Admin Dashboard

Communication via secure HTTPS REST APIs

Role-based authentication for API access

Real-time order status synchronization between Admin and Frontend

Clean, maintainable, and well-documented codebase with comments and API docs

Deployment-ready architecture ( PM2 + Nginx reverse proxy)
