import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
    "projectId": "neural-connect-frb",
    "appId": "1:872685774095:web:b19a74c6955c1906980a7a",
    "databaseURL": "https://neural-connect-frb.firebaseio.com",
    "storageBucket": "neural-connect-frb.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyANxkPzUsIkrP8gi8dwAfQQun2E-uRaqmA",
    "authDomain": "neural-connect-frb.firebaseapp.com",
    "messagingSenderId": "872685774095"
  });