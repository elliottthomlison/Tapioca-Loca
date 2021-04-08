

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // console.log("hello world cart.route")
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const menu_items = data.rows;
        // console.log("DATA.rows =", menu_items);
        const userData = {
          name: req.cookies.name,
          phone: req.cookies.phone
        };
        res.cookie("menu_item_0", menu_items[0].name);
        console.log("menu_item[0].name =====MHGG====", menu_items[0].name);

        res.render('index', {items: menu_items, userData:userData});

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


