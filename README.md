# StyleDecor Server — Backend API

## Overview

StyleDecor Server is the backend REST API for the StyleDecor platform — a modern home, office, and event decoration service booking system.

This server handles:

- User authentication
- Role-based authorization
- Service management
- Booking management
- Stripe payment integration
- Dashboard APIs
- Protected routes with JWT

The backend is built using Node.js, Express.js, MongoDB Atlas, and Stripe.

---

# Live API

```bash
https://style-decor-server-chi.vercel.app
```

---

# GitHub Repository

```bash
https://github.com/Misskhat/styleDecor-server
```

---

# Features

## Authentication & Authorization

- JWT Authentication
- Protected Routes
- Role-based access control
- Admin verification middleware
- Decorator verification middleware

---

## User Features

- User login system
- Book decoration services
- View personal bookings
- Make payments
- View payment history

---

## Admin Features

- Manage all users
- Make decorator
- Manage services
- View all bookings
- Assign decorators
- View all payments

---

## Decorator Features

- View assigned projects
- Update project status

---

# Technology Stack

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JSON Web Token (JWT)

## Payment

- Stripe

## Other Tools

- Dotenv
- CORS
- Cookie Parser
- Nodemon

---

# NPM Packages Used

| Package       | Purpose                         |
| ------------- | ------------------------------- |
| express       | Backend framework               |
| mongoose      | MongoDB ODM                     |
| jsonwebtoken  | JWT token handling              |
| cors          | Cross-origin requests           |
| dotenv        | Environment variable management |
| cookie-parser | Cookie parsing middleware       |
| stripe        | Stripe payment integration      |
| nodemon       | Auto restart development server |

---

# Environment Variables

Create a `.env` file in the project root directory.

```env
PORT=3000

MONGO=your_mongodb_connection_string

JWT_TOKEN=your_secret_jwt_token

STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Misskhat/styleDecor-server.git
```

---

## Go To Project Directory

```bash
cd styleDecor-server
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
node server.js
```

---

# Project Structure

```bash
styleDecor-server/
│
├── server.js
├── vercel.json
├── .env
│
└── src/
    │
    ├── app.js
    │
    ├── db/
    │   └── db.js
    │
    ├── middleware/
    │   ├── verifyToken.js
    │   ├── verifyAdmin.js
    │   └── verifyDecorator.js
    │
    ├── models/
    │   ├── user.model.js
    │   ├── service.model.js
    │   ├── booking.model.js
    │   └── payment.model.js
    │
    ├── routes/
    │   ├── user.routes.js
    │   ├── service.routes.js
    │   ├── booking.routes.js
    │   └── payment.routes.js
    │
    └── services/
        ├── user.services.js
        ├── service.services.js
        ├── booking.services.js
        └── payment.services.js
```

---

# API Endpoints

# User Routes

| Method | Endpoint                   | Access  | Description               |
| ------ | -------------------------- | ------- | ------------------------- |
| POST   | /api/users/login           | Public  | Login user & generate JWT |
| GET    | /api/users/all-user        | Admin   | Get all users             |
| GET    | /api/users/role/:email     | Private | Get user role             |
| PATCH  | /api/users/update-user/:id | Admin   | Update user role          |

---

# Service Routes

| Method | Endpoint          | Access | Description        |
| ------ | ----------------- | ------ | ------------------ |
| GET    | /api/services     | Public | Get all services   |
| GET    | /api/services/:id | Public | Get single service |
| POST   | /api/services     | Admin  | Add new service    |
| DELETE | /api/services/:id | Admin  | Delete service     |

---

# Booking Routes

| Method | Endpoint                         | Access | Description       |
| ------ | -------------------------------- | ------ | ----------------- |
| GET    | /api/booking/booking-data        | Admin  | Get all bookings  |
| GET    | /api/booking/my-booking-data     | User   | Get user bookings |
| POST   | /api/booking/booking-created     | User   | Create booking    |
| PATCH  | /api/booking/my-booking-data/:id | User   | Update booking    |
| DELETE | /api/booking/my-booking-data/:id | User   | Delete booking    |

---

# Payment Routes

| Method | Endpoint                            | Access | Description                  |
| ------ | ----------------------------------- | ------ | ---------------------------- |
| GET    | /api/payments/all-payments          | Admin  | Get all payments             |
| GET    | /api/payments/my-payments           | User   | Get user payment history     |
| POST   | /api/payments/make-payment          | User   | Save payment information     |
| POST   | /api/payments/create-payment-intent | User   | Create Stripe payment intent |

---

# Role-Based Access Control

| Role      | Permissions                                |
| --------- | ------------------------------------------ |
| User      | Book services, payments, view bookings     |
| Admin     | Manage users, services, bookings, payments |
| Decorator | View assigned projects and update status   |

---

# Authentication Flow

## Login Process

1. User logs in from frontend
2. Backend generates JWT token
3. Token stored on frontend
4. Protected routes verify token
5. Role middleware checks permissions

---

# Stripe Payment Flow

1. Frontend sends payment amount
2. Backend creates Stripe payment intent
3. Frontend confirms payment
4. Backend stores payment history
5. Booking payment status updates

---

# Deployment

## Backend Hosting

- Vercel

## Database Hosting

- MongoDB Atlas

---

# Future Improvements

- Email notifications
- Booking invoice generation
- Image upload with Cloudinary
- Dashboard analytics
- Real-time notifications
- Service reviews & ratings
- Decorator assignment system improvement

---

# Author

## Developer

Md. Misskhat Hossen

---

# License

This project is licensed for educational and portfolio purposes.
