require('./db');

//const passport = require('passport');
const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
console.log("server starts");

const publicPath = path.resolve(__dirname, "public");
const sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: false, 
	resave: false 
};
app.use(session(sessionOptions));
app.use(express.static(publicPath));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// enable sessions
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.render('error');
  res.status(500).send('Something broke!')
})

const userRoutes = require('./routers/reviewsRoutes.js');
const imaRoutes = require('./routers/imaRoutes.js');

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


app.use('/reviews',userRoutes);

app.use('/ima',imaRoutes);

// going to wrong url
app.get('/*',(req,res)=>{
  res.render('error');
});

app.listen(process.env.PORT || 3000);
