import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDM-i68pB8kMfpwBPbr-Ygo0bh8ZerbYA8",

  authDomain: "instagram-yt-50aee.firebaseapp.com",

  projectId: "instagram-yt-50aee",

  storageBucket: "instagram-yt-50aee.appspot.com",

  messagingSenderId: "559611082036",

  appId: "1:559611082036:web:90ca4e41874891ad1da161",
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
