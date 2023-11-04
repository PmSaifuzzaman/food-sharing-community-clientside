// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD-t5Dpd-x4z-IOvPzXMQampTmDUj-wjo",
  authDomain: "food-sharing-community.firebaseapp.com",
  projectId: "food-sharing-community",
  storageBucket: "food-sharing-community.appspot.com",
  messagingSenderId: "979369233878",
  appId: "1:979369233878:web:b23adab5ff7ea8205ce877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;