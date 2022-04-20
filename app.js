require('./db');

//const passport = require('passport');
const express = require('express');
const path = require('path');
const session = require('express-session');
// const routes = require('./routes/index');
// const list = require('./routes/list');
// const listItem = require('./routes/list-item');

const app = express();
console.log("server starts");

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// enable sessions
const sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: false, 
	resave: false 
};
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/photo',(req,res) => {
  res.render('pics');
});

app.get('/music',(req,res) => {
  res.render('music');
});

app.get('/3dmodel',(req,res)=>{
  res.render('3dmodel');
});

app.get('/csproj',(req,res)=>{
  res.render('csproj');
});

app.use('/reviews',userRoutes);

app.use('/ima',imaRoutes);

app.listen(process.env.PORT || 3000);
