function sendMessage() {
    const username = document.getElementById("username").value;
    const messageText = document.getElementById("message").value;

    if (username && messageText) {
        const messagesContainer = document.getElementById("messages");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        const messageContent = document.createElement("p");
        messageContent.innerHTML = `<span>${username}:</span> ${messageText}`;

        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // Clear the form fields after sending a message
        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Please enter both username and message.");
    }
}
