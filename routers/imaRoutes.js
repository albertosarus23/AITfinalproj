const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');


router.get('/', (req, res) => {
    res.render('ima');
});

router.get('/shooting_basket', (req, res) => {
    res.render('shooting_basket');
});

router.get('/add',(req,res) => {
    res.render('add');
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
module.exports = router;
