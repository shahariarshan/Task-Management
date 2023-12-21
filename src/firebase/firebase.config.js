// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXyv2BDrDD-tamQriaL4UcxiJjp2Nh9bw",
  authDomain: "task-management-dcf68.firebaseapp.com",
  projectId: "task-management-dcf68",
  storageBucket: "task-management-dcf68.appspot.com",
  messagingSenderId: "647865694973",
  appId: "1:647865694973:web:7e21f8bf4d1d20c083dc94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;