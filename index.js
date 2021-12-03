// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
exports.c = client;

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('twitch.tv/hazzuna_', { type: 'WATCHING' });
});

// Login to Discord with your client's token
client.login(token);