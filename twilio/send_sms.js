// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require('dotenv').config();

//twilio set up - inbound sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = 'AC4f0b75ac3d43dbea9d5a3316b808e7c9';
const authToken = '155c280ae048dea7b62ab0bb90633d39';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Your bubble tea will be ready in 15 minutes. 🥤 ',
     from: '',
     to: ''
   })
  .then(message => console.log(message.sid));

