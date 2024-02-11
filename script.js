function sendMessage() {
    const username = document.getElementById("username").value;
    const messageText = document.getElementById("message").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (username && messageText && date && time) {
        const messagesContainer = document.getElementById("messages");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        const messageContent = document.createElement("p");
        messageContent.innerHTML = `<span>${username}:</span> ${messageText}<br>Date: ${date} | Time: ${time}`;

        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // Clear the form fields after sending a message
        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
    } else {
        alert("Please fill in all fields.");
    }
}