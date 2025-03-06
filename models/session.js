const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 7 * 24 * 60 * 60 }, // 7 days in seconds
});

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
