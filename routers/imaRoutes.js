const express = require('express');
const mongoose = require('mongoose');
const QuickComment = mongoose.model('QuickComment');
const imarouter = express.Router();


imarouter.get('/', (req, res) => {
    const queryObj = {};
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
        res.render('ima',{data});
    });
});

imarouter.get('/shooting_basket', (req, res) => {
    res.render('shooting_basket');
});

imarouter.post('/', (req, res) => {
    const {quickComment} = req.body;
    const quickcomment = new QuickComment({
        quickComment
    });
    quickcomment.save((err,savedUser,count)=>{
        res.redirect('/ima');
    });
});
module.exports = imarouter;
