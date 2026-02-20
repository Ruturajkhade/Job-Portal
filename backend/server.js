require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ CORS Middleware
app.use(
    cors({
        origin: "*",
        methods: ["GET", "PUT", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ✅ Connect Database
connectDB();

// ✅ Body parser
app.use(express.json());

// ✅ Routes (FIXED — added /)
// app.use("/api/auth", authRoutes);

// ✅ Static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));