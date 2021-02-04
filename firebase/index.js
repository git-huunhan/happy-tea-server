var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://happy-tea-1a89b-default-rtdb.firebaseio.com",
});

module.exports = admin;
