const index = require('../index.js');
const client = index.c;
const { MessageEmbed } = require('discord.js');

exports.suggestion = message => {
    const channelSug = "878527923844427787";
    const channel = client.channels.cache.get("878527923844427787");
    //message dans le bon channel ou pas ?
    if(message.channel.id != channelSug) return;
    //Si le message est envoye par autre que le bot et un admin et un mod, il faut le supp
    const message_send_byBot_Mod_Admin_OrHaznow = (message.author.bot) || (message.member.roles.cache.some(role => role.id === '841457555199754280')) ||
    (message.member.roles.cache.some(role => role.id === '878020576579555328')) || (message.author.id != "517337001330999296");

    if(!message_send_byBot_Mod_Admin_OrHaznow){
        message.delete();
    }else{
        if(message.content.startsWith(index.p+"su")){
            message.delete();
        }
    }

    const args = message.content.split(' ');
    const cmd = args.shift();
    //Si le message n'a pas d'argument ou la mauvaise commande, le programme stopp
    if(args.length < 1 || cmd != index.p + "su" ) return;
    const messSu = new MessageEmbed()
        .setColor('#fab534')
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}`)
        .addField(`__Suggestion__ :`,`${args.join(' ')}` )
        .setTimestamp()
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    channel.send({ embeds: [messSu] }).then(embedMessage => {
        embedMessage.react("916449164517335101");
        embedMessage.react("916448935948746772");
    }).catch(console.error);
}