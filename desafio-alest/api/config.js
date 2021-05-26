'use strict';

const dotenv = require('dotenv');
const assert = require('assert');


dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGE_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyDAxz-kLJxldo_lRUyD9_PODB7Gamkcidw",
        authDomain: "desafio-alest-32128.firebaseapp.com",
        databaseURL: "https://desafio-alest-32128-default-rtdb.firebaseio.com",
        projectId: "desafio-alest-32128",
        storageBucket: "desafio-alest-32128.appspot.com",
        messagingSenderId: "49532462210",
        appId: "1:49532462210:web:af431d2351212e36c5c09b",
        measurementId: "G-7Q91TMY985"
    }

}
