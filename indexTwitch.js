const tmi = require('tmi.js');
const dotenv = require('dotenv');

dotenv.config();

// Define configuration options
const opts = {
    identity: {
        username: 'Al-Tair',
        password: process.env.TTV_TOKEN
    },
    channels: [
        'haznow', 'hazzuna_'
    ]
};
exports.p_ttv = "..";


// Create a client with our options
const client = new tmi.client(opts);
exports.c_ttv = client;

// Register our event handlers (defined below)
client.on('message', require("./funTv/modsJokes").modsJokes);


client.on('connected', (addr, port) =>{
    console.log(`* Al-Tair_TTV is ready on ${addr}:${port}`);
});

// Connect to Twitch:
client.connect();

