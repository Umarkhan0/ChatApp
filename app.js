import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC-X4qxyI3jqxYYKdhcmEhWN-luVmQIWx4",
    authDomain: "chat-app-b4dc9.firebaseapp.com",
    databaseURL: "https://chat-app-b4dc9-default-rtdb.firebaseio.com",
    projectId: "chat-app-b4dc9",
    storageBucket: "chat-app-b4dc9.appspot.com",
    messagingSenderId: "497866186228",
    appId: "1:497866186228:web:72cfbc46e6211c6d91ada1",
    measurementId: "G-VMSVHN1N1H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);



let navbar = document.querySelector(".nav-icon");
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
let navBtn = document.querySelector(".btn");
let logBtn = document.querySelector(".sign-btn");
let overflow = document.querySelector(".overflow");
let responsiveNavbar = document.querySelector(".responsive-navbar")
let isExpanded = false;
const originalHeaderHeight = "";
navbar && navbar.addEventListener("click", () => {
    if (isExpanded) {
        header.style.height = originalHeaderHeight;
        navBtn.style.marginTop = "10px";
        logo.style.marginTop = "10px";
        responsiveNavbar.style.display = "none"
    } else {
        header.style.alignItems = "unset"
        header.style.height = "250px"
        header.style.transition = "0ms"
        navBtn.style.marginTop = "20px";
        logo.style.marginTop = "20px";
        console.log(responsiveNavbar)
        responsiveNavbar.style.display = "block"
        responsiveNavbar.innerHTML = `
    <div class="colum">
        <button class="home-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-house-door-fill icon" viewBox="0 0 16 16">
                <path
                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
            <span class="btn-text">
                Home
            </span></button>
        <span class="btn-text margin mt-3">
            Custom
        </span>
        <button class="home-btn mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="icon bi bi-person-fill-lock margin" viewBox="0 0 16 16">
                <path
                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
            </svg><span class="btn-text">
                Restricted
            </span>
        </button>
        <button class="sign-btn sign-btn2 mt-3">
            SIGN IN
        </button>
        </div> 
    `
    }
    isExpanded = !isExpanded;
    let logBtn2 = document.querySelector(".sign-btn2")
    logBtn2 && logBtn2.addEventListener("click", () => {
        window.location.assign("/login.html");
    })
});

logBtn && logBtn.addEventListener("click", () => {
    window.location.assign("/login.html");

})
let otherLoginHome = document.querySelector(".other-login-home");
otherLoginHome && otherLoginHome.addEventListener("click", () => {
    window.history.back()
})

let loginBtn = document.querySelector(".login-btn");
loginBtn && loginBtn.addEventListener("click", () => {
    let emailInput = document.querySelector(".email-input");
    let password = document.querySelector(".password-input");
    !emailInput.value.trim() ? emailInput.style.border = "2px solid red" : emailInput.style.border = "none"
    !password.value.trim() ? password.style.border = "2px solid red" : password.style.border = "none"
    if (emailInput.value.trim() && password.value.trim()) {
        alert()
    }
})


let craeteAnAccount = document.querySelector(".craete-an-account");
craeteAnAccount && craeteAnAccount.addEventListener("click", () => {
    window.location.assign("regiister.html");

})

let form = document.getElementById("submit-btn");
// console.log(form)
form && form.addEventListener("click", (event) => {
    event.preventDefault();
    let inputName = document.querySelector(".input-name");
    let birthdayInput = document.querySelector(".birthday-input");
    let dropdown = document.querySelector(".dropdown-gender");
    let lastName = document.querySelector(".last-name")
    let dropdownCoutry = document.querySelector(".dropdown-coutry");
    let rigisterInput = document.querySelector(".rigister-input")
    let password = document.querySelector(".password");
    let reInterPassword = document.querySelector(".re-inter-password");
    let birthday = document.querySelector(".birthday");
    let registrationDropdownDiv = document.querySelector(".drop-gender");
    let genderTextCountrty = document.querySelector(".drop-gender-country");
    let alertSuccess = document.querySelector(".alert-success")
    // let smaePassword = password , reInterPassword
    !inputName.value.trim() ? inputName.style.border = "1px solid red" : inputName.style.border = "none";
    !birthdayInput.value.trim() ? birthday.style.border = "1px solid red" : birthday.style.border = "none";
    !lastName.value.trim() ? lastName.style.border = "1px solid red" : lastName.style.border = "none"
    !rigisterInput.value.trim() ? rigisterInput.style.border = "1px solid red" : rigisterInput.style.border = "none"
    !dropdown.value.trim() ? registrationDropdownDiv.style.border = "1px solid red" : registrationDropdownDiv.style.border = "none"
    !dropdownCoutry.value.trim() ? genderTextCountrty.style.border = "1px solid red" : genderTextCountrty.style.border = "none"
    !password.value.trim() ? password.style.border = "1px solid red" : password.style.border = "none"
    !reInterPassword.value.trim() ? reInterPassword.style.border = "1px solid red" : reInterPassword.style.border = "none"
    let strongPasswordPopop = document.querySelector(".strong-password-popop")
    let emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    emailPattern.test(rigisterInput.value) ?
        password.value == reInterPassword.value ?
            inputName.value.trim() && birthdayInput.value.trim() && lastName.value.trim() && dropdown.value.trim() && dropdownCoutry.value.trim() &&
                password.value.trim() && reInterPassword.value.trim() ?

                createUserWithEmailAndPassword(auth, rigisterInput.value, reInterPassword.value)
                    .then(async (userCredential) => {

                        const user = userCredential.user;
                        console.log(user.uid)

                        // const auth = getAuth();
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                // Email verification sent!
                                // ...
                                alertSuccess.style.display = "block"


                            })
                        // await setDoc(doc(db, inputName.value, user.uid), {
                        //     name: inputName.value + lastName.value,
                        //     email: email.value
                        //   });












                        

                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                        errorMessage == "Firebase: Password should be at least 6 characters (auth/weak-password)." ?
                            strongPasswordPopop.style.display = "block" : "ok"
                        errorMessage == "Firebase: Error (auth/invalid-email)." ?
                            rigisterInput.style.border = "1px solid red" :
                            "h"
                        errorMessage == "Firebase: Error (auth/email-already-in-use)." ?
                            swal({
                                text: "Already use Email",
                            }) : "continue"
                    })


                : ""
            : reInterPassword.style.border = "1px solid red"
        : rigisterInput.style.border = "1px solid red"
})

let backAlready = document.querySelector(".already");
backAlready && backAlready.addEventListener("click", () => {
    window.history.back();

})
