// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

type FirebaseEventTypes =
  | "wallet_connected"
  | "wallet_connection_failed"
  | "mint_tx_initiated"
  | "mint_tx_failed"
  | "mint_tx_successful"
  | "revue_subscribers";

const logFirebaseEvent = (type: FirebaseEventTypes, additionalParams: any) => {
  logEvent(analytics, type, additionalParams);
};

export { logFirebaseEvent };
