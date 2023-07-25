const indexTTV = require('../indexTwitch.js');
const c = indexTTV.c_ttv;
const p = indexTTV.p_ttv;
const s = indexTTV.starts;

exports.pong = (channel, userstate, message, self) => {
  if (self) return;
  message = message.toLowerCase();
   
  if (message.startsWith(p+"ping")) {
    c.say(channel, s+`pong 🏓`);
  }
};