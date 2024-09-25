import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuzqSB7ztTFjyz163KYrhVsHw-d6bRYtU",
  authDomain: "login-2887c.firebaseapp.com",
  databaseURL: "https://login-2887c-default-rtdb.firebaseio.com",
  projectId: "login-2887c",
  storageBucket: "login-2887c.appspot.com",
  messagingSenderId: "574910937231",
  appId: "1:574910937231:web:787bb06b38dccd043418fa",
  measurementId: "G-EXVEVDYCV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const loginForm = document.getElementById("submit");


loginForm.addEventListener("click", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                console.log(errorMessage);
                console.log("nice")
                // ..
            });


    })

