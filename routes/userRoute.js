const express = require("express");
const router = express.Router();
const {
  protect,
  adminOnly,
  userOnly,
  authorOnly,
} = require("../middleware/authMiddleware.js");
const {
  registerUser,
  loginUser,
  deleteUser,
  getOneUser,
  getAllUser,
  logoutUser,
  updateUser,
  loginStatus,
  upgradeUser,
  sendAutomatedEmail,
  sendVerificationEmail,
  verifyUser,
  forgotPassword,
  resetPassword,
  changePassword,
  userDeleteAccount,
  sendLoginCode,
  loginWithCode,
  loginWithGoogle,
} = require("../controllers/userController.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getUsers", protect, authorOnly, getAllUser);
router.get("/getUser", protect, getOneUser);
router.put("/updateUser", protect, updateUser);

router.delete("/:id", protect, adminOnly, deleteUser);
router.delete("/delete/:id", protect, userOnly, userDeleteAccount);
router.get("/loginStatus", loginStatus);
router.post("/upgradeUser", protect, adminOnly, upgradeUser);
router.post("/sendAutomatedEmail", protect, sendAutomatedEmail);
router.post("/sendVerificationEmail", protect, sendVerificationEmail);

router.patch("/verifyUser/:verificationToken", verifyUser);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:resetToken", resetPassword);
router.patch("/changePassword", protect, changePassword);
router.post("/sendLoginCode/:email", sendLoginCode);
router.post("/loginWithCode/:email", loginWithCode);
router.post("/google/callback", loginWithGoogle);

module.exports = router;
