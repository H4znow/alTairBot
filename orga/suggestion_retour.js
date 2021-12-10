const index = require('../index.js');
client = index.c;
const { MessageEmbed } = require('discord.js');

exports.suggestion_retour = message =>{
    const channelSug = "878527923844427787";
    const channel = client.channels.cache.get("878527923844427787");
    //message dans le bon channel ou pas ?
    if(message.channel.id != channelSug) return;
    //Si le message est envoye par autre que le bot et un admin et un mod, il faut le supp
    const message_send_byBot_Mod_Admin_OrHaznow = (message.author.bot) || (message.member.roles.cache.some(role => role.id === '841457555199754280')) ||
    (message.member.roles.cache.some(role => role.id === '878020576579555328')) || (message.author.id != "517337001330999296");

    var args = message.content.toLowerCase().split(' ');
    const cmd = args[0];

    if(!message_send_byBot_Mod_Admin_OrHaznow) return;
    if(cmd != index.p + "retour")return;
    if(args.length != 3){
        message.reply(`<:no:916448935948746772> Votre message doit être de la forme suivante : \`..retour\` + \`ID du message\` + \`oui/non\` `).then(msg =>{
            setTimeout(()=>{
                message.delete().then(()=>{
                    msg.delete();
                }).catch(console.log);
            },15000)
            }).catch(console.log);
        return;
    } 
    const messageID = args[1];
    const answer = args[2];
    if(!messageID.match(/^[0-9]{18}/)){
        message.reply(`<:no:916448935948746772> l'ID du message donné est incorrecter. Merci de réessayer avec un ID correcte.`).then(msg =>{
            setTimeout(()=>{
                message.delete().then(()=>{
                    msg.delete();
                }).catch(console.log);
            },15000)
            }).catch(console.log);
        return;
    }
    const answer_is_yes_or_no = (answer.match(/^oui$/)||answer.match(/^non$/));
    if(!answer_is_yes_or_no){
        message.reply(`<:no:916448935948746772> Vous devez (in)valider la suggestion avec \`oui\` ou \`non\``).then(msg =>{
            setTimeout(()=>{
                message.delete().then(()=>{
                    msg.delete();
                }).catch(console.log);
            },15000)
            }).catch(console.log);
        return;
    }
    var validation;
    if(answer == "oui"){
        validation = "Suggestion validée."
    }else{
        validation = "Suggestion non validée."
    }

    channel.messages.fetch(messageID).then(msg =>{
        const retourSugg = new MessageEmbed()
            .setColor('#fab534')
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}`)
            .addField(`__Etat suggestion :__`,`${validation}` )
            .setTimestamp()
            .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
        msg.reply({ embeds: [retourSugg] }).then(msg =>{
            message.delete();
        }).catch(console.error);
    }).catch(console.error);

}