const index = require("../index");
const client = index.c;
const { MessageEmbed, Message } = require('discord.js');
const console = require("console");

exports.who = message => {
    var args = message.content.split(' ');
    const cmd = args.shift().toLowerCase();

    if(cmd != index.p+"qui") return;
    
    const author = message.author;

    args = args.join(" ");
    let argsMin = args.toLowerCase();
    
    //bloc pour tirer au sort un membre du server.;
    // Fetch by an array of users including their presences
    const guild = client.guilds.cache.get(`${message.guildId}`);
    const users = guild.members.cache.filter(member => !(member.user.bot));
    let randomUser = users.random();
    let idUser = randomUser.user.id;
    let usernameUser = randomUser.user.username;
    
    //
    if(argsMin.match(/ m[eè]re d[e'] ?al-? ?tair/) || argsMin.match(/ maman d[e'] ?al-? ?tair/) || argsMin.match(/ maman d[e'] ?titir/) || argsMin.match(/ m[eè]re d[e'] ?titir/) ) randomUser = "<@984086434464022589>";
    if(argsMin.match(/ p[eè]re d[e'] ?al-? ?tair/) || argsMin.match(/ papa d[^e'] ?al-? ?tair/) || argsMin.match(/ papa d[e'] ?titir/) || argsMin.match(/ p[eè]re d[e'] ?titir/) ) randomUser = "Taleb";
    if(argsMin.match(/ ta m[eè]re/))randomUser = "<@984086434464022589>";
    if(argsMin.match(/ ton p[eè]re/))randomUser = "Taleb";
    
    //Answers
    const answerList =["C'est ", "Certainement ", "", "Je dirai ", "Je mettrai une pièce sur ", "100% c'est ", "Ce n'est pas ", "Humm, il est probable que ca soit "];
    number = Math.floor(Math.random() * (answerList.length) );
    var answer = answerList[number];

    //embed
    const messAnswer = new MessageEmbed()
        .setColor('#fab534')
        .setAuthor({ name: `${author.username}`, iconURL: `${author.displayAvatarURL()}`, 
        url: 'https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran.js.org' })
        .setThumbnail()
        .addFields( {name :`**Question** :`, value :`Qui ${args}`},
                    {name :`**Réponse** : `, value :`${answer} <@${idUser}> (${usernameUser})`}
                )
        .setFooter({text :`Vous êtes beaux`, iconURL : 'https://i.postimg.cc/nhZbcy3d/aigle.png'})
        .setTimestamp();
    message.channel.send({ embeds: [messAnswer] });
}