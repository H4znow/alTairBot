const { error } = require('console');
const indexTTV = require('../indexTwitch.js');
const c = indexTTV.c_ttv;
const p = indexTTV.p_ttv;
const s = indexTTV.starts;

exports.roueDuBan = (channel, userstate, message, self) => {
  if (self) return;
  message = message.toLowerCase();

  if(!message.startsWith(p+"roue")) return;

  const userIsBroadCaster = userstate["badges"];
   
  if (userstate["mod"] || userIsBroadCaster["broadcaster"] == 1) {
    c.say(channel, s+"Je n'ai pas les droits pour te ban... malheureusement.")

  }else{
    // Génère un nombre aléatoire entre 0 et 899 (15 minutes en secondes - 1)
    const randomSeconds = Math.floor(Math.random() * 900);

    // Calcule le nombre de minutes et de secondes
    const minutes = Math.floor(randomSeconds / 60);
    const seconds = randomSeconds % 60;

    c.say(channel, s+`${userstate.username}, tu vas être ban pendant ${minutes}:${seconds}mn. (cheh)`)
        .then(()=> {
            c.ban(channel, userstate.username, `Tu as été banni pour ${minutes}:${seconds}`)
                .catch( error => {console.log ("\nfunTv/roueDuBan : " + error)});
        })
        .catch(error => {
            console.log(error);
        })
  }
};