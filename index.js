// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token} = require('./config.json');

// Create a new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", 
"DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"], partials: ['MESSAGE', 'CHANNEL'], });
const poopyGangId = "841455115445600317"
exports.poopyGangId = poopyGangId;
exports.c = client;
exports.p = "..";

// When the client is ready, run this code (only once)

client.once('ready', () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
        var nombreMembre = client.guilds.cache.get("841455115445600317").memberCount;
        var affichage = 0;
        client.user.setActivity('twitch.tv/hazzuna_', { type: 'WATCHING' });
        setInterval(()=>{
                if(!affichage){
                        nombreMembre = client.guilds.cache.get("841455115445600317").memberCount;
                        client.user.setActivity(`${nombreMembre} membres`, { type: 'WATCHING' });
                        affichage = 1;
                } else {
                        client.user.setActivity('twitch.tv/hazzuna_', { type: 'WATCHING' });
                        affichage = 0;
                }
        },600000)
});

//code

client.on("messageCreate", require("./fun/ping").fun);
client.on("messageCreate", require("./fun/pote").pote);
client.on("messageDelete", require("./log/messageSupp").log);
client.on("messageUpdate", require("./log/messageModif").log2);
client.on("messageCreate", require("./fun/react").react);
client.on("messageCreate", require("./orga/suggestion").suggestion);
client.on("messageCreate", require("./orga/suggestion_retour").suggestion_retour);
client.on("messageCreate", require("./orga/chuchotement").chuchotement);
client.on("messageCreate", require("./fun/discuDm").dmDiscu);
client.on("messageCreate", require("./orga/help").help);

//test
//client.on("messageCreate", require("./test").test);

// Login to Discord with your client's token
client.login(token);


var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
exports.date = datetime;