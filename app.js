var users = document.querySelectorAll(".uer-pro");
users.forEach(function (element) {
    element.addEventListener("click", function () {
        var blockcontainer = document.querySelector(".block-container");
        blockcontainer.style.display = "none";
        var chatContainer = document.querySelector(".chat-container");
        chatContainer.style.display = "block";
        chatContainer.innerHTML = "\n        <div class=\"fiexed\">\n        <header class=\"header\">\n        <div class=\"profile-image-name\">\n<span id=\"back-btn\"> < </span>\n<img class=\"profile-image\" height=\"40px\" src=\"https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180\" alt=\"\">\n<span>Name</span>\n        </div>\n</div>\n    </header>\n    <div class=\"messge-print-sec\">\n    <p>nurcnudcewr</p>\n    </div>\n    <div class=\"messge-print\" id=\"sent-messege\">\n    \n   \n\n    </div>\n   \n    <div class=\"input-container\">\n    <input type=\"text\" class=\"messege-type\">\n    <img class=\"sent-btn\" height=\"40px\" src=\"https://www.kindpng.com/picc/m/150-1509137_send-message-whatsapp-send-icon-png-transparent-png.png\" alt=\"\">\n    </div>\n        ";
        var backBtn = document.querySelector("#back-btn");
        backBtn.addEventListener("click", function () {
            chatContainer.style.display = "none";
            blockcontainer.style.display = "block";
        });
        var sentBtn = document.querySelector(".sent-btn");
        var messege = document.querySelector(".messege-type");
        sentBtn.addEventListener("click", function () {
            var sentMessege = document.querySelector("#sent-messege");
            sentMessege.innerHTML += "\n       <p> ".concat(messege.value, "</p>\n        ");
            console.log(messege.value);

            const element = document.querySelector('.messge-print');

            // Function to scroll to the bottom of the element
            function scrollToBottom() {
              element.scrollTop = element.scrollHeight;
            }
            
            // Scroll to the bottom initially
            scrollToBottom();
            
           

        });
    });
});
