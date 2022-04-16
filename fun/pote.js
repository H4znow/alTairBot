const index = require('../index.js');

exports.pote = message => {
	const args = message.content.split(' ');
	const cmd = args.shift().toLowerCase();
	const answer = args.join(' ');
	if (cmd == index.p + 'sarah') {
		message.channel.send('La plus belle ! <:ouioui:868792198492221491>');
	}
	else if (cmd == index.p + 'alex') {
		message.channel.send('Mon meilleur pote ! <:ouioui:868792198492221491>');
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
		message.author.send("PTDR C'EST QUI LUI ?").catch(err => {console.log(err)});
	}else if (cmd == index.p + 'sun') {
		message.channel.send('Chemsi habibati ! <:hihi:848873245758324796>');
	}else if (cmd == index.p + 'raven') {
		message.channel.send('7ayati ! <:ouioui:868792198492221491>');
	}else if(message.toString().toLowerCase().match(/^je t\'? ?aime al\-? ?tair/) || message.toString().toLowerCase().match(/al\-? ?tair^je t\'? ?aime/) || message.toString().toLowerCase().match(/<@867034511196160060> ? ?je t\'? ?aime/) ||  message.toString().toLowerCase().match(/je t\'? ?aime ?<@867034511196160060> ? ?/)){
        if(message.author.id != "517337001330999296"){
			var answer2 = " ";
			const answer_Random_Person = [`Grrrrrr`,`Merci 😳`, `Bonjour deja ?`, `On est sur Discord, pas tinder poto.`];
			number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer2 = answer_Random_Person[number];
            message.reply(answer2);
            return;
        }
        message.reply("Moi aussi ❤️");
    }else if (cmd == index.p + 'taleb'){
		message.channel.send(`El boss <:haznowCat:916772785014054912>`);
	}else if (cmd == index.p + 'taleb'){
		message.channel.send(`Quel connard <:haznowCat:916772785014054912>`);
	}else if (cmd == index.p + 'sheytasun'){
		message.channel.send(`<:sheytasun:961799016155344898>`);
	}else if (cmd == index.p + 'zetsuma') {
		message.channel.send('Notre zezet nationale ! <a:spffft:899344727281909801>');
	}else if (cmd == index.p + 'roro') {
		message.channel.send('Il vous paye votre congé en Alaska ou au Cambodge ! ✈️');
	}else if (cmd == index.p + 'nala') {
		message.channel.send('La star ! ⭐');
	}else if (cmd == index.p + 'kazuki') {
		message.channel.send('Le psy tah Lewandoski <a:note:964843749261869096>');
	}else if (cmd == index.p + 'revox') {
		message.channel.send('Tema la taille du rat <a:rat1:964843955684540496>');
	}
};