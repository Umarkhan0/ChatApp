import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, onSnapshot, addDoc, serverTimestamp, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


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



let current = localStorage.getItem("name");

const q = query(collection(db, "users"), where("email", "!=", current));
const querySnapshot = await getDocs(q);
const chatMember = document.querySelector(".chat-member");

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
  console.log(chatId);

  let userImgSelected = document.querySelector(".user-img-selected");
  let userNameSelected = document.querySelector(".user-name-selected");
  userImgSelected.src = selectChatImg;
  userNameSelected.innerHTML = selectChatName;

  let chatbox = document.querySelector(".chat-box");
  chatbox.style.display = "block";

  getRealtimeUpdates(chatId);
  let sentBtn = document.querySelector(".sent-btn");
  sentBtn.addEventListener("click", async () => {
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
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
      let msgSender = document.querySelector(".messege");
      let meesegeResive = document.querySelector(".messege-getter");
let completePrintMessege = document.querySelector(".complete-print-messege")
      // msgSender.innerHTML = "";
      // meesegeResive.innerHTML = "";
      completePrintMessege.innerHTML = ""
      // let time = moment(messages[0].time.toDate()).fromNow();

      for (var i = 0; i < messages.length; i++) {
        

completePrintMessege.innerHTML += `
<div class="sent-messege">
         <p class="messg">${messages[i].messege}</p></div>
        
`
if (current === messages[i].sender) {
// alert()
  let sentMessege = document.querySelector(".messg");
  sentMessege.style.display = "flex"
  sentMessege.style.justifyContent = 'flex-end';
          
          }
        // if (current === messages[i].reciver) {

        // //   meesegeResive.innerHTML += `
        // // <div>  <p class="resive-messege">${messages[i].messege}</p></div>

        
      
        // }
      };
    });
  })
};


