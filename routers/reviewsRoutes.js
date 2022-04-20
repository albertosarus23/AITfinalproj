const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');


router.get('/', (req, res) => {
    // router to the home page
    //console.log(1);
    if(req.session.count === undefined){
        req.session.count = 1;
        res.locals.count = req.session.count;
    }else{
        req.session.count += 1;
        res.locals.count = req.session.count;
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
