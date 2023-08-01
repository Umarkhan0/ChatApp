import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


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

  chatCardPrint.innerHTML += `
  <div class="card m-4" style="width: 18rem;">
    <img height="50%" width="50%" src="${doc.data().images}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${doc.data().name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="main-btn">
        <button class="join-chat select-chat">Join Chat</button>
        <p class="join-chat-btn name select-chat select-chat-id" id="join">${doc.data().email}</p>
      </div>
    </div>
  </div>
`;
});

let getData = async () => {
  const docRef = doc(db, "users", event.target.textContent);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let userImgSelected = document.querySelector(".user-img-selected");
    let userNameSelected = document.querySelector(".user-name-selected");
    userNameSelected.textContent = docSnap.data().name
    userImgSelected.src = docSnap.data().images;
    console.log(docSnap.data().email)
    let chatId;
    if (localStorage.getItem("name") < docSnap.data().email) {
      chatId = localStorage.getItem("name") + docSnap.data().email
    } else {
      chatId = docSnap.data().email + localStorage.getItem("name")
    }
    console.log(chatId)


    getRealtimeUpdates(chatId)


  } else {
    console.log("No such document!");
  }
}

let joinChatMembers = document.querySelectorAll(".select-chat");
joinChatMembers.forEach(joinChatMember => {
  joinChatMember.addEventListener("click", async (event) => {
    let selectedName = event.target.textContent;
    document.querySelector(".chat-section").style.display = "block"

    let cardContant = document.querySelectorAll(".card");
    cardContant.forEach(elementCards => {
      elementCards.style.display = "none";
    });

    getData();
    let chatSection = document.querySelector(".chat-section");
    chatSection.style.display = "block";
    chatSection.innerHTML = `
    <div class="user-list-section">
      <div class="img-header">
        <div class="img-logo">
          <span class="back-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
          </span>
          <img class="img-logo-chat-page img-fluid" src="/images/6467c9529e8150.34981527_jgeopminlhqfk.png" alt="">
        </div>
        <div class="chat-member"></div>
      </div>
      <section class="chat-box">
        <div class="head-chat-selected">
          <img class="user-img-selected" src="/images/user.png" alt="Name">
          <p class="user-name-selected"></p>
        </div>
        <div class="main-messege-container container-fluid">
        <div class="messege-box">
        <div>
        <div class="margin-text-messege-sender"><p class="messege-getter">hello daer</p></div>
        <div class="msg-prrint"></div>

       </div>

        </div></div>
        <div class="footer-boxes">
          <span class="icons">
            <img height="35px" src="/images/image_icon.png" alt="">
          </span>
          <span class="icons">
            <img height="35px" src="/images/video_icon.png" alt="">
          </span>
          <span class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </span>
          <input class="icons-input" type="text" placeholder="Enter your message">
          <span class="icons sent-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
          </span>
        </div>
      </section>
    </div>
  `;
    let sentBtn = document.querySelector(".sent-btn");
    sentBtn.addEventListener("click", async () => {
      let messege = document.querySelector(".msg-prrint");
      let iconsInput = document.querySelector(".icons-input");
      messege.innerHTML += `
  <div class="margin-text-messege-getter" ><p class="messege">${iconsInput.value}</p></div>
  `;
      // console.log( event.target.textContent)

      const docRef = doc(db, "users", event.target.textContent);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let chatId;
        if (localStorage.getItem("name") < docSnap.data().email) {
          chatId = localStorage.getItem("name") + docSnap.data().email
        } else {
          chatId = docSnap.data().email + localStorage.getItem("name")
        }


        const docRefs = await addDoc(collection(db, "messege"), {
          chatId: chatId,
          messege: iconsInput.value,
        });
        console.log("Document written with ID: ", docRefs.id);

getRealtimeUpdates(chatId)
      } else {
        console.log("No such document!");
      }

















    })

    let backCard = document.querySelector(".back-card");
    backCard && backCard.addEventListener("click", async () => {
      window.location.reload()



      let waitFun = async () => {
        const q = query(collection(db, "users"), where("email", "!=", current));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let chatCardPrint = document.querySelector(".chat-card-print");
          chatCardPrint.innerHTML += `
          <div class="card m-4" style="width: 18rem;">
            <img height="50%" width="50%" src="${doc.data().images}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${doc.data().name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="main-btn">
                <button class="join-chat select-chat">Join Chat</button>
                <p class="join-chat-btn name select-chat select-chat-id" id="join">${doc.data().email}</p>
              </div>
            </div>
          </div>
        `;
        });
      };
      waitFun();
    });

    const q = query(collection(db, "users"), where("email", "!=", current));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let chatCardPrint = document.querySelector(".chat-card-print");
      let chatMember = document.querySelector(".chat-member");
      chatMember.innerHTML += `
      <p class="select-chat select-chat-page select-chat-id">${doc.data().email}</p>
      <div class="chat-name  select-chat-page">
        <img class="user-img" src="${doc.data().images}" alt="">
        <div class="name-about">
          <span class="name-show">${doc.data().name}</span>
          <span class="about-show">Say hey</span>
        </div>
      </div>
    `;
      let joinChatMembers = document.querySelectorAll(".select-chat-page");
      joinChatMembers.forEach(joinChatMember => {
        joinChatMember.addEventListener("click", () => {
          getData();
        });
      });
    });
  });
});



const qDat = query(collection(db, "cities"));

const querySnapshotD = await getDocs(qDat);
querySnapshotD.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());


let getRealtimeUpdates = async(chatID) => {
  const q = query(collection(db, "messeges"), where("chatID", "==", chatID));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    alert()
    const messeges = [];
    // querySnapshot.forEach((doc) => {
      alert()
      messeges.push(doc.data());
    // });
    console.log("messeges", messeges);
  });



}

})



