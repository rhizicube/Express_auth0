const express = require("express");
const router = express.Router();
const { auth, requiresAuth } = require("express-openid-connect");

const controller = require("../controllers/authController");

router.get("/", controller.homePage);
router.get("/login", requiresAuth(), controller.loginUser);
router.get("/profile", requiresAuth(), controller.viewProfile);
router.get("/admin", requiresAuth(), controller.adminPage);
router.get("/custom-logout", controller.logoutUser);

module.exports = router;
