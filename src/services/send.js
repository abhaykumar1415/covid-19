var admin = require("firebase-admin");

var serviceAccount = require("../../src/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-19-272707.firebaseio.com"
});

const payload = {
    notification: {
      title: 'Notification Title',
      body: 'This is an example notification',
    }
  };
 
  const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day
  };
 
firebase.messaging().sendToDevice(firebaseToken, payload, options);
