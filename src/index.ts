import 'dotenv/config';
import { Client } from 'discord.js';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});
const PREFIX = '+'

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}`);

})

client.on('messageCreate', (message) => {

    if (message.author.bot) return

    if (message.content.startsWith(PREFIX)) {

        const command = message.content.substring(PREFIX.length)
        const user = message.author.username
        if (command === 'ping') {
            message.reply(`${user} Hi i'am TypeScript`)

        } 

    }


})
client.login(process.env.BOTTOKEN)


// TO RUN npm run dev