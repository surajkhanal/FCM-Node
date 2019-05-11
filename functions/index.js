const functions = require('firebase-functions');

// admin.initializeApp();

let FCM = require('fcm-call');
const serverKey = 'YOUR_SERVER_KEY'; 
const referenceKey = 'YOUR_DEVICE_TOKEN'; //Device Key


exports.sendNotification = functions.https.onRequest((request, response) => {
    let title = 'Hello buddy';
    let message = 'lorem ipsum dollar set amet';
    
    FCM.FCM(serverKey, referenceKey, title, message);
    
    response.send("Success");
});
