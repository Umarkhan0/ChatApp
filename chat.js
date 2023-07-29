import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Rest of the code remains the same...

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
querySnapshot.forEach((doc) => {
  let chatCardPrint = document.querySelector(".chat-card-print");
  // console.log(chatCardPrint);
  chatCardPrint.innerHTML += `
      <div class="card m-4" style="width: 18rem;">
        <img height="50%" width="50%" src="${doc.data().images}" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${doc.data().name}</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <p class="name select-chat" id="name-get">${doc.data().name}</p>
           <label for="name-get">
          <button class="join-chat">Join Chat</button>
          </label>
        </div>
      </div>
    `;
let joinChatMembers = document.querySelectorAll(".select-chat");
joinChatMembers.forEach(joinChatMember => {
  joinChatMember.addEventListener("click", (event) => {
    // event.target.textContent = doc.data().name
    console.log(event.target.textContent); 
  });
});
})
