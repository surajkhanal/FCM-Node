let FCM = require('fcm-call');
let express = require('express');
let app = express();
const serverKey = 'AAAAedXnPsM:APA91bE3aVKt8LySB0si8PPy1c22FOEHsJB8E2Irr2YWY86WrBF7xnKTp9_AEYAe1RNfrK9pWVD1CIXUw4VTkSznqbtwc-leX3iUDjUyMD1ASbgRfbJP4Igna4d15HvqIVrWOP5IxW-b'; 
const referenceKey = 'emwHdaG6hnI:APA91bEOT9o_Twa4DqHwDMQQGTt2mE7-Y-AuS6l0vJW151u5YYX4KIc1cdBKm6jj2-GY5jOgiKwQg0xXiOYTiH4TUC3WX81sDD-1viBcOlP6YnIh6t9om5bSWQhmM7m--l-yHPYcdVmp'; //Device Key

app.get('/', function(req, res) {
    
    let title = 'Hello buddy';
    let message = 'lorem ipsum dollar set amet';
    
    FCM.FCM(serverKey, referenceKey, title, message);
    res.send('success');
});

app.listen(8000, function() {
    console.log('app started');
});