document.addEventListener('DOMContentLoaded', function () {
    // Load stored messages on page load
    loadMessages();
});

function sendMessage() {
    const username = document.getElementById("username").value;
    const messageText = document.getElementById("message").value;

    if (username && messageText) {
        const message = {
            username: username,
            messageText: messageText
        };

        // Save the message to local storage
        saveMessage(message);

        // Display the message
        displayMessage(message);

        // Clear the form fields after sending a message
        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Please fill in both username and message.");
    }
}

function saveMessage(message) {
    let messages = getStoredMessages() || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function getStoredMessages() {
    return JSON.parse(localStorage.getItem('messages'));
}

function loadMessages() {
    const messages = getStoredMessages();
    if (messages) {
        messages.forEach(message => {
            displayMessage(message);
        });
    }
}

function displayMessage(message) {
    const messagesContainer = document.getElementById("messages");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const messageContent = document.createElement("p");
    messageContent.innerHTML = `<span>${message.username}:</span> ${message.messageText}`;

    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
}
