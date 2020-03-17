require('dotenv').config()
const twilio = require("twilio");
const twillioClient = new twilio(
  process.env.TWILLIO_ACCOUNT_ID,
  process.env.TWILLIO_AUTH_TOKEN
);
const csv = require('csv-array');

const message = process.argv.slice(2)[0];

csv.parseCSV("numbers.csv", async function(data){
  for (const entry of data) {
      let phoneNumber = null;
      for (const key of Object.keys(entry)) { 
        phoneNumber = entry[key]
      }
      try {
        await twillioClient.messages.create({
          body: message,

          to: phoneNumber,

          from: process.env.TWILLIO_NUMBER
        });
      } catch(err) {
        console.log(err);
      }
      
  }
});