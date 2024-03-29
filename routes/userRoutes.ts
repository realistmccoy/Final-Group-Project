'use strict';

import express = require('express');
import jwt = require('jsonwebtoken');
import expjwt = require('express-jwt');
let mongoose = require('mongoose');
import passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
let auth = expjwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});
let https = require('https');
let User = mongoose.model('User');
let newUser = mongoose.model('User');
let Beer = mongoose.model('Beer');
let router = express.Router();

///POST: register new user
router.post('/register', (req, res, next) => {
  let newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.avatarUrl = req.body.avatarUrl;
  newUser.facebook = {};
  newUser.setPassword(req.body.password);
  newUser.token = newUser.generateJWT();
  newUser.save((error, user, token): any => {
    if (error) return next(error);
    user.passwordHash = '';
    user.salt = '';
    res.send(user);
  });
});

//PUT: User update on profile page
router.put("/", auth, (req,res,next) => {
    User.findOne({_id: req['payload']._id })
    .exec((err,user) => {
        if(err) return next (err);
        if(!req.body.password)req.body.password = "";
        user.username = req.body.username;
        user.email = req.body.email;
        user.avatarUrl = req.body.avatarUrl;
        if(user.validatePassword(req.body.password))user.setPassword(req.body.newpassword);
        user.token = user.generateJWT();
        user.save((error,user, token): any =>{
            if (error) return next (error);
            res.json({token: user.generateJWT()});
        });
    });
    });

router.post("/login", (req, res, next) => {
  if (!req.body.username) return next("Invalid username");
  if (!req.body.password) return next("Invalid password");
  passport.authenticate("local", (error, user, info): any => {
    if (error) return next(error);
    if (user) return res.json({token: user.generateJWT()});
    return res.send(info);
  }) (req, res, next);
});

///GET: loginFB
/* istanbul ignore next */
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']})
);

///GET: loginFB callback
/* istanbul ignore next */
router.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/login'}
), (req, res) => {
  res.redirect('/?code=' + req.user.generateJWT());
});

///GET: Individual user info
router.get('/users/:id', (req, res, next) => {
  User.findOne({_id: req.params.id}).select('-salt -passwordHash')
    .populate('beers', 'name imgurl imgbeer')
    .exec((err, user) => {
      res.send(user);
    });
});

export = router;
