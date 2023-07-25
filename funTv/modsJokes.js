const indexTTV = require('../indexTwitch.js');
const c = indexTTV.c_ttv;
const p = indexTTV.p_ttv;
const s = indexTTV.starts;

exports.modsJokes = (channel, userstate, message, self) => {
  if (self) return;
  message = message.toLowerCase();
  const args = message.split(" ");
  
  const hazzunaReg = new RegExp(p + "haz{1,}u(na)?");
  const chachaReg = new RegExp(p + "chacha{1,}");
  if (args[0].match(hazzunaReg)) {
    c.say(channel, s + `${userstate.username} paye ton sub pour payer sa sortie sous caution...`);
  }else if (args[0] == p + "keryan" || args[0] == p+"kyky") {
    c.say(channel, s+`${userstate.username} veut se faire ban par Kyky !!`);
  }else if (args[0].match(chachaReg)) {
    c.say(channel, s+`ooooh ! ${userstate.username} est un nouveau pretendant... !!`);
  }
};
