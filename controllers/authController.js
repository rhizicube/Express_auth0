const express = require("express");

exports.homePage = function (req, res, next) {
  res.send('<a href="/admin">Admin Section</a>');
};

exports.adminPage = function (req, res, next) {
  res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`);
};

exports.loginUser = function (req, res, next) {
  //res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Off");
  res.oidc.login({ returnTo: '/profile' })
  console.log("welcome User");
};

exports.viewProfile = function (req, res, next) {
  res.send(JSON.stringify(req.oidc.user));
};

exports.logoutUser = function (req, res, next) {
  res.oidc.logout({ returnTo: "/" });
};
