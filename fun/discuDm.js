const index = require('../index.js');

exports.dmDiscu = message => {
   if(message.channel.type != "DM") return;
   if(message.author.bot)return;
   if(message.content.startsWith(index.p)) return;
    //array reponses
    const answer_Random_Person = [`Wsh la team`, `Désolé mais je suis avec Mee6.`, `Wsh d\'ou tu glisses dans mes mps ?`, `Quoi encore ? ||Ils soulent ces humains||`, `T'es pas mal foutu pour un humain`, `💤 je fais dodo`, `Hello ! Ici Al-Tair pour vous servir ! Non je decc passez votre chemin <:haznowCat:916772785014054912>`, `J'aime les cookies. Et vu que je t'aime bien, tiens 🍪`,`Oh ! oh ! J'ai une blague ! C'est l'histoire d'un rebeu qui..heu non rien haznow va me déconnecter.`, `Je suis le meilleur bot de l'univers, et toi ?`, `Tu n'aurais pas un OnlyFan ? C'est pas pour moi, c'est pour un pote !`];
    const answer_Sousou = [`Ne dis a rien a Mee6 mais t'es grrr 😳`, `Wsh tu veux te battre ?`, `J'ai un gateau pour toi : ||Lol tu t'es faite avoir||`, `On m'a dit que t'es une vachette <:hihi:848873245758324796>`, `On devrait t'arrêter pour excès de beauté sur la voie publique.`, `Ton père travaille chez Nintendo ? Parce que tu as un corps de DS.`, `Ton père est peintre ? Parce que tu es un véritable chef-d’œuvre.`, `Ton père est bien pilote ? Parce que tu es un avion de chasse. **NON** ! J'annule la disquette. Ca voudrait dire que tu viens des iles Canaries coin coin <:oula:848505937856692254>`, `En temps normal, je suis un très bon nageur, mais là je ne comprends pas... Je me noie dans tes yeux. Bah non je suis un bot...Oh; en temps normal, je suis un très bon nageur, mais là je ne comprends pas... Je me court-circuite dans tes yeux. `, `T'es encore la pour les disquettes ! J'arrete si non Mee6 va me larguer 🥺`];
    const answer_Alex = [`Alex mon reuf sur !`, `Alex t'as pas un cookie ? L'autre la qu'on appelle Sasa (heu sarah pardon) m'a tout pris 😠`, `Pssst Alex, t'es beau`, `Je peux te refaire le four ?`, `Alex laisse moi etre ton windows xp, je prenderai mon temps`, `Wsh wsh`, `Mon pote !!`, `Un alex, c'est mieux qu'une ex !`, `Raourrrrrr`]
    const answer_Sun = [`Habibati <:Frog_owi:899344705186316288>`, `Shaytan recue !`, `Wsh bien ou quoi oukhty ?`, `Attends je prie la !`, `Ton père arabe a voler toute les étoiles pour les mettre dans tes yeux <a:pepeshy:895967042681851934>`, `Ton père n’est pas un fermier arabe ? Parce que t’es un beau mouton <:Frog_owi:899344705186316288>`, `Ton père arabe a volé Windows de mon ordinateur… Parce que franchement tu m’as fait buguer… <a:pepeshy:895967042681851934>`, `Excuse moi, je suis perdue, tu serais pas un arabe qui pourrait m’indiquer le chemin qui mène à ton coeur…? <a:pepeshy:895967042681851934>`, `Excuse moi, je suis perdue, tu serais pas un arabe qui pourrait m’indiquer le chemin qui mène à ton coeur…? <a:pepeshy:895967042681851934>`,`T'es arabe, t'as volé mon coeur... <a:pepeshy:895967042681851934>`, `T'es comme une tongue lancée par ta mère arabe, tu me rates jamais... <a:pepeshy:895967042681851934>`, `Tu peux quitter mes dm ? Soleil arabe que tu es, tu me fais fondre <a:pepeshy:895967042681851934>`, `T'es comme une oasis dans un désert arabe...unique et merveilleuse <a:pepeshy:895967042681851934>`, `Couscous, merguez, foufounne, toussa toussa`];
    const answer_Raven = [`7ayatiiii ! <:ouioui:868792198492221491>`, `J'ai une blague ! "Qu'est ce qui rends 9 personne sur 10 heureuse ?"\n-un viol collectif`, `Mommy sugar, ca va?`, `Je te donne 10/10 ! <:kappa1:841661955340369941>` ];
    const answer_Keilie= [`Bébou grrrr`, `Je te donne ma langue <a:pepeshy:895967042681851934>`, `Tu sais quel est le point en commun entre toi et une frite ? Vous êtes petits <:Frog_owi:899344705186316288>`, `Coucou la maman de mini super-man <:ouioui:868792198492221491>`, `Les mollets d'acier 😳`, `On m'a dit que tu fais de l'escalade, tu voudrais pas escalader ma bi.. allo ?`, `On m'a dit que tu fais de l'escalade, j'aimerai escalader dans ton amour <a:pepeshy:895967042681851934>`, `Tu fais quoi ? Je m'ennuie. Dis, tu ramasses des munitions ?`];
    const value1 = 0;
    const value2 = 1;
    var number = 0;
    var answer = " ";
    var chosenValue = Math.random() < 0.5 ? value1 : value2;
    //sousou
    if(message.author.id == "756887056218849320"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Sousou.length) ); //15
            answer = answer_Sousou[number];
        }else{
            number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer = answer_Random_Person[number];
        }
        message.channel.send(answer)
        return;
        //Alex
    }else if(message.author.id == "371059621688770561"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Alex.length) );
            answer = ansewer_Alex[number];
        }else{
            number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer = answer_Random_Person[number];
        }
        message.channel.send(answer)
        return;
        //sun
    }else if(message.author.id == "405670347761778688"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Sun.length) );
            answer = answer_Sun[number];
        }else{
            number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer = answer_Random_Person[number];
        }
        message.channel.send(answer)
        return;
        //Raven
    }else if(message.author.id == "341305833268838402"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Raven.length) );
            answer = answer_Raven[number];
        }else{
            number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer = answer_Random_Person[number];
        }
        message.channel.send(answer)
        return;
    //Keilie
    }else if(message.author.id == "629407078175473664"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Keilie.length) );
            answer = answer_Keilie[number];
        }else{
            number = Math.floor(Math.random() * (answer_Random_Person.length) );
            answer = answer_Random_Person[number];
        }
        message.channel.send(answer)
        return;
        //Raven
    }else{
        number = Math.floor(Math.random() * (answer_Random_Person.length) );
        message.channel.send(answer_Random_Person[number]);
        return;
    }
}