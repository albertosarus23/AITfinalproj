require('../auth');
require('../db');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
User = mongoose.model('User');
const Review = mongoose.model('Review');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const session = require('express-session');

router.use(passport.initialize());
router.use(passport.session());
router.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

const sessionOptions = {
	secret: 'secret cookie thang (store this elsewhere!)',
	resave: true,
	saveUninitialized: true
};
router.use(session(sessionOptions));

const isAuthenticated = (req, res, next) => {
    if(!req.user) {
        res.render('unloginreviews');
    } else {
      next();
    }
  }

router.get('/', function(req, res) {
    if(!req.user) {
        res.render('unloginreviews');
    } else {
        res.redirect('/reviews/all');
    }
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req,res,next) {
    passport.authenticate('local', function(err,user) {
      if(user) {
        req.logIn(user, function(err) {
          res.redirect('/reviews');
        });
      } else {
        res.render('login', {message:'Your login or password is incorrect.'});
      }
    })(req, res, next);
});
  
router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    User.register(new User({username:req.body.username}), 
        req.body.password, function(err, user){
        if (err) {
        res.render('register',{message:'Your registration information is not valid'});
        } else {
        passport.authenticate('local')(req, res, function() {
            res.redirect('/reviews');
        });
        }
    });   
});

router.use(isAuthenticated);

// such functions are available after login

router.get('/all', (req, res) => {
    // router to the home page
    if(req.session.count === undefined){
        req.session.count = 1;
    }else{
        req.session.count += 1;
    }
    const queryObj = {};
    if(Object.hasOwnProperty.call(req.query,'workCommented')){
        if(req.query.workCommented!==''){
            queryObj['workCommented']=req.query.workCommented;
        }
    }
    Review.find(queryObj,function(err,display = review,count){
        const data = display.map( r =>{
            return {
                workCommented: r.workCommented,
                commentContext: r.commentContext,
                time: r.time,
                alias: r.alias
            };
        });
        res.render('reviews',{data});
    });
});

router.post('/add', (req, res) => {
    const {workCommented,commentContext,time,alias} = req.body;
    const reviews = new Review({
        workCommented,
        commentContext,
        time,
        alias
    });
    reviews.save((err,savedUser,count)=>{
        res.redirect('/reviews');
    });
});

router.get('/add',(req,res) => {
    res.render('add');
});

router.get('/*',(req,res)=>{
    res.render('error');
  });
module.exports = router;
