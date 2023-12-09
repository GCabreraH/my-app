// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb9cZv9JE4gFutW1ReWCNFuz2rnv0FjEM",
  authDomain: "crud-fire-react-b604e.firebaseapp.com",
  databaseURL: "https://crud-fire-react-b604e-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-b604e",
  storageBucket: "crud-fire-react-b604e.appspot.com",
  messagingSenderId: "247212531794",
  appId: "1:247212531794:web:c36dbc620937ec05d97f8b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase