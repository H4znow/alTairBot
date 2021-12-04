const index = require("../index");

exports.react = message => {
    var message2 = message.toString().toLowerCase();
    if(message2.match(/^a{1,}h{1,}[!{1,0}]?/)){
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
    }
}