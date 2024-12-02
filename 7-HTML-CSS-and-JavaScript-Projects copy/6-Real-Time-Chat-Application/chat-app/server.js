const WebSocket = require('ws');
const readline = require('readline');

// Create WebSocket server
const server = new WebSocket.Server({ port: 8080 });

// Track connected clients
const clients = [];

server.on('connection', (socket) => {
    console.log('Client connected');
    clients.push(socket); // Add new client to clients array

    // Send a welcome message to the newly connected client
    // socket.send(JSON.stringify({ username: 'Bot', message: 'Welcome to the chat room!' }));

    // Listen for messages from clients
    socket.on('message', (data) => {
        const message = JSON.parse(data); // Parse the incoming message
        console.log(`Received from ${message.username}: ${message.message}`);

        // Broadcast the message to all connected clients
        broadcastMessage(message);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
        // Remove the client from the array on disconnect
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});

// Function to broadcast a message to all clients
function broadcastMessage(message) {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

// Set up readline interface to send messages from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Listen for terminal input and broadcast the input to all clients
rl.on('line', (input) => {
    console.log(`Sending message from terminal: ${input}`);
    broadcastMessage({ username: 'JK', message: input });
});

console.log('WebSocket server is running on ws://localhost:8080');
