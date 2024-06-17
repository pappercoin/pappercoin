const { Telegraf } = require('telegraf');
const bot = new Telegraf('7178767666:AAE3omN8-u_7FJoL9WlEq0QD30h3NWEv9Ds');

bot.start((ctx) => {
    ctx.reply('Welcome to PepperCoin! Click the button below to open the app.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open PepperCoin App', web_app: { url: 'https://pappercoin.github.io/pappercoin/' } }]
            ]
        }
    });
});

bot.launch();

let coinCount = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    coinCount++;
    document.getElementById('coinCount').textContent = `You have ${coinCount} PepperCoins`;
});

Telegram.WebApp.ready();
