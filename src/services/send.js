var admin = require("firebase-admin");

var serviceAccount = require("/Users/mayuripapat/workspace/workspace/nodeJs/covid-api/covid-19/serviceAccountKey.json");

var token = '';
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
 
admin.messaging().sendToDevice(token, payload, options)
.then(function(response){
  console.log("Successfully sent message:",response);
})
.catch(function(error){
  console.log("Erron sending message:",error);
})
