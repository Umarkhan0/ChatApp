import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, doc, getDocs, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
let logBtnName = document.querySelector(".sign-btn2")
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
    }
    else {
        header.style.alignItems = "unset"
        header.style.height = "250px"
        header.style.transition = "0ms"
        navBtn.style.marginTop = "20px";
        logo.style.marginTop = "20px";
        console.log(responsiveNavbar)
        responsiveNavbar.style.display = "block"
    }
    isExpanded = !isExpanded;
    let logBtn2 = document.querySelector(".sign-btn2");
    logBtn2 && logBtn2.addEventListener("click", () => {
        window.location.assign("/login.html");
    });
});
logBtn && logBtn.addEventListener("click", () => {
    window.location.assign("/login.html");
});
let otherLoginHome = document.querySelector(".other-login-home");
otherLoginHome && otherLoginHome.addEventListener("click", () => {
    window.history.back()
});
let loginBtn = document.querySelector(".login-btn");
loginBtn && loginBtn.addEventListener("click", () => {
    let emailInput = document.querySelector(".email-input");
    let password = document.querySelector(".password-input");
    !emailInput.value.trim()
        ?
        emailInput.style.border = "2px solid red"
        :
        emailInput.style.border = "none"
    !password.value.trim()
        ?
        password.style.border = "2px solid red"
        :
        password.style.border = "none"
    if
        (emailInput.value.trim()
        &&
        password.value.trim()) {
        alert()
    }
});
let craeteAnAccount = document.querySelector(".craete-an-account");
craeteAnAccount && craeteAnAccount.addEventListener("click", () => {
    window.location.assign("regiister.html");
});
let form = document.getElementById("submit-btn");
form
    &&
    form.addEventListener("click", (event) => {
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
        !inputName.value.trim()
            ?
            inputName.style.border = "1px solid red"
            :
            inputName.style.border = "none";
        !birthdayInput.value.trim()
            ?
            birthday.style.border = "1px solid red"
            :
            birthday.style.border = "none";
        !lastName.value.trim()
            ?
            lastName.style.border = "1px solid red"
            :
            lastName.style.border = "none"
        !rigisterInput.value.trim()
            ?
            rigisterInput.style.border = "1px solid red"
            :
            rigisterInput.style.border = "none"
        !dropdown.value.trim()
            ?
            registrationDropdownDiv.style.border = "1px solid red"
            :
            registrationDropdownDiv.style.border = "none"
        !dropdownCoutry.value.trim()
            ?
            genderTextCountrty.style.border = "1px solid red" : genderTextCountrty.style.border = "none"
        !password.value.trim()
            ?
            password.style.border = "1px solid red"
            :
            password.style.border = "none"
        !reInterPassword.value.trim()
            ?
            reInterPassword.style.border = "1px solid red"
            :
            reInterPassword.style.border = "none"
        let strongPasswordPopop = document.querySelector(".strong-password-popop")
        let emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        emailPattern.test(rigisterInput.value)
            ?
            password.value == reInterPassword.value
                ?
                inputName.value.trim()
                    &&
                    birthdayInput.value.trim()
                    &&
                    lastName.value.trim()
                    &&
                    dropdown.value.trim()
                    &&
                    dropdownCoutry.value.trim()
                    &&
                    password.value.trim()
                    &&
                    reInterPassword.value.trim()
                    ?
                    createUserWithEmailAndPassword(auth, rigisterInput.value, reInterPassword.value)
                        .then(async (userCredential) => {
                            const user = userCredential.user;
                            localStorage.setItem("id", user.uid)
                            localStorage.setItem("name", inputName.value)
                            await setDoc(doc(db, inputName.value, user.uid), {
                                name: inputName.value + lastName.value,
                                email: rigisterInput.value,
                                birtday: birthdayInput.value,
                                gender: dropdown.value,
                                country: dropdownCoutry.value
                            });
                        })
                        .catch(async (error) => {
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
backAlready
    &&
    backAlready.addEventListener("click", () => {
        window.history.back();

    })
let userLogoutOption1 = document.querySelector(".user-logout-option1");
let userLogoutOption2 = document.querySelector(".user-logout-option2");
let getName = localStorage.getItem("name");
let getUid = localStorage.getItem("id");
getName != null ?
    userLogoutOption1.innerHTML =
    ` <button class="sign-btn option1 mt-3">
                          ${getName}
                      </button>
                      <div class="more-option2">
                      `
    : ""
getName != null ?
    userLogoutOption2.innerHTML =
    ` <button class="sign-btn option1">
                      ${getName}
                      </button>

                      <div class="more-option">
                  `
    : logBtn.innerHTML =
    " SIGN IN"
let opion1 = document.querySelectorAll(".option1");
opion1.forEach(element => {
    var checkhogya = false;
    element.addEventListener("click", () => {
        let moreOption = document.querySelector(".more-option");
        if (checkhogya) {
            moreOption.style.display = "none";
        }
        else {
            moreOption.style.display = "block";
            moreOption.innerHTML =
                `
                <div class="log-container">
<div class="log-out">
<button class="profile-text-icon">
<svg class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
Profile
</button>
<br />
<button class="log-out-text">
<svg  class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
<span>
Logout
</span>
</div>
</button>
</div>
        `
        };
        checkhogya = !checkhogya;
        let moreOption2 = document.querySelector(".more-option2");
        if (checkhogya) {
            moreOption2.style.display = "none"
        }
        else {
            moreOption2.style.display = "block"
            moreOption2.innerHTML =
                `
        <div class="log-out">
        <button class="profile-text-icon">
        <svg class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>Profile
        </button>
        <br />
        <button class="log-out-text">
        <svg  class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg><span>Logout</span>
        </div>
        </button>
                `
        };
    });
});

