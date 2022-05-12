const express = require("express");

exports.loginUser = function(req, res, next){
     res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Off");
   // res.oidc.login({ returnTo: '/profile' })
console.log("welcome User");
}

exports.viewProfile = function(req, res, next){
    res.send(JSON.stringify(req.oidc.user));
}

// exports.logoutUser = function(req, res ,next){
//     res.send("You have logged off!");
//     res.oidc.logout();
    
// }