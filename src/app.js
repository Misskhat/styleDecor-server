const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");
const serviceRouter = require("./routes/service.routes");
const userRouter = require("./routes/user.routes");
const bookingRouter = require("./routes/booking.routes");
const paymentRouter = require("./routes/payment.routes");

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://your-frontend-vercel-url.vercel.app", // add after deploy
    ],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use("/api/services", serviceRouter);
app.use("/api/users", userRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/payments", paymentRouter);

module.exports = app;
