const index = require("../index");
const { MessageEmbed } = require('discord.js');
const client = index.c;

exports.log = message => {
    const guild = client.guilds.cache.get('841455115445600317');
    if (!guild || message.guild.id == "888134895682072619") return console.log("Je ne suis plus dans ce server ou bien ce message provient de votre server personnel.");
    const channel = client.channels.cache.get("870229804622966835");

    var mess = message.content;
    if(message.stickers.size == 1){
        mess = "Un sticker a été supprimé.";
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
        .setFooter(`Vous etes beaux • Message envoyé le : ${datetime} `, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
        
    channel.send({ embeds: [messSupp] });
};