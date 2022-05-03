const index = require("../index");
const client = index.c;
const { MessageEmbed } = require('discord.js');

exports.chuchotement = message => {
    //channel chuchotement
    var channel = client.channels.cache.get("917454560514146304");
    //channel identifiant 
    var channelid = client.channels.cache.get("917501926520786974");
    //Message venant d'un bot
    if(message.author.bot) return;
    //le message ne provient pas d'un DM
    if(!(message.channel.type == "DM")) return;
    //verify que message commence par "Chuchtoement"
    const args = message.content.split(' ');
    const cmd = args.shift().toLowerCase();
    args.join(" ");
    var mess;
    if(cmd != index.p + "chuchoter" && cmd != index.p + "anonyme" ) return;
    if(cmd == index.p + "anonyme"){
        channel = client.channels.cache.get("970980086956294194");
        channelid = client.channels.cache.get("970980338564227072");
    }
    if(cmd != index.p == "anonyme") SHRserver = true;
    if(args.length < 1) return message.reply(`Hello bichon !<:Love:856559537368596530>\n🎵Tu ressens le besoin de partager une histoire/info, de confier un problème, de parler de ta vie privée en tout __anonymat__ ?\n <:rightarrow:917774065769529385> Envoies \`${cmd}\` puis ce que tu veux partager !\nAttention , le message peut seulement contenir du texte et maximum __une seule__ image pour illustrer tes propos (-> pas de gifs, stickers, 2 images, etc)\n <:ban:916686563847593995> *Si le message est de nature à troll (et seulement dans ce cas), un admin pourra lever l'anonymat dans le seul but de vous sanctionner !*`);
    
    //Il faut ajouter un systeme de reaction pour voir si la personne veut que son message soit devoile ou pas dans le salon
    //rectifier les stickers
    
    const message_Starts_With_Gif_OrImage =args.join(' ').toString().toLowerCase().match(/^https:\/\/tenor\.com\/*/) || args.join(' ').toString().toLowerCase().match(/^https\:\/\/cdn\.discordapp\.com\/*/);
    const message_contain_more_than_oneAttachements = message.attachments.size > 1;
    const message_contain_oneAttachement_WITH_text =  message.attachments.size == 1 && message.content.length > 1;
    const message_contain_sticker = message.stickers.size > 0;
    var embed_with_image = false;
    const messageError = `<:no:916448935948746772> Ouch ! __Attention__, le message ne doit contenir que du texte et facultativement __une unique__ image pour illustrer tes propos (donc ni gifs, ni stickers, ni deux images , etc). <:Love:856559537368596530>`;
    if(message_contain_sticker){
        message.reply(messageError);
        return;
    } else if (message_contain_oneAttachement_WITH_text){
        embed_with_image = true;
        mess = args.join(' ');
        message.attachments.forEach(attachment => {
            ImageLink = attachment.proxyURL;
        })  
    } else if(message_Starts_With_Gif_OrImage){
        message.reply(messageError);
        return;
    } else if(message_contain_more_than_oneAttachements){
        message.reply(messageError);
        return;
    }else{
        mess = args.join(' ');
    }
    
    var chuchotement = new MessageEmbed();
    if(embed_with_image){
        chuchotement = new MessageEmbed()
            .setColor('#F91AFC')
            .addField('Chuchotement d\'un anonyme...', `${mess}`)
            .setImage(`${ImageLink}`)
            .setTimestamp()
            .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    }else{
        chuchotement = new MessageEmbed()
        .setColor('#F91AFC')
        .addField('Chuchotement d\'un anonyme...', `${mess}`)
        .setTimestamp()
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    }

    channel.send({ embeds: [chuchotement] }).then(embedMessage =>{
        embedMessage.react("856559537368596530");
        const url = embedMessage.url;
        channelid.send(`le message anonyme du \`${index.date}\` a été envoyé par ||\`${message.author.id}\`|| \n lien message : ${url}`);
        message.reply(`Ton message a été envoyé avec succès dans <#${channel}> <:Love:856559537368596530> <:Hype:856559664610541579>`)
    }).catch(err => {console.log(err)});
    
}