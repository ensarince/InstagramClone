import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/storage'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlsVwgQ3ReiIfz88FluiP9wWOzdS9Dw-M",
  authDomain: "instagram-clone-8bf8c.firebaseapp.com",
  projectId: "instagram-clone-8bf8c",
  storageBucket: "instagram-clone-8bf8c.appspot.com",
  messagingSenderId: "293356114488",
  appId: "1:293356114488:web:ed98f0f9cca8293518cccd",
  measurementId: "G-GB0KE6H5ST"
};

// get the apps, if there are no apps, get app
/* const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage(); */

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
var storage = getStorage(app)


export {app, db, storage};