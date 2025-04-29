import { Bot, webhookCallback } from "grammy";
require("dotenv").config();

const token = process.env.BOT_TOKEN;
console.log(token);
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));

export default webhookCallback(bot, "https");

// Start the bot (using long polling)
// bot.start();
