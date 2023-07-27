import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, doc, getDocs, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
const storage = getStorage(app);
onAuthStateChanged(auth, (user) => {
    if (user) {
        let userLogoutOption3 = document.querySelector(".user-logout-option1");
        let userLogoutOption4 = document.querySelector(".user-logout-option2");
        if(userLogoutOption4){ 
        userLogoutOption4.innerHTML =
                ` <button class="sign-btn">
              
                              Loding...
                              </button>`}
                              if(userLogoutOption3){
                              userLogoutOption3.innerHTML =
                ` <button class="sign-btn mt-3">
              
                              Loding...
                              </button>`
                            }
    } else {
      // User is signed out
      // ...
      console.log("sign out")
    }
  });
let profileNameInput = document.querySelector(".profile-name-input");
let profileBirthdayInput = document.querySelector(".profile-birthday-input");
let profileLastName = document.querySelector(".last-name-input");
let profileEmailInput = document.querySelector(".profile-email-input");
let profileCountryInput = document.querySelector(".country-input");
let dropdownGenderProfile = document.querySelector(".dropdown-gender-profile");






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
        let emailSet = emailInput.value
      
        signInWithEmailAndPassword(auth, emailInput.value, password.value)
            .then(async (userCredential) => {

                const user = userCredential.user;
                window.location.assign("index.html");
                localStorage.setItem("id", user.uid)
                localStorage.setItem("name", `${emailSet}`);
                console.log("sign in")
                // ...

              
                let getName = localStorage.getItem("name")
                let getUid = localStorage.getItem("id");
                const querySnapshott = await getDocs(collection(db, getName));
                querySnapshott.forEach((doc) => {
                    userLogoutOption1 &&
                        getName != null ?

                        userLogoutOption1.innerHTML =
                        ` <button class="sign-btn option1 mt-3">
                        helo
                                          ${doc.data().name}
                                      </button>
                                      <div class="more-option2">
                                      `
                        : ""
                    userLogoutOption2 &&
                        getName != null ?
                        userLogoutOption2.innerHTML =
                        ` <button class="sign-btn option1">
                      
                                      ${doc.data().name}
                                      </button>
                
                                      <div class="more-option">
                                  `
                        :
                        " SIGN IN";
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

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
        // let textLightSpinner = document.querySelector(".text-light");
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
                            let saveNameDataBase = rigisterInput.value

                            localStorage.setItem("name", saveNameDataBase)
                            await setDoc(doc(db, saveNameDataBase, user.uid), {
                                name: inputName.value,
                                lastName: lastName.value,
                                email: rigisterInput.value,
                                birtday: birthdayInput.value,
                                gender: dropdown.value,
                                country: dropdownCoutry.value,
                                images: "images/user.png"
                            });
                            // textLightSpinner.style.display = "none"
                            window.location.assign("index.html");
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
                                swal(errorMessage.slice(15))
                                : "continue"
                        })
                    : ""
                : reInterPassword.style.border = "1px solid red"
            : rigisterInput.style.border = "1px solid red"
    })
let backAlready = document.querySelector(".already");
backAlready
    &&
    backAlready.addEventListener("click", async () => {
        window.history.back();
    });
let userLogoutOption1 = document.querySelector(".user-logout-option1");
let userLogoutOption2 = document.querySelector(".user-logout-option2");
let getName = localStorage.getItem("name")
let getUid = localStorage.getItem("id");
const querySnapshott = await getDocs(collection(db, getName));

querySnapshott.forEach((doc) => {
    userLogoutOption1 &&
        getName != null ?

        userLogoutOption1.innerHTML =
        ` <button class="sign-btn option1 mt-3">
                          ${doc.data().name}
                      </button>
                      <div class="more-option2">
                      `
        : ""

    userLogoutOption2 &&
        getName != null ?
        userLogoutOption2.innerHTML =
        ` <button class="sign-btn option1">
                      ${doc.data().name}
                      </button>

                      <div class="more-option">
                  `
        :
        " SIGN IN"
})
let opion1 = document.querySelectorAll(".option1");
opion1.forEach(element => {
    var checkhogya = false;
    element.addEventListener("click", () => {
        let moreOption = document.querySelector(".more-option");
        moreOption.innerHTML =
            `
        <div class="log-container">
<div class="log-out">
<button class="profile-text-icon profile-btn">
<svg class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
<span>
Profile
</span>
</button>
<br />
<button class="log-out-text log-out-user2">
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
        if (checkhogya) {
            moreOption.style.display = "none";
        }
        else {
            moreOption.style.display = "block";

        };
        checkhogya = !checkhogya;
        let moreOption2 = document.querySelector(".more-option2");
        moreOption2.innerHTML =
            `
        <div class="log-out">
        <button class="profile-text-icon profile-btn">
        <svg class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>
<span>
        Profile
        </span>
        </button>
        <br />
        <button class="log-out-text log-out-user2">
        <svg  class="icon-profile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg><span>Logout</span>
        </div>
        </button>
                `
        let btncs = document.querySelectorAll(".log-out-user2");
        btncs.forEach(elementLogOut => {
            elementLogOut.addEventListener("click", () => {
                localStorage.clear();
                signOut(auth).then(() => {
                    //    console.log("hogia sign out")
                    window.location.reload()
                }).catch((error) => {
                    // An error happened.
                });

            });

        });
        let profileBtn = document.querySelectorAll(".profile-btn");
        profileBtn.forEach(profileBtnElement => {
            profileBtnElement.addEventListener("click", async () => {

                window.location.assign("profile.html")
            });
        });
        if (checkhogya) {
            moreOption2.style.display = "none"
        }
        else {
            moreOption2.style.display = "block"

        };


    });

});
let localNameCollection = localStorage.getItem("name")
const querySnapshot = await getDocs(collection(db, localNameCollection));
querySnapshot.forEach((doc) => {
    let loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
        let propicture = document.querySelector(".pro-img")
        propicture.src = doc.data().images
        profileNameInput.value = doc.data().name;
        profileLastName.value = doc.data().lastName;
        profileEmailInput.value = doc.data().email;
        profileBirthdayInput.value = doc.data().birtday;
        profileCountryInput.value = doc.data().country
        dropdownGenderProfile.value = doc.data().gender;
    }
});
let dmcc = document.querySelector(".input-file")
let profileImg = document.querySelector("#fileInput");
profileImg && profileImg.addEventListener("change", () => {
    console.log(profileImg.files.name = `${localNameCollection}.png`)
    if (profileImg.files[0].type == "image/png" || profileImg.files[0].type == "image/jpeg") {

        let propicture = document.querySelector(".pro-img")
        const mountainImagesRef = ref(storage, profileImg.files.name = `${localNameCollection.slice(0, 4)}.png`);

        const uploadTask = uploadBytesResumable(mountainImagesRef, profileImg.files[0]);


        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                    console.log('File available at', downloadURL);

                    let localNameUpdateCollection = localStorage.getItem("name")
                    let localIdUpdateCollection = localStorage.getItem("id")
                    const washingtonRef = doc(db, localNameUpdateCollection, localIdUpdateCollection)
                    await updateDoc(washingtonRef, {
                        images: downloadURL,
                    });
                    propicture.src = URL.createObjectURL(profileImg.files[0]);
                });
            });
    };
});
let btnUpdate = document.querySelector(".btn-update");
btnUpdate && btnUpdate.addEventListener("click", async () => {
    !profileNameInput.value.trim() ?
        profileNameInput.style.border = "1px solid red" :
        profileNameInput.style.border = "none"
    !profileLastName.value.trim() ?
        profileLastName.style.border = "1px solid red" :
        profileLastName.style.border = "none"

    !profileBirthdayInput.value.trim() ?
        profileBirthdayInput.style.border = "1px solid red" :
        profileBirthdayInput.style.border = "none"
    let localNameUpdateCollection = localStorage.getItem("name")
    let localIdUpdateCollection = localStorage.getItem("id")

    const washingtonRef = doc(db, localNameUpdateCollection, localIdUpdateCollection)
    if (profileNameInput.value.trim() && profileLastName.value.trim() && profileBirthdayInput.value.trim())
        try {
            await updateDoc(washingtonRef, {
                name: profileNameInput.value,
                lastName: profileLastName.value,
                email: profileEmailInput.value,
                country: profileCountryInput.value,
                gender: dropdownGenderProfile.value,
                birtday: profileBirthdayInput.value
            });
            window.location.assign("index.html")
        }
        catch (error) {
            console.log(error)
        }
});





// let userLogoutOption3 = document.querySelector(".user-logout-option1");
// let userLogoutOption4 = document.querySelector(".user-logout-option2");
// if(userLogoutOption4){ 
// userLogoutOption4.innerHTML =
//         ` <button class="sign-btn">
      
//                       Loding...
//                       </button>`}
//                       if(userLogoutOption3){
//                       userLogoutOption3.innerHTML =
//         ` <button class="sign-btn mt-3">
      
//                       Loding...
//                       </button>`}