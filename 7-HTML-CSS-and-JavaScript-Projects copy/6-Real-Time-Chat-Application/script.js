const socket = new WebSocket('ws://localhost:8080');

// Store the username for the current client
const username = `Abby`; // Assign a random username for demonstration

// Event handler for receiving messages from the server
socket.onmessage = function (event) {
    const chatBox = document.getElementById('chat-box');
    const data = JSON.parse(event.data); // Parse the incoming JSON message

    // Skip rendering messages sent by this client
    if (data.username === username) return;

    // Create and style the received message
    const message = document.createElement('div');
    message.classList.add('message', 'received'); // Style as received message
    message.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
};

// Function to send a message from the client
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message !== '') {
        // Append the message locally as a sent message
        const chatBox = document.getElementById('chat-box');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message'); // Style as sent message
        messageDiv.innerHTML = `${message} <strong>:${username}</strong>`;
        chatBox.appendChild(messageDiv);

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message

        // Send the message to the WebSocket server
        socket.send(JSON.stringify({ username, message }));

        // Clear the input field
        messageInput.value = '';
    }
}
