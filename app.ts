let users = document.querySelectorAll(".uer-pro");
users.forEach(element => {
    element.addEventListener("click",()=>{
       
    
        let blockcontainer = document.querySelector(".block-container")! as HTMLElement
        blockcontainer.style.display = "none";
        let chatContainer = document.querySelector(".chat-container")! as HTMLElement
        chatContainer.style.display = "block"
        chatContainer.innerHTML = `
        <div class="fiexed">
        <header class="header">
        <div class="profile-image-name">
<span id="back-btn"> < </span>
<img class="profile-image" height="40px" src="https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180" alt="">
<span>Name</span>
        </div>
</div>
    </header>
    <div class="messge-print-sec">
    <p>nurcnudcewr</p>
    </div>
    <div class="messge-print" id="sent-messege">
    
   

    </div>
   
    <div class="input-container">
    <input type="text" class="messege-type">
    <img class="sent-btn" height="40px" src="https://www.kindpng.com/picc/m/150-1509137_send-message-whatsapp-send-icon-png-transparent-png.png" alt="">
    </div>
        `
    
   
        let backBtn = document.querySelector("#back-btn")!;
        backBtn.addEventListener("click",()=>{
            chatContainer.style.display = "none";
            blockcontainer.style.display = "block"
        });
        let sentBtn = document.querySelector(".sent-btn")!;
    let messege = document.querySelector(".messege-type")! as HTMLInputElement;
    sentBtn.addEventListener("click",()=>{
        let sentMessege = document.querySelector("#sent-messege")! as HTMLInputElement;
        sentMessege.innerHTML += `
       <p> ${messege.value}</p>
        `  
    console.log(messege.value)

   
    

    })
});
});