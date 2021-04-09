const MessagingResponse = require('twilio').twiml.MessagingResponse;


const accountSid = 'AC6624ad3f551c59ad2a5c2b6f92af56bd';
const authToken = '51712cdca2d90388e67613e70dc2c1ff';
const client = require('twilio')(accountSid, authToken);


const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("hello world users.route")

    console.log("about to call twilio");
    const cart = req.body.cart;
    let cart_items = [];
    let total_price = 0;
    for (const item in cart) {
      cart_items.push(cart[item][0]);

      total_price += parseFloat(cart[item][1]);
    }
    console.log("cart_items , total_price = ", cart_items , total_price);

    let userObj = req.cookies;
    let userName = req.cookies.name;
    let userPhone = req.cookies.phone;

    console.log(`To Tapioca-Loca staff: Order placed by ${userName}(${userPhone})! Start preparing...🍓🥝🍋🍍🍈🍉 \n ${cart_items}`);
    console.log(`Thank you ${userName} for ordering \n ${cart_items}!  \n Your total comes to $${total_price}, it will be ready in 15 minutes! `)


    // // SENDS TEXT MESSAGES TO OWNER AND USER

    client.messages
          .create({
             body: `Thank you ${userName} for ordering \n ${cart_items} \nfrom Tapioca Loca!  \n Your total comes to $${total_price}, it will be ready in 15 minutes! \n🍓🥝🍋🍍🍈🍉`,
            //  body: `Thank you ${userName}, your bubble tea 🥤 will be ready in 15 minutes! `,
             messagingServiceSid: 'MG496ea940eb8cc83b39ab8267aef2ccf9',
             to: '+17788956372'
           })
          .then(message => console.log(message.sid))
          .done();

    client.messages
          .create({
              body: `To Tapioca-Loca staff: Order placed by ${userName}(${userPhone})! Start preparing \n \n \n${cart_items} `,
              messagingServiceSid: 'MG496ea940eb8cc83b39ab8267aef2ccf9',
              to: '+17788956372'
            })
          .then(message => console.log(message.sid))
          .done();

    console.log("twilio has been called")




  });
  return router;
};


