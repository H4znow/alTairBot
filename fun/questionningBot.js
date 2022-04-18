const index = require('../index.js');
const { MessageEmbed } = require('discord.js');

exports.questionning = message =>{
    if(message.author.bot)return;
    if(!(message.content.startsWith(index.p+"q")||message.content.startsWith(index.p+"Q"))) return;
    const args = message.content.split(' ');
    args.shift();
    const answer= ["Oui.", "Probablement.", "Non.", "C'est certain.", "Impossible.", "C'est certainement vrai.", "Je ne sais pas...", "Google existe.", "J'aurais tendance à dire non.", "La fameuse question a 1M."]
    const messAnswer = new MessageEmbed()
        .setColor('#fab534')
        .setAuthor(`${message.author.username}#${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setThumbnail()
        .addField(`**Question** :`, `${args.join(" ")}`)
        .addField(`**Réponse** : `, `${answer[Math.floor(Math.random() * (answer.length) )]}`)
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setTimestamp();
    message.channel.send({ embeds: [messAnswer] });
}