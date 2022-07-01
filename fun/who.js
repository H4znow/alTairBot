const index = require("../index");
const client = index.c;
const { MessageEmbed, Message } = require('discord.js');
const console = require("console");

exports.who = message => {
    //if(message.guild.id != "947634438257377320") return;        //message in SHR Gaming server
    var args = message.content.split(' ');
    const cmd = args.shift().toLowerCase();
    if(cmd != index.p+"qui") return;
    args = args.join(" ");
    let argsMin = args.toLowerCase();
    //bloc pour tirer au sort un membre du server.;
    // Fetch by an array of users including their presences
    let randomUser = {}
    const guild = client.guilds.cache.get("947634438257377320");
    const users = guild.members.cache.filter(member => !(member.user.bot))
    randomUser = users.random()
    randomUser = randomUser.user;
    //
    if(argsMin.match(/ m[eè]re d[e'] ?al-? ?tair/) || argsMin.match(/ maman d[e'] ?al-? ?tair/) || argsMin.match(/ maman d[e'] ?titir/) || argsMin.match(/ m[eè]re d[e'] ?titir/) ) randomUser = "<@984086434464022589>";
    if(argsMin.match(/ p[eè]re d[e'] ?al-? ?tair/) || argsMin.match(/ papa d[^e'] ?al-? ?tair/) || argsMin.match(/ papa d[e'] ?titir/) || argsMin.match(/ p[eè]re d[e'] ?titir/) ) randomUser = "Taleb";
    if(argsMin.match(/ ta ?m[eè]re/))randomUser = "<@984086434464022589>";
    if(argsMin.match(/ ton ?p[eè]re/))randomUser = "Taleb";
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
        .addField(`**Réponse** : `, `${answer} ${randomUser}`)
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setTimestamp();
    message.channel.send({ embeds: [messAnswer] });
}