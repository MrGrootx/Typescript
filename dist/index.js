"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});
const PREFIX = process.env.PREFIX;
client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}`);
});
client.on('messageCreate', (message) => {
    if (message.author.bot || !message.content.startsWith(PREFIX))
        return;
    const [command, ...args] = message.content.slice(PREFIX.length).trim().split(/ +/);
    if (command === 'hello') {
        message.reply('Hello!');
    }
    else if (command === 'ping') {
        message.reply('Pong!');
    }
});
client.login(process.env.BOTTOKEN);
