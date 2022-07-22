const express = require('express');
const imarouter = express.Router();
imarouter.use(express.json());

imarouter.get('/', (req, res) => {
    res.render('ima');
});

imarouter.get('/shooting_basket', (req, res) => {
    res.render('shooting_basket');
});



imarouter.get('/*',(req,res)=>{
    res.render('error');
  });
module.exports = imarouter;
