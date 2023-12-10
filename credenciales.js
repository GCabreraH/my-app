// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWGYPhziNAQy9Ijq8lDRMWoBIzwwBUsEc",
  authDomain: "webappreact-b73c1.firebaseapp.com",
  projectId: "webappreact-b73c1",
  storageBucket: "webappreact-b73c1.appspot.com",
  messagingSenderId: "314374084857",
  appId: "1:314374084857:web:9182c13b273e2d8fddaa28"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
