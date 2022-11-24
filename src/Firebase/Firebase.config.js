// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHUQH1W10NyaKibeo0Z6L16B-zG5N5dKY",
    authDomain: "resell-cars-shop.firebaseapp.com",
    projectId: "resell-cars-shop",
    storageBucket: "resell-cars-shop.appspot.com",
    messagingSenderId: "204044548479",
    appId: "1:204044548479:web:c817b1e89615d6a75cc24a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;