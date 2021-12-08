const index = require("../index");
const { MessageEmbed } = require('discord.js');
const client = index.c;

exports.log2 = (oldMessage, newMessage) => {
    if(oldMessage.channel.type == "DM") return;
    //channel admin
    if(message.channel.id == "865202442971250699")return;
    if (oldMessage.guild.id != index.poopyGangId) return;
    //Si le message vient d'un bot, return
    if(oldMessage.author.bot) return;
    const channel = client.channels.cache.get("870229804622966835");

    
    var mess = oldMessage.content;
    if ( oldMessage.attachments.size){
        //Si le message contient un 'attachements' (image) alors recuperer leur liens
        //Si c'est Al-Tair qui l'envoye, alors ignorez
        if(oldMessage.author.id == "867034511196160060") return;
            oldMessage.attachments.forEach(attachment => {
            const ImageLink = attachment.proxyURL;
            mess =" " + mess + ImageLink + " ";
        });
    }


    var nMess = newMessage.content;
    if ( newMessage.attachments.size){
        if(newMessage.author.id == "867034511196160060") return;
            newMessage.attachments.forEach(attachment => {
            const ImageLink = attachment.proxyURL;
            nMess = " " + nMess + ImageLink + " ";
        });
    }

    const messModif = new MessageEmbed()
        .setColor('#fab534')
        .setTitle("Message modifié")
        .setAuthor('Al-Tair', 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setThumbnail()
        .addField(`*Auteur* :`, `${oldMessage.author.tag}`)
        .addField(`*Ancien Message* : `, `${mess}`)
        .addField(`*Nouveau Message* : `, `${nMess}`)
        .addField(`*Salon* : `,`<#${oldMessage.channel.id}>` )
        .setTimestamp()
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    channel.send({ embeds: [messModif] });
};