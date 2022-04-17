// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcDHEzDnPWqIjx3ZFlaIn84TjnUody9m4",
  authDomain: "kungfu-ip.firebaseapp.com",
  projectId: "kungfu-ip",
  storageBucket: "kungfu-ip.appspot.com",
  messagingSenderId: "555824693469",
  appId: "1:555824693469:web:0e4a5791e6e798b62cdb34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;