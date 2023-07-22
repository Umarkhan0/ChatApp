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
craeteAnAccount && craeteAnAccount.addEventListener("click",()=>{
    window.location.assign("regiister.html");
    
})