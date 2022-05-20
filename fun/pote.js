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
			const answer_Random_Person = [`Grrrrrr`,`Merci 😳`, `Bonjour deja ?`, `On est sur Discord, pas tinder poto.`,`oh..moi..moi aussi...`];
			number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer2 = answer_Random_Person[number];
            message.reply(answer2);
            return;
        }
        message.reply("Moi aussi ❤️");
    }else if (cmd == index.p + 'kami'){
		message.channel.send(`Kaminouniiii <:Frog_owi:899344705186316288>`);
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
		message.channel.send('C\'est un bg qui se fait charo par tout le monde (logique). Mais faites attention...Une Kamiry sauvage défend son territoire férocement.');
	}else if (cmd == index.p + 'revox') {
		message.channel.send('Tema la taille du rat <a:rat1:964843955684540496>');
	}else if (cmd == index.p + 'lhocost') {
		message.channel.send('Pingu ! <:MPengu_Emote2:965644261594902549>');
	}else if (cmd == index.p + 'keilie') {
		message.channel.send(`grrrr <a:haznowkiss:976972949787664404><a:keilikiss:976972930489647104>`);
	}else if (cmd == index.p + 'choupette') {
		message.channel.send('Ma bébou ! <:ouioui:868792198492221491>');
	}else if (cmd == index.p + 'rio') {
		message.channel.send('Le terroriste explosif 💣');
	}else if (cmd == index.p + 'inès' || cmd == index.p + 'ines' ) {
		message.channel.send('Fan de kpop, crush sur des coréens torses nus, gaga de chat, elle peut se réveler drole parfois mais elle prend vite le melon.');
	}else if (cmd == index.p + 'obisu') {
		message.channel.send('T\'es une vraie bitch, toi.👠');
	}else if (cmd == index.p + 'angesun') {
		message.channel.send('<:angesun:970831577124851722>');
	}else if (cmd == index.p + 'badboy') {
		message.channel.send('Haznoupette, la plus belle meuf, mais aussi la plus dramatique du serveur 🤭');
	}else if (cmd == index.p + 'arabe') {
		message.channel.send('BOUM !! 💣');
	}else if (cmd == index.p + 'psycho') {
		message.channel.send('AMOGUS SIUUUUUUUU dame dane dame yo');
	}else if (cmd == index.p + 'darkFury' || cmd == index.p + 'darkfury') {
		message.channel.send('Le mari à Sun, elle fait les dou\'aa sur lui pour que Keilie y touche pas 🤲');
	}else if (cmd == index.p + 'einnus') {
		message.channel.send('La femme de DarkFury, pas touche sinon il sera pas content. Il est coincé avec elle et elle est autant dramatique que Haznoupette <:hihi:848873245758324796>');
	}else if (cmd == index.p + 'haras') {
		message.channel.send('Elle pleure la shinobi <:sad2:848875755537956864>');
	}else if (cmd == index.p + 'xela') {
		message.channel.send('Il traque la shinobi 🔪');
	}else if (cmd == index.p + 'yrufkrad') {
		message.channel.send('Le mari de Sun, pas touche sinon elle vous goume, vous ban, vous bloque, hack son compte, vous bloque.');
	}else if (cmd == index.p + 'nevar') {
		message.channel.send('Si elle te dit bonjour, baisse les yeux, si elle te demande quelque chose, fais le sans te poser de question, soumets toi à la reine du serveur.');
	}else if (cmd == index.p + 'ikuzak') {
		message.channel.send('Tu sais juste qu\'il est bg, sans plus d\'information.');
	}else if (cmd == index.p + 'aurore') {
		message.channel.send('Roro, la belle princesse aux cheveux longs et soyeux, attachés en chignon. \👸');
	}else if (cmd == index.p + 'imak') {
		message.channel.send('Une libanaise autant bonne que le Baba Ghanouj, mariée à Kazuki.');
	}else if (cmd == index.p + 'valky') {
		message.channel.send('Elle est à Zet\'s pas touche !');
	}else if (cmd == index.p + 'xena') {
		message.channel.send('Elle, c\'est papuchette, une fille incroyable et trop choupi ! Si vous la croisez, dites lui bonjour, pas souvent qu\'on voit une fille en or ! 🧸');
	}else if(cmd == index.p +"wonzah"){
		message.channel.send(`<:HAZNOWAKBAR:977326635894308957>`);
	}
};