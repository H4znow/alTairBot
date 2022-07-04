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
		message.author.send("Flemme de lui faire une commande. Allez next !").catch(err => {console.log(err)});
	}else if (cmd == index.p + 'sun') {
		message.channel.send('Chemsi habibati ! <:hihi:848873245758324796>');
	}else if (cmd == index.p + 'raven') {
		message.channel.send('7ayati ! <:ouioui:868792198492221491>');
	}else if(message.toString().toLowerCase().match(/^je t\'? ?aime al\-? ?tair/) || message.toString().toLowerCase().match(/al\-? ?tair^je t\'? ?aime/) || message.toString().toLowerCase().match(/<@867034511196160060> ? ?je t\'? ?aime/) ||  message.toString().toLowerCase().match(/je t\'? ?aime ?<@867034511196160060> ? ?/)){
        if(message.author.id == "405670347761778688") return message.reply("MATATOUYA ❤️");
		if(message.author.id != "517337001330999296"){
			var answer2 = " ";
			const answer_Random_Person = [`Grrrrrr`,`Merci 😳`, `Bonjour deja ?`, `On est sur Discord, pas tinder poto.`,`oh..moi..moi aussi...`];
			number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer2 = answer_Random_Person[number];
            message.reply(answer2);
            return;
        };
        message.reply("Moi aussi ❤️");
    }else if (cmd == index.p + 'kami'){
		message.channel.send(`Kaminouniiii <:Frog_owi:899344705186316288>`);
	}else if (cmd == index.p + 'sheytasun'){
		message.channel.send(`<:sheytasun:961799016155344898>`);
	}else if (cmd == index.p + 'zetsuma') {
		message.channel.send('Notre zezet nationale ! <a:spffft:899344727281909801>');
	}else if (cmd == index.p + 'kazuki') {
		message.channel.send('C\'est un bg qui se fait charo par tout le monde (logique). Mais faites attention...Une âme charitable et sauvage défend son territoire.');
	}else if (cmd == index.p + 'revox') {
		message.channel.send('Tema la taille du rat <a:rat1:964843955684540496>');
	}else if (cmd == index.p + 'keilie') {
		message.channel.send(`https://www.larousse.fr/dictionnaires/francais`);
	}else if (cmd == index.p + 'choupette') {
		message.channel.send('Bébou ! <:ouioui:868792198492221491>');
	}else if (cmd == index.p + 'inès' || cmd == index.p + 'ines' ) {
		message.channel.send('Fan de kpop, crush sur des coréens torses nus, gaga de chat, elle peut se réveler drole parfois mais elle prend vite le melon.');
	}else if (cmd == index.p + 'obisu') {
		message.channel.send('T\'es une vraie bitch, toi.👠');
	}else if (cmd == index.p + 'angesun') {
		message.channel.send('<:angesun:970831577124851722>');
	}else if (cmd == index.p + 'arabe') {
		message.channel.send('BOUM !! 💣');
	}else if (cmd == index.p + 'psycho') {
		message.channel.send('AMOGUS SIUUUUUUUU dame dane dame yo');
	}else if (cmd == index.p + 'darkFury' || cmd == index.p + 'darkfury') {
		message.channel.send('Dans le milieu on l\'appelle Pablo Escobar, autrement dit, il est difficile de retrouver le coeur de Sun qu\'il a volé, arabe digne de sa dignité d\'arabe');
	}else if (cmd == index.p + 'nevar') {
		message.channel.send('Si elle te dit bonjour, baisse les yeux, si elle te demande quelque chose, fais le sans te poser de question, soumets toi à la reine du serveur.');
	}else if (cmd == index.p + 'aurore') {
		message.channel.send('Roro, la belle princesse aux cheveux longs et soyeux, attachés en chignon. \👸');
	}else if (cmd == index.p + 'valky') {
		message.channel.send('Elle est à Zet\'s pas touche !');
	}else if (cmd == index.p + 'xena') {
		message.channel.send('Elle, c\'est papuchette, une fille incroyable et trop choupi ! Si vous la croisez, dites lui bonjour, pas souvent qu\'on voit une fille en or ! 🧸');
	}else if(cmd == index.p +"wonzah"){
		message.channel.send(`<:HAZNOWAKBAR:977326635894308957>`);
	}else if(cmd == index.p +"pixi"){
		if(message.channel.id == "947672084195205130") return message.channel.send(`Quand elle était petite, elle voulait avoir un zizi <:bouffePasHalal:978674972547485777>`);
		message.channel.send(`Quand elle était petite, elle voulait avoir un zizi..`);
	}else if(cmd == index.p +"tez"){
		message.channel.send(`Il va aussi vite que la vitesse divine !`);
	}else if (cmd == index.p + 'mary') {
		message.channel.send(`<:Marie_poppins:978677137089380383>`);
	}else if (cmd == index.p + 'chocolat') {
		message.channel.send(`<:GIVEMECHOCOLATEBITCH:978677427750453258>`);
	}else if (cmd == index.p + 'famille') {
		message.channel.send(`Sun est ma mère.\nDarkFury est mon père.\nHaznow est mon oncle.\nSarah est ma soeur.\nZetsi est mon frère.\nRaven est ma tante.\nMee6 est ma crush.\nAlex est mon meileur pote.`);
	}
};