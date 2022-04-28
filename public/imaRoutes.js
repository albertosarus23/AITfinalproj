const express = require('express');
const mongoose = require('mongoose');
const QuickComment = mongoose.model('QuickComment');
const imarouter = express.Router();
imarouter.use(express.json());

imarouter.get('/', (req, res) => {
    res.render('ima');
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

imarouter.get('/api/comment',async function(req,res){
    const quickComment = await QuickComment.find({}).exec();
    const data = quickComment.map( r =>{
        return {
            quickComment: r.quickComment,
        };
    });
    res.json(data);
});

imarouter.post('/api/comment/create', async (req, res) => {
    const {quickComment} = req.body;
    const newComment = await (new QuickComment({
        quickComment: quickComment
    })).save();
    res.send(newComment);
  });

imarouter.get('/*',(req,res)=>{
    res.render('error');
  });
module.exports = imarouter;
