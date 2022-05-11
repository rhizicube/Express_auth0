const express = require("express");

exports.loginUser = function(req, res, next){
    res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Off");
console.log("welcome User");
}

exports.viewProfile = function(req, res, next){
    res.send(JSON.stringify(req.oidc.user));
}