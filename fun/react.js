const index = require("../index");

exports.react = message => {
    var message2 = message.toString().toLowerCase();
    if(message2.match(/(^a{1,}h{1,}!*)\b/)){
        if(message.author.id == "867034511196160060") return;
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
    } else if(message2.match(/ *\bsarah\b/)){
        message.react("917096111834026055");
    } else if(message2.match(/ *\bbot\b/)){
        message.react("👀");
    }
}