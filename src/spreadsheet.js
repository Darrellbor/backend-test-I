// sheets-client.js
var SheetsAPI = require('sheets-api');
var sheets = new SheetsAPI();
var SPREADSHEET_ID = "1Hq1T9K5jODzvZxucK-uc67Ka9pgLATnpRCjUlrRDR64";

module.exports.newRow = function(profile_name, followersNo) {
 
// ValueRange(https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange)
let payload = {
  spreadsheetId: SPREADSHEET_ID,
  range: "Sheet1!A1:B1",
  valueInputOption: 'USER_ENTERED',
  resource : {
    majorDimension: "ROWS",
    values: [
      [profile_name, followersNo]
    ]
  }
}
 
sheets
  // Get me an authorized OAuth2 client thats ready to make requests.
  .authorize()
 
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
  // Using the spreadsheets.values collection, use the 'append' method to
  // append data (payload) to a spreadsheet.
  .then(auth => sheets.values('append', auth, payload))
 
  // 'response' is an object that contains the response from the request to the
  // API (append) and the OAuth2 client to be chained further. It looks like this:
  // {auth:auth, response:response}
  .then(response => sheets.values('get', response.auth, {
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A2:B2'
  }))
 
  // The results of the request to spreadsheets.values.get collection.
  .then(response => {
    console.log(response.response);
  })
 
  // Derp
  .catch(e => console.error(e))
};