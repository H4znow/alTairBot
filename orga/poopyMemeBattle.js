const index = require("../index");
const client = index.c;

exports.battle = message => {
    //Message venant d'un bot
    if(message.author.bot) return;
    //le message ne provient pas du salon meme
    if((message.channel.id != "954105008364867664")) return;
    
    if(message.attachments.size > 0 || message.content.startsWith("https://cdn.discordapp.com/attachments/")){
        message.react('<:kek:874343378031112233>')
            .then(() => message.react('<:no:916448935948746772>'))
            .catch(err=> client.users.get("517337001330999296").send(`Erreur reaction pour meme dans Poopy Meme Battle : \n ${err}`));
        return;
    } else {return;}
}