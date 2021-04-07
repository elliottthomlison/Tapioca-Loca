// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Your bubble tea U+1F964 order will be ready in 15 minutes ',
     from: '',
     to: ''
   })
  .then(message => console.log(message.sid));