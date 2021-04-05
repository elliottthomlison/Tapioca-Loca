
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("hello world users.route")
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const menu_items = data.rows;
        console.log("DATA.rows =", menu_items);
        res.render ('index', menu_items);

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

