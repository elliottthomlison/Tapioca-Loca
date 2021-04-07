//twilio number: +16059377831

const accountSid = 'AC4f0b75ac3d43dbea9d5a3316b808e7c9';
const authToken = '155c280ae048dea7b62ab0bb90633d39';
const client = require('twilio')(accountSid, authToken);

const messageCustomer = (customer, restaurant, time, order_url) => {
const message = `Hello ${(customer)}, your order from ${restaurant} should be ready in ${time} mins! You can check the ETA at ${order_url}.`

  client.messages.create({
    to: "+17788956372",
    from: "+16059377831",
    body: message
  }, (err, message) => {
    if (err) {
      // cb(err);
      return null;
    }
  });
}

const messageComplete = (customer, restaurant, order_url) => {
  const message = `Hello ${(customer)}, your order from ${restaurant} is now ready! You can verify at ${order_url}.`

  client.messages.create({
    to: "+17788956372",
    from: "+16059377831",
    body: message
  }, (err, message) => {
    if (err) {
      // cb(err);
      return null;
    }
  });
}


const callRestaurant = (customer, order, restaurant) => {
  client.calls.create({
    url: `https://handler.twilio.com/twiml/EHd82de43b7027cda1add178f95628fc42?restaurant=${encodeURI(restaurant)}&customer=${encodeURI(customer)}&order=${encodeURI(order)}`,
    to: "+17788956372",
    from: "+16059377831"
  }, function(err, call) {
    if (err) {
      // cb(err);
      return null;
    }
  });
}

module.exports = {
  message: messageCustomer,
  complete: messageComplete,
  call: callRestaurant
};