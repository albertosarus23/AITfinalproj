

const passport = require('passport');
//const passport = require('passport');
const express = require('express');
const path = require('path');

const app = express();
console.log("server starts");

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// enable sessions
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const imaRoutes = require('./public/imaRoutes.js');

app.get('/',(req,res) => {
    res.redirect('/home');
});

app.get('/home',(req,res) => {
  res.render('home');
});

app.get('/auhtor',(req,res) => {
  res.render('author');
});

app.get('/game',(req,res) => {
  res.render('game');
});

app.get('/photo',(req,res) => {
  res.render('pics');
});

app.get('/music',(req,res) => {
  res.render('music');
});

app.get('/3dmodel',(req,res)=>{
  res.render('3dmodel');
});

app.get('/author',(req,res)=>{
  res.render('author');
});

app.get('/csproj',(req,res)=>{
  res.render('csproj');
});

// app.get('/login', function(req, res) {
//   res.render('login');
// });

// app.get('/register', function(req, res) {
//   res.render('login');
// });


app.use('/ima',imaRoutes);

// going to wrong url
app.get('/*',(req,res)=>{
  res.render('error');
});

app.listen(process.env.PORT || 3000);
