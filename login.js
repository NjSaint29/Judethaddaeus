const firebaseConfig = {
  apiKey: "AIzaSyAuzqSB7ztTFjyz163KYrhVsHw-d6bRYtU",
  authDomain: "login-2887c.firebaseapp.com",
  databaseURL: "https://login-2887c-default-rtdb.firebaseio.com",
  projectId: "login-2887c",
  storageBucket: "login-2887c.appspot.com",
  messagingSenderId: "574910937231",
  appId: "1:574910937231:web:8f51c2807239b19c3418fa",
  measurementId: "G-0EV545PEFK",
};
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect to the desired page or handle successful login
      window.location.href = "home.html";
    })
    .catch((error) => {
      // Handle errors, such as incorrect email/password
      const errorCode = error.code;
      const errorMessageText = error.message;
      console.error("Error signing in:", error);
      errorMessage.textContent = errorMessageText; // Display error message
    });
});
