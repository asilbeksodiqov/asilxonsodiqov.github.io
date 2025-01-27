document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');

    const initialMessage = document.createElement('div');
    initialMessage.className = 'message bot initial-message';
    initialMessage.textContent = "Iltimos, imloviy jihatdan to'g'ri xabar yuboring, shunda sizga aniqroq yordam bera olaman.";
    chatBox.appendChild(initialMessage);
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const initialMessage = document.querySelector('.initial-message');
    
    if (userInput.value.trim() === '') return;

    if (initialMessage) {
        initialMessage.remove();
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Bot xabarini yaratish
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';

    const botLogo = document.createElement('img');
    botLogo.src = 'Asilxon Sodiqov Logo.jpg';
    botLogo.alt = 'Bot Logo';

    const botText = document.createElement('span');
    botText.textContent = getBotResponse(userInput.value);

    botMessage.appendChild(botLogo);
    botMessage.appendChild(botText);
    chatBox.appendChild(botMessage);

    // Telegram botga xabar yuborish
    sendToTelegram(userInput.value);

    // Skrollni pastga qilish
    chatBox.scrollTop = chatBox.scrollHeight;

    userInput.value = '';
    userInput.focus();
}

function getBotResponse(userInput) {
    const responses = {
        'salom': 'Salom! Sizga qanday yordam bera olaman?',
        'qalaysiz': 'Men yaxshi, rahmat! Siz-chi?',
        'xayr': 'Xayr! Sizga omad tilayman!'
    };

    userInput = userInput.toLowerCase().trim();
    return responses[userInput] || "Kechirasiz, men sizni tushunmadim. Boshqa narsa so'rab ko'ring.";
}

function sendToTelegram(message) {
    const botToken = '8054355597:AAGXFJTUFkJMPJi9qk9L61LLZoULVPxHNzU'; // Tokeningizni o'zgartiring
    const chatId = '5830723196'; // Chat ID ni kiriting

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Xabar yuborildi:', data);
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });
}

const userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
