const index = require("../index");
const { MessageEmbed } = require('discord.js');
const client = index.c;

exports.log = message => {
    if(message.channel.type == "DM") return;
    if (message.guild.id != index.poopyGangId) return;
    //channel admin
    if(message.channel.id == "865202442971250699")return;
    //Si le message vient d'un bot, return
    if(message.author.bot)return;
    const channel = client.channels.cache.get("870229804622966835");

    var mess = message.content;
    if(message.stickers.size == 1){
        mess = "Un sticker a été supprimé.";
    }else if ( message.attachments.size){
        //Si le message contient un 'attachements' (image) alors recuperer leur liens
        //Si c'est Al-Tair qui l'envoye, alors ignorez
        if(message.author.id == "867034511196160060") return;
        message.attachments.forEach(attachment => {
        const ImageLink = attachment.proxyURL;
        mess = " " + mess + ImageLink + " ";
    })}

    const messSupp = new MessageEmbed()
        .setColor('#fab534')
        .setTitle("Message supprimé")
        .setAuthor('Al-Tair', 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setThumbnail()
        .addField(`*Auteur* :`, `<@${message.author.id}> -- ${message.author.tag}`)
        .addField(`*Message* : `, `${mess}`)
        .addField(`*Salon* : `,`<#${message.channel.id}>` )
        .setFooter(`Vous êtes beaux • Message envoyé le : ${index.date} `, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
        
    channel.send({ embeds: [messSupp] });
};