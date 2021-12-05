const index = require("../index");
const { MessageEmbed } = require('discord.js');
const client = index.c;

exports.log = message => {
    
    if (message.guild.id != index.poopyGangId) return;
    const channel = client.channels.cache.get("870229804622966835");

    var mess = message.content;
    if(message.stickers.size == 1 || message.embeds[0]){
        mess = "Un sticker/un embed a été supprimé.";
    }else if ( message.attachments.size){
        //Si le message contient un 'attachements' (image) alors recuperer leur liens
        //Id bot 
        if(message.author.id == "867034511196160060") return;
        message.attachments.forEach(attachment => {
        const ImageLink = attachment.proxyURL;
        mess = " " + mess + ImageLink + " ";
    })}

    //Date
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    

    const messSupp = new MessageEmbed()
        .setColor('#fab534')
        .setTitle("Message supprimé")
        .setAuthor('Al-Tair', 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setThumbnail()
        .addField(`*Auteur* :`, `<@${message.author.id}> -- ${message.author.tag}`)
        .addField(`*Message* : `, `${mess}`)
        .addField(`*Salon* : `,`<#${message.channel.id}>` )
        .setFooter(`Vous êtes beaux • Message envoyé le : ${datetime} `, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
        
    channel.send({ embeds: [messSupp] });
};