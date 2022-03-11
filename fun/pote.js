const index = require('../index.js');

exports.pote = message => {
	const args = message.content.split(' ');
	const cmd = args.shift().toLowerCase();
	const answer = args.join(' ');
	if (cmd == index.p + 'sarah') {
		message.channel.send('La plus belle !<:ouioui:868792198492221491>');
	}
	else if (cmd == index.p + 'alex') {
		message.channel.send('Mon meilleur pote !<:ouioui:868792198492221491>');
	}
	else if (cmd == index.p + 'panda') {
		message.channel.send(`C\'est notre mascotte ! <:Frog_owi:899344705186316288>`);
	}
	else if (cmd == index.p + 'octavio') {
		message.channel.send('C\'est le S.');
	}
	else if (cmd == index.p + 'tess') {
		message.channel.send('C\'est une enchanteresse.');
	}
	else if (cmd == index.p + 'ladjil') {
		message.channel.send('Les plus beaux pieds d\'orc.');
	}
	else if (cmd == index.p + 'choco') {
		message.channel.send('Je suis sous le choc <:wtf:868461188575543296> ');
	}else if (cmd == index.p + 'say') {
		if ((message.member.roles.cache.has('841457555199754280')||(message.author.id == "517337001330999296"))) {
			const say = args.join(' ');
			message.delete();
			message.channel.send(answer);
		}
		else {
			message.delete();
			message.reply('Tu n\'es pas mon maitre.');
		}
	} else if(cmd == index.p + 'kyky'){
		message.channel.send("Il est mute plus vite que son ombre... Mais on l'aime quand même !");
	} else if(cmd == index.p + 'haznow'){
		message.author.send("Pouet !").catch(err => {console.log(err)});
	}else if (cmd == index.p + 'sun') {
		message.channel.send('Chemsouna ! <:hihi:848873245758324796>');
	}else if (cmd == index.p + 'Raven') {
		message.channel.send('La plus \"Ca va\"! 5/10 !!');
	}else if(message.toString().toLowerCase().match(/^je t\'? ?aime al\-? ?tair/)){
        if(message.author.id != "517337001330999296"){
            message.reply("Merci 😳")
            return;
        }
        message.reply("Moi aussi ❤️");
    }
};