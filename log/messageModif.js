const index = require("../index");
const { MessageEmbed } = require('discord.js');
const client = index.c;

exports.log2 = (oldMessage, newMessage) => {
    if (oldMessage.guild.id != index.poopyGangId) return;
    const channel = client.channels.cache.get("870229804622966835");
    //oldmessage
    var mess = oldMessage.content;
    if ( oldMessage.attachments.size){
        //Si le message contient un 'attachements' (image) alors recuperer leur liens
        //Id bot 
        if(oldMessage.author.id == "867034511196160060") return;
            oldMessage.attachments.forEach(attachment => {
            const ImageLink = attachment.proxyURL;
            mess =" " + mess + ImageLink + " ";
        });
    } else if(oldMessage.embeds[0]){
        mess = "Un embed.";
    } else {
        mess = oldMessage.content;
    }
    //New message
    var nMess = newMessage.content;
    if ( newMessage.attachments.size){
        //Si le message contient un 'attachements' (image) alors recuperer leur liens
        //Id bot 
        if(newMessage.author.id == "867034511196160060") return;
            newMessage.attachments.forEach(attachment => {
            const ImageLink = attachment.proxyURL;
            nMess = " " + nMess + ImageLink + " ";
        });
    } else if (newMessage.embeds[0]){
        nMess = "Un embed."
    }

    //Date
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    const messModif = new MessageEmbed()
        .setColor('#fab534')
        .setTitle("Message modifié")
        .setAuthor('Al-Tair', 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setThumbnail()
        .addField(`*Auteur* :`, `${oldMessage.author.tag}`)
        .addField(`*Ancien Message* : `, `${mess}`)
        .addField(`*Nouveau Message* : `, `${nMess}`)
        .addField(`*Salon* : `,`<#${oldMessage.channel.id}>` )
        .setFooter(`Vous êtes beaux • Message envoyé le : ${datetime}`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    channel.send({ embeds: [messModif] });
};