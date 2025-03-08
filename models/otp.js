const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  name: { type: String, required: true }, // User's name
  password: { type: String, required: true }, // Hashed password
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: () => new Date(Date.now() + 600 * 1000) }, // Auto-expire after 5 min
});

module.exports = mongoose.model("OTP", otpSchema);
