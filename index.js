import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyALSxXRXQ8h3Dd6nZ2VgOhdxjqeN0iYJlQ",
    authDomain: "todo-app-99928.firebaseapp.com",
    projectId: "todo-app-99928",
    storageBucket: "todo-app-99928.appspot.com",
    messagingSenderId: "1027068996920",
    appId: "1:1027068996920:web:e1f88cb6a7cf50d37ea5cd",
    measurementId: "G-54RDJK7Z6M"
};

var register_btn = document.getElementById('register_btn')
register_btn.addEventListener('click', RegisterUser)

function RegisterUser() {
   
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("User in")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        })}



    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log(app)

    