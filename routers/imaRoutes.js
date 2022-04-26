const express = require('express');
const mongoose = require('mongoose');
const QuickComment = mongoose.model('QuickComment');
const imarouter = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

imarouter.use(passport.initialize());
imarouter.use(passport.session());
imarouter.get('/', (req, res) => {
    const queryObj = {};
    if(req.session.mycomment === undefined){
        req.session.mycomment = 0;
    }
    // console.log( req.session.mycomment );
    if(Object.hasOwnProperty.call(req.query,'quickComment')){
        if(req.query.quickComment!==''){
            // find only the quick comments
            // where only the quickComment is filled
            queryObj['quickComment']=req.query.quickComment;
        }
    }
    QuickComment.find(queryObj,function(err,display = review,count){
        const data = display.map( r =>{
            return {
                quickComment: r.quickComment,
            };
        });
        let displaySubmitbtn = req.session.mycomment
        res.render('ima',{data,displaySubmitbtn});
    });
});

imarouter.get('/shooting_basket', (req, res) => {
    res.render('shooting_basket');
});

// each users can only submit three 
imarouter.post('/', (req, res) => {
    const {quickComment} = req.body;
    const quickcomment = new QuickComment({
        quickComment
    });
    quickcomment.save((err,savedUser,count)=>{
        res.redirect('/ima');
    });
    req.session.mycomment +=1;
});

module.exports = imarouter;
