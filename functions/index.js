const functions = require('firebase-functions');

const { getAllScreams, postOneScream } = require('./handlers/screams'); 
const {signup, login, uploadImage, addUserDetails} = require('./handlers/users');

const FBAuth = require('./util/fbAuth');



const express = require('express');
const app = express();


//user routes
app.post('/signup',signup);
app.post('/login',login);
app.post('/user/image', FBAuth , uploadImage)


//scream routes
app.get('/screams',getAllScreams);
app.post('/scream', FBAuth , postOneScream);
app.post('user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);









exports.api = functions.https.onRequest(app);



exports.api = functions.https.onRequest((app));