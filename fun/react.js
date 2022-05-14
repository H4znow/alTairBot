const index = require("../index");

exports.react = message => {
    var message2 = message.toString().toLowerCase();
    if(message2.match(/(^a{1,}h{1,}!*)$/)){
        /*if(message.author.id == "867034511196160060") return;
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");*/
    } else if(message2.match(/^quoi{1,} ?\?{0,}$/)){
        message.react("🇫");
        message.react("🇪");
        message.react("🇺");
        message.react("🇷");
    } else if(message2.match(/ *\bbot\b/)){
        message.react("👀");
    }else if(message2.match(/ *\bchoupette\b/)){
        if(message.author.id != "517337001330999296")return;
        message.react("🇬");
        message.react("🇷");
        message.react("🇷");
    }  
}