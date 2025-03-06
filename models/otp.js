const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  name: { type: String, required: true }, // Added 'name' field
  password: { type: String, required: true }, // Added 'password' field (hashed)
  createdAt: { type: Date, default: Date.now, expires: 300 }, // Auto-delete after 5 minutes
});

module.exports = mongoose.model("OTP", otpSchema);
