import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, onSnapshot, addDoc, serverTimestamp, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


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
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {

  } else {
    window.location.assign("index.html")
  }
});

let current = localStorage.getItem("name");
const chatMember = document.querySelector(".chat-member");

chatMember.innerHTML = `
<div class="spinner-chat">
<div class="spinner-border text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
</div>
`


const q = query(collection(db, "users"), where("email", "!=", current));
const querySnapshot = await getDocs(q);
console.log("user show")
document.querySelector(".spinner-chat").style.display = "none"
querySnapshot.forEach((doc) => {
  
  chatMember.innerHTML += `
    <div onclick="selectChat('${doc.data().name}', '${doc.data().images}', '${doc.id}')">
      <div class="chat-name select-chat-page">
        <img class="user-img" src="${doc.data().images}" alt="">
        <div class="name-about">
          <span class="name-show">${doc.data().name}</span>
          <span class="about-show">Say hey</span>
        </div>
      </div>
    </div>
  `;
});

let selectChat = (selectChatName, selectChatImg, uid) => {
  let chatId;
  if (current < uid) {
    chatId = current + uid;
  } else {
    chatId = uid + current;
  }

  let chatContainor = document.getElementById("chatContainor");
  chatContainor.innerHTML = ""



  chatContainor.innerHTML = `
    <div class="spinner-chat">
    <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
    `
  let userImgSelected = document.querySelector(".user-img-selected");
  let userNameSelected = document.querySelector(".user-name-selected");
  userImgSelected.src = selectChatImg;
  userNameSelected.innerHTML = selectChatName;

  let chatbox = document.querySelector(".chat-box");
  chatbox.style.display = "block";

  getRealtimeUpdates(chatId);
  let sentBtn = document.querySelector(".sent-btn");
  sentBtn.addEventListener("click", async () => {
    // alert()
    let messege = document.querySelector(".msg-prrint");
    let iconsInput = document.querySelector(".icons-input");

    const docRef = await addDoc(collection(db, "messges"), {
      chatId,
      messege: iconsInput.value,
      sender: current,
      reciver: uid,
      time: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);

    getRealtimeUpdates(chatId)
    iconsInput.value = ""
  })
}


window.selectChat = selectChat;

let sentBtn = document.querySelector(".sent-btn");
sentBtn.addEventListener("click", async () => {
});

let getRealtimeUpdates = async (chatId) => {
  const q = query(collection(db, "messges"), where("chatId", "==", chatId), orderBy("time"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = [];
    let spinnerBorder = document.querySelector(".spinner-border");
    spinnerBorder.style.display = "none"
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());



      let chatContainor = document.getElementById("chatContainor");
      chatContainor.innerHTML = ""
      for (var i = 0; i < messages.length; i++) {

        if (current === messages[i].sender) {

          chatContainor.innerHTML += `
          <div class="message-box left-message" id= "receiver-msg">
          <div class="msg" >
          ${messages[i].messege}
          <br>
          </div>
       
         
          </div>
       `
        }
        else {
          chatContainor.innerHTML += `
          <div class="message-box right-message d-flex">
          <div class="msg1" >
          <span class="msg1">${messages[i].messege}</span>
          <br>
         
          </div>
          
          `
        }
      }
    });
  })
};

