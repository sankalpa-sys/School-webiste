// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGR6UCQZ_u1QmJ3VcsvB5XmuarhY3z1U8",
  authDomain: "school-abb22.firebaseapp.com",
  projectId: "school-abb22",
  storageBucket: "school-abb22.appspot.com",
  messagingSenderId: "500130422454",
  appId: "1:500130422454:web:18b4f325789254552cd017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app