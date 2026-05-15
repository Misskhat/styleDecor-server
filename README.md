# StyleDecor Server — Backend API

## Purpose

This is the backend REST API for StyleDecor, a smart home and ceremony decoration booking system. It handles authentication, service management, bookings, payments, and role-based access control.

## Live API URL

https://style-decor-server-chi.vercel.app

## GitHub Repository

https://github.com/Misskhat/styleDecor-server

---

## Technology Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Stripe
- Cookie Parser
- CORS
- Dotenv

---

## NPM Packages Used

| Package       | Purpose                               |
| ------------- | ------------------------------------- |
| express       | Web server framework                  |
| mongoose      | MongoDB object modeling               |
| jsonwebtoken  | JWT token generation and verification |
| cookie-parser | Parse cookies from requests           |
| cors          | Cross-origin resource sharing         |
| dotenv        | Environment variable management       |
| stripe        | Stripe payment processing             |
| nodemon       | Auto-restart during development       |

---

## Environment Variables

Create a `.env` file in root:

PORT=3000
MONGO=your_mongodb_connection_string
JWT_TOKEN=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

---

## Project Structure

server/
├── server.js
├── vercel.json
├── .env
└── src/
├── app.js
├── db/
│ └── db.js
├── middleware/
│ ├── verifyToken.js
│ ├── verifyAdmin.js
│ └── verifyDecorator.js
├── models/
│ ├── user.model.js
│ ├── service.model.js
│ ├── booking.model.js
│ └── payment.model.js
├── routes/
│ ├── user.routes.js
│ ├── service.routes.js
│ ├── booking.routes.js
│ └── payment.routes.js
└── services/
├── user.services.js
├── service.services.js
├── booking.services.js
└── payment.services.js

---

## API Endpoints

### User Routes

| Method | Endpoint                   | Access  |
| ------ | -------------------------- | ------- |
| POST   | /api/users/login           | Public  |
| GET    | /api/users/all-user        | Admin   |
| GET    | /api/users/role/:email     | Private |
| PATCH  | /api/users/update-user/:id | Admin   |

### Service Routes

| Method | Endpoint          | Access |
| ------ | ----------------- | ------ |
| GET    | /api/services     | Public |
| GET    | /api/services/:id | Public |
| POST   | /api/services     | Admin  |
| DELETE | /api/services/:id | Admin  |

### Booking Routes

| Method | Endpoint                         | Access |
| ------ | -------------------------------- | ------ |
| GET    | /api/booking/booking-data        | Admin  |
| GET    | /api/booking/my-booking-data     | User   |
| POST   | /api/booking/booking-created     | User   |
| PATCH  | /api/booking/my-booking-data/:id | User   |
| DELETE | /api/booking/my-booking-data/:id | User   |

### Payment Routes

| Method | Endpoint                            | Access |
| ------ | ----------------------------------- | ------ |
| GET    | /api/payments/all-payments          | Admin  |
| GET    | /api/payments/my-payments           | User   |
| POST   | /api/payments/make-payment          | User   |
| POST   | /api/payments/create-payment-intent | User   |

---

## Role Based Access

| Role      | Access                                           |
| --------- | ------------------------------------------------ |
| User      | Book services, view own bookings, make payments  |
| Admin     | Manage services, users, bookings, view analytics |
| Decorator | View assigned projects, update project status    |

---

## Getting Started Locally

```bash
git clone https://github.com/Misskhat/styleDecor-server.git
cd styleDecor-server
npm install
node server.js
```

---

## Deployment

Deployed on Vercel with MongoDB Atlas database.
