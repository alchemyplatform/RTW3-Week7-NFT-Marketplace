// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIUWn9us0t39sGPcEK7P9TDy2lD6-DSNY",
  authDomain: "fir-auth-phase1.firebaseapp.com",
  projectId: "fir-auth-phase1",
  storageBucket: "fir-auth-phase1.appspot.com",
  messagingSenderId: "414191983387",
  appId: "1:414191983387:web:5960c22951ab8da834d1be",
  measurementId: "G-XGESK362VC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app 
