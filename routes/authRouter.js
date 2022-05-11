const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require("express-openid-connect");

const controller = require('../controllers/authController')

router.get("/", controller.loginUser);
router.get('/profile', requiresAuth(), controller.viewProfile);

  module.exports = router;