document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        document.getElementById('chat-box').appendChild(userMessage);
        
        // Clear input field
        document.getElementById('user-input').value = '';
        
        // Simulate AI response
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = `You said: "${userInput}" (This is a placeholder response.)`;
        document.getElementById('chat-box').appendChild(botMessage);

        // Scroll to bottom
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
});
document.getElementById('send-button').addEventListener('click', sendMessage);


// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        document.getElementById('chat-box').appendChild(userMessage);
        
        // Clear input field
        document.getElementById('user-input').value = '';
        
        // Simulate AI response
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = `You said: "${userInput}" (This is a placeholder response.)`;
        document.getElementById('chat-box').appendChild(botMessage);

        // Scroll to bottom
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
}

// Optional: Handle "Enter" key press for sending messages
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents new line in the textarea
        sendMessage();
    }
});
function confirmSlot(button) {
    // Change button text to "Confirmed"
    button.textContent = 'Confirmed';

    // Disable the button to prevent further clicks
    button.disabled = true;

    // Optionally change the styling
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';
}

