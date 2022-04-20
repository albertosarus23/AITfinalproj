const express = require('express');
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const imarouter = express.Router();


imarouter.get('/', (req, res) => {
    const queryObj = {};
    if(Object.hasOwnProperty.call(req.query,'commentContext')){
        if(req.query.commentContext!==''){
            // find only the quick comments
            // where only the commentcontext is filled
            queryObj['commentContext']=req.query.commentContext;
        }
    }
    Review.find(queryObj,function(err,display = review,count){
        const data = display.map( r =>{
            return {
                commentContext: r.commentContext,
            };
        });
        res.render('ima',{data});
    });
});

imarouter.get('/shooting_basket', (req, res) => {
    res.render('shooting_basket');
});

imarouter.post('/', (req, res) => {
    const {commentContext} = req.body;
    const review = new Review({
        commentContext
    });
    review.save((err,savedUser,count)=>{
        res.redirect('/ima');
    });
});
module.exports = imarouter;
