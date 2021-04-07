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

//twilio set up - inbound sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
//twilio set up - outbound sms
const accountSid = 'AC4f0b75ac3d43dbea9d5a3316b808e7c9';
const authToken = '155c280ae048dea7b62ab0bb90633d39';
const client = require('twilio')(accountSid, authToken);


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
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



//////////////////////////////////////////////////////////////////////
//twilio setup
app.post("/confirmation", (req, res) => {
  console.log(req.body);
  client.messages
    .create({
      body: 'Your bubble tea will be ready in 15 minutes. 🥤',
      from: '+16059377831',
      to: '+17788956372'
    }).then((message) => {
      console.log(message.sid)
    })
  .then(() => res.redirect('confirmation'), { orderdata: req.body });
});

app.post("/addtocart", (req, res) => {
  res.redirect('confirmation');
});

//twilio set up - this is for inbound sms
// POST request comes from twilio whenever a response is received via SMS (via ngrok)
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message(`add message`);
  console.log(twiml.toString());

});