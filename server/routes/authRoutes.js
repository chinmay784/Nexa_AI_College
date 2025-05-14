const express = require("express");
const { registerUser, verifyOTP, loginUser, profile, uploadProfilePic, requestPasswordReset, resetPassword } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const {upload} = require('../config/cloudinary')

router.post("/signup", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.get("/profile" ,authMiddleware,  profile)
router.post("/upload-profile-pic", authMiddleware, upload.single("profilePic"), uploadProfilePic);
router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);


module.exports = router;


// http://localhost:4000/api/auth/signup
// http://localhost:4000/api/auth/verify-otp
// http://localhost:4000/api/auth/login
// http://localhost:4000/api/auth/upload-profile-pic ( in ths route you have to provide in headers Authorization: your_token and also give profilepic in body as form-data)
// http://localhost:4000/api/auth/request-password-reset
// http://localhost:4000/api/auth/reset-password
// http://localhost:4000/api/auth/profile (In headers you have to give Authorization: your_token)