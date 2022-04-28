# Personal website

## Overview

I want to do a personal website. My minor is intergated digital media so I really need to build a website of my own to put all of my work in to that website so it can be seem by public. 

This website features multi-media display, including pictures, videos, and written documents. The home page should have some abbreviations of my selected art works and once users click them, they can go to see the description. 

The other feature of the website should contain contact information, users can leave their comments to my work and they also have a opportunity to leave their email address and send email to me.


## Data Model

Home page contains links to other media sites and review page

* media sites includes 
  * Interactive media arts work
  * Photography
  * Music
  * Coding works (GitHub repository)
  * Papers

* review page(has to be login first) includes
  * alias
  * Work to be commented
  * time commented(System time)
  * context (each email address can only )
  * send button


An Example User Review:

```javascript
  const ReviewSchema = new mongoose.Schema({
    workCommented: String,
    commentContext: String,
    time: Number,
    alias: String
  });
```

```javascript
 const QuickCommentSchema = new mongoose.Schema({
   quickComment: String
 });
```


## [Link to Commented First Draft Schema](db.js) 

[db.js](./db.js)


## Ajax features
click to the photo section.
click the empty area near the pictures I upload.
Once clicked, the introduction on corresponding pictures will be shown and a text 
will appear.
Click once agian, the text will disappear.
[photos.js](./public/javascripts/photos.js)

to the ima section
the client side will request all the quick reviews and render them on that page
the user can upload their quick review. The DOM will refresh and the new comment will also appear on the page
[ima.js](./public/javascripts/ima.js)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/bio - page for displaying Bio

![Bio](./public/img/WebDesign/Bio.png)

/home - Homepage showing all visible context

![Home](./public/img/WebDesign/Homepage.png)

/comment - page for showing specific shopping list

![Comments](./public/img/WebDesign/Comments.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other_)

## User Stories or Use Cases

1. as a user, I can browse all the works published by the owner with the site
2. as a user, I can comment on works published by owner on the site
3. as a user, I can leave quick comment on the ima works that doesn't need login and the limits per user is three.
4. as a user, I can click the photos on the photo page to see the introduction

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (1 points) Configure the more advance use of Github
  * I'm going to be familiar of deploying Github, understanding how to use
    * Merge
    * Pull request
    * handle version history
* (2 points) Learn web design
  * understand how to do web design so I can make my website much more nicer
  * understand the use of CSS and html
  * learn rendering
* (2 points) anime.js for possible website animation
  * plain website is alwasys boring, so I would like to do some research on how to make it live with real-time effect
  * use a library anime.js and use its build-in function
* (3 points) Client side form validation using passport.js
  * There are two types of comments in my web. One is quick comment, which the user doesn't have to login or register to leave. However, this type of comments are only allowed each to submit three times. In their session I will record
  * Maybe consider using external sources to handle these problem

8 points total out of 8 required points 


## [Link to Initial Main Project File](app.js) 

/ project root
* public
  * Img
  * stylesheets
* views
  * layout.hbs
  * login.hbs
  * register.hbs
  * etc
* app.js
* db.js
* reviewsRoutes.js
* package.json
* README.md

## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs) 
2.  [https://animejs.com/documentation/#domNode](http://passportjs.org/docs) 

