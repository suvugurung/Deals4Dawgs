document.addEventListener('DOMContentLoaded', function () {
    // Load stored messages on page load
    loadMessages();
});

function sendMessage() {
    const details = document.getElementById("details").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (details && date && time) {
        const message = {
            details: details,
            date: date,
            time: time
        };

        // Save the message to local storage
        saveMessage(message);

        // Display the message
        displayMessage(message);

        // Clear the form fields after sending a message
        document.getElementById("details").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
    } else {
        alert("Please fill in all fields.");
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
    messageContent.innerHTML = `
        <span>Details:</span> ${message.details}<br>
        <span>Date:</span> ${message.date}<br>
        <span>Time:</span> ${message.time}
    `;

    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
}
