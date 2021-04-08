const express = require('express');
const router  = express.Router();
const url = require('url');
const querystring = require('querystring');


module.exports = (db) => {
  router.post("/", (req, res) => {

    console.log("req.body = ", req.body);
    let userObj = req.body;
    let userName = req.body.user;
    let userPhone = req.body.phone;
    res.cookie("name", userName);
    res.cookie("phone", userPhone);

    db.query(`SELECT * FROM users;`)
      .then (data => {
        const userData = {
          name: data.rows[0].name,
          phone: data.rows[0].phone
        };

        console.log("data.rows = ", data.rows[0].name);
        res.render("index", {userData:userData, items: [] });
        // const query = querystring.stringify({
        //   "user": data.rows[0].name
      });

      // res.render('index', {users, items: [] });
      // res.redirect('/');
        // res.redirect(`/`)
        // res.send(data.rows[0]);
        // res.redirect(url.format({
        //   pathname:"/",
        //   query: {
        //      "user": data.rows[0].name
        //    }
        // }));

      // })
  })
  return router;
};
