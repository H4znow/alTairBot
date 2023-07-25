const { c_ttv, p_ttv, starts } = require('../indexTwitch.js');

exports.lovaCalc = (channel, userstate, message, self) => {
    if (self) return;
    message = message.toLowerCase();
  
    if (message != p_ttv + "lovecha") return;

    if(userstate.username == "haznow"){
        c_ttv.say(channel, `Il y a 100% de chance que Chacha aime Haznow (le plus beau).`)
    }else{
        var randomPerc = Math.floor(Math.random() * 100);
        c_ttv.say(channel, `Il y a ${randomPerc}% de chance que Chacha aime ${userstate.username}.`)
    } 
}