let coinCount = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    coinCount++;
    document.getElementById('coinCount').textContent = `You have ${coinCount} PepperCoins`;
});

Telegram.WebApp.ready();
