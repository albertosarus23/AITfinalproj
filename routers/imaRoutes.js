const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');


router.get('/', (req, res) => {
    res.render('ima');
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

router.get('/mine', async (req, res) => {
    req.session.myreviews = await Review.find({}).exec();
    //const currobj = req.session[reviews];
    res.render('filter',{data:req.session.myreviews});
});

module.exports = router;
