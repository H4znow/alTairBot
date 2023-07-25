const { c_ttv, p_ttv, starts } = require('../indexTwitch.js');

exports.roueDuBan = (channel, userstate, message, self) => {
  
  if (self) return;
  message = message.toLowerCase();

  if (!message.startsWith(p_ttv + "roue")) return;

  const userIsBroadcaster = userstate.badges ? userstate.badges.broadcaster === '1' : false;
   
  if (userstate.mod || userIsBroadcaster) {
    
    c_ttv.say(channel, starts + "Je n'ai pas les droits pour te ban... malheureusement.");

  } else {
    // Génère un nombre aléatoire entre 0 et 899 (15 minutes en secondes - 1)
    const randomSeconds = Math.floor(Math.random() * 900);

    // Calcule le nombre de minutes et de secondes
    const minutes = Math.floor(randomSeconds / 60);
    const seconds = randomSeconds % 60;

    c_ttv.say(channel, starts + `${userstate.username}, tu vas être banni pendant ${minutes}:${seconds}mn. (cheh)`)
    .then((data) => {
      c_ttv.timeout(`${channel}`, `${userstate.username}`, 300, "reason").catch(err => {console.log(err);}
    )})
    .catch(error => {
      console.log(error);
    });
  } 
};