// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/finalproj';
}

const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs'),
  passportLocalMongoose = require('passport-local-mongoose');


  const ReviewSchema = new mongoose.Schema({
    workCommented: String,
    commentContext: String,
    time: Number,
    alias: String
  });
  // db.reviews.insert({ workCommented: "Movementpractice", commentContext: "Like a shit", semester: "Fall", year: 2015, professor: "McTeacherson", review: "Now I can sort like pro!" });
mongoose.model('Review', ReviewSchema);

mongoose.connect(dbconf);