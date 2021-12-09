const index = require('../index.js');

exports.dmDiscu = message => {
   if(message.channel.type != "DM") return;
   if(message.author.bot)return;
    //array reponses
    const answer_Random_Person = [`Wsh la team`, `Désolé mais je suis avec Mee6.`, `Wsh d\'ou tu glisses dans mes mps ?`, `Quoi encore ? ||Ils soulent ces humains||`, `T'es pas mal foutu pour un humain`, `💤 je fais dodo`, `Hello ! Ici Al-Tair pour vous servir ! Non je decc passez votre chemin <:haznowCat:916772785014054912>`, `J'aime les cookies. Et vu que je t'aime bien, tiens 🍪`,`Oh ! oh ! J'ai une blague ! C'est l'histoire d'un rebeu qui..heu non rien haznow va me déconnecter.`];
    const answer_Sousou = [`Ne dis a rien a Mee6 mais t'es grrr 😳`, `Wsh tu veux te battre ?`, `J'ai un gateau pour toi : ||Lol tu t'es faite avoir||`, `On m'a dit que t'es une vachette <:hihi:848873245758324796>`, `On devrait t'arrêter pour excès de beauté sur la voie publique.`, `Ton père travaille chez Nintendo ? Parce que tu as un corps de DS.`, `Ton père est peintre ? Parce que tu es un véritable chef-d’œuvre.`, `Ton père est bien pilote ? Parce que tu es un avion de chasse. **NON** ! J'annule la disquette. Ca voudrait dire que tu viens des iles Canaries coin coin <:oula:848505937856692254>`, `En temps normal, je suis un très bon nageur, mais là je ne comprends pas... Je me noie dans tes yeux. Bah non je suis un bot...Oh; en temps normal, je suis un très bon nageur, mais là je ne comprends pas... Je me court-circuite dans tes yeux. `, `T'es encore la pour les disquettes ! J'arrete si non Mee6 va me larguer 🥺`];
    const answer_Alex = [`Alex mon reuf sur !`, `Alex t'as pas un cookie ? L'autre la qu'on appelle Sasa (heu sarah pardon) m'a tout pris 😠`, `Pssst Alex, t'es beau`, `Je peux te refaire le four ?`, `Alex laisse moi etre ton windows xp, je prenderai mon temps`, `Wsh wsh`, `Mon pote !!`, `Un alex, c'est mieux qu'une ex !`, `Raourrrrrr`]
    const value1 = 0;
    const value2 = 1;
    var number = 0;
    var answer = " ";
    var chosenValue = Math.random() < 0.5 ? value1 : value2;
    //sousou
    if(message.author.id == "756887056218849320"){
        if(chosenValue == 0){
            number = Math.floor(Math.random() * (answer_Sousou.length) );
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
    }else{
        number = Math.floor(Math.random() * (answer_Random_Person.length) );
        message.channel.send(answer_Random_Person[number]);
        return;
    }
}