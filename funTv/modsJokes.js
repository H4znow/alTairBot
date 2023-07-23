const indexTTV = require('../indexTwitch.js');
const c = indexTTV.c_ttv;
const p = indexTTV.p_ttv;

exports.modsJokes = (channel, userstate, message, self) => {
  if (self) return;
  const args = message.split(" ");
  
  if (args[0].match(new RegExp(p + "haz{1,}u(na)?", "i"))) {
    c.say(channel, `${userstate.username} Paye ton sub pour payer ma sortie sous caution...`);
  }
};
