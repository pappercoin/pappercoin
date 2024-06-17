const { Telegraf } = require('telegraf');
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

bot.start((ctx) => {
    ctx.reply('Welcome to PepperCoin! Click the button below to open the app.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open PepperCoin App', web_app: { url: 'https://<твоё-имя-пользователя>.github.io/<имя-репозитория>' } }]
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
