const index = require('../index.js');

exports.changeName = message => {
    if(message.guildid != "1005849149360590909") return;
    let args = message.content.split(' ');
	args.shift();
    args.shift();
	args= args.join(' ');
    if(args.length > 32) return console.log("error (ChangeName.js)");
    if (!message.content.toLowerCase().startsWith("je suis")) return;
    if(message.author.id =="756887056218849320"){
        message.reply(`Mais non, tu es sousou.`)
    }else if(message.author.id =="371059621688770561"){
        message.reply(`Bah non, tu es ma pu.. mon meilleur pote !`)
    }else{
        message.member.setNickname(args).then(()=>{message.reply(`Enchanté <@${message.author.id}>.`)}).catch(err=>{console.log(err)});
    }
}