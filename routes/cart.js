const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM cart`;
    console.log("listening to cart!")
    console.log("THIS IS THE CART QUERY : ", query);
    db.query(query)
      .then(data => {
        console.log("data = ", data);
        const cartObject = data.rows;
        console.log("cartObject =", cartObject);
        res.render('index', cartObject);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

