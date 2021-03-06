// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieParser = require('cookie-parser');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const cartRoutes = require("./routes/cart");
const twilioRoutes = require("./routes/twilio");
const sessionRoutes = require("./routes/sessions");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/cart", cartRoutes(db));
app.use("/api/twilio", twilioRoutes(db));
app.use("/sessions", sessionRoutes(db));

// Note: mount other resources here, using the same pattern above



// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  db.query("SELECT * FROM menu_items")
  .then(data => {
    console.log("mydata",data.rows)
    // read username and phone from cookies
    // add username and phone to templatevars
    // console.log("req.cookies = ",req.cookies);
    // console.log("req.cookies.name = ",req.cookies.name);
    // console.log("req.cookies.phone = ",req.cookies.phone);
    const userData = {
      name: req.cookies.name,
      phone: req.cookies.phone
    };
    const templateVars = {
      items:data.rows, userData: userData
    }
    console.log("templateVars = ", templateVars);
    console.log("userData = ",userData);
    res.render("index", templateVars);
  }).catch(error => console.log(error))

});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


