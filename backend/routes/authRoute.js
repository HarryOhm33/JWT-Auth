const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const authenticate = require("../middleware/authenticate");

const {
  signup,
  login,
  logout,
  verify,
  // resendOTP,
  verifySession,
} = require("../controllers/auth");

// ✅ User Signup
router.post("/signup", wrapAsync(signup));

router.post("/verify", wrapAsync(verify));

// router.post("/resend-otp", wrapAsync(resendOTP));

// ✅ User Login
router.post("/login", wrapAsync(login));

router.post("/logout", authenticate, wrapAsync(logout));

// ✅ Protected Route Example
router.post("/verify-session", authenticate, wrapAsync(verifySession));

router.get("/profile", authenticate, (req, res) => {
  res.status(200).json({ message: "Welcome!", user: req.user });
});

module.exports = router;
