const index = require("../index");
const client = index.c;
const { MessageEmbed, Message } = require('discord.js');
const console = require("console");

exports.who = message => {
    if(message.guild.id != "947634438257377320") return;        //message in SHR Gaming server
    var args = message.content.split(' ');
    const cmd = args.shift().toLowerCase();
    console.log("wsh")
    if(cmd != index.p+"qui") return;
    args = args.join(" ");
    
    //bloc pour tirer au sort un membre du server.;
    // Fetch by an array of users including their presences
    let randomUser = {}
    const guild = client.guilds.cache.get("947634438257377320");
    const users = guild.members.cache.filter(member => !(member.user.bot))
    randomUser = users.random()

    //Answers
    const answerList =["C'est ", "Certainement ", "", "Je dirai ", "Je mettrai une pièce sur ", "100% c'est ", "Ce n'est pas "];
    number = Math.floor(Math.random() * (answerList.length) );
    var answer = answerList[number];

    //embed
    const messAnswer = new MessageEmbed()
        .setColor('#fab534')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setThumbnail()
        .addField(`**Question** :`, `Qui ${args}`)
        .addField(`**Réponse** : `, `${answer} ${randomUser.user}`)
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setTimestamp();
    message.channel.send({ embeds: [messAnswer] });
}