const index = require('../index.js');
client = index.c;
const { MessageEmbed } = require('discord.js');

exports.help = message => {
    if(message.author.bot)return;
    const args = message.content.toLowerCase().split(' ');
    const cmd = args.shift();
    if(cmd != index.p +"help")return;
    const helpMess = new MessageEmbed()
        .setColor('#fab534')
        .setTitle(`${index.p}Help`)
        .setDescription('Documentation des commandes disponibles avec Al-Tair.')
        .setThumbnail('https://i.postimg.cc/nhZbcy3d/aigle.png')
        .setAuthor('Al-Tair', 'https://i.postimg.cc/nhZbcy3d/aigle.png')
        .addField(`__Informations générales:__`, `\u200B`)
        .addField(`Préfix`, `\`${index.p}\``,true)
        .addField(`Server`, `Bot uniquement disponible dans le PoopyGang`, true)
        .addField(`Surveille`, `**${client.guilds.cache.get("841455115445600317").memberCount}** personnes`, true)
        .addField(`\u200B`, `\u200B`, false)
        .addField(`__Commandes fun:__`, `\u200B`, false)
        .addField(`Ping : `, `répond \`pong\` (utile pour vérifier si le bot est en ligne)`, true)
        .addField(`Un pseudonyme : `,`des commandes personnalisées pour les meilleurs membres (Ne pas demander)`, true)
        .addField(`Q : `,`Posez une question à Al-Tair. Il a réponse à tout !`, true)
        .addField(`\u200B`, `\u200B`, false)
        .addField(`__Commandes organisation:__`, `\u200B`, false)
        .addField(`Chuchoter (PoopyGang) || anonyme (SHR Gamin) : `, `envoies \`${index.p}chuchoter\`||\`${index.p}anonyme\` à Al-Tair en message privé pour plus d'info.`, true)
        .addField(`Su: `, `Cette commande ne fonctionne __que__ dans <#878527923844427787>. Utilises-la pour proposer une idée ou débuter un sondage`, true)
        .addField(`Retour: `, `Cette commande ne fonctionne __que__ dans <#878527923844427787> et n'est utiliable __que__ par un modérateur ou un admin. Elle permet de donner un feedback sur les propositions. Envoies \`${index.p}retour\` pour plus d'info.`, true)
        .setTimestamp()
        .setFooter(`Vous êtes beaux`, 'https://i.postimg.cc/nhZbcy3d/aigle.png');
    message.author.send({ embeds: [helpMess] }).then(mess =>{ if(message.channel.type != "DM") message.delete(); })
    .catch(err =>{ 
    message.reply(`<:no:916448935948746772> Je ne peux pas t'envoyer de Dm.`,
    console.log(err)); })
}