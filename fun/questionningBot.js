const index = require('../index.js');
const { MessageEmbed } = require('discord.js');

exports.questionning = message =>{
    if(message.author.bot)return;
    var args = message.content.split(' ');
    const cmd = args.shift().toLowerCase();
    if(!(cmd === index.p+"q")) return;
    args = args.join(" ");
    const answer= ["Oui.", "Probablement.", "Non.", "C'est certain.", "Impossible.", "C'est certainement vrai.", "Je ne sais pas...", "Google existe.", "J'aurais tendance à dire non.", "La fameuse question a 1M.", "C'est un non.", "Vraiment pas.", "Je ne sais pas.", "Ouais.", "Mais oui bien sur !... Non.", "J'aime vraiment pas l'idée.", "C'est une très bonne chose !", "Demandez a Aya.", "J'ai une tête à tout savoir moi ?", "Tant que Matatouya ne dit pas I love u, je ne répondrai pas !"]
    const messAnswer = new MessageEmbed()
        .setColor('#fab534')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setThumbnail()
        .addField(`**Question** :`, `${args}`)
        .addField(`**Réponse** : `, `${answer[Math.floor(Math.random() * (answer.length) )]}`)
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setTimestamp();
    message.channel.send({ embeds: [messAnswer] });
}