const index = require("../index");

exports.react = message => {
    var message2 = message.toString().toLowerCase();
    if(message2.match(/(^a{1,}h{1,}!*)$/)){
        if(message.author.id == "867034511196160060") return;
        message.react("🇦");
        message.react("🇧");
        message.react("🇨");
    } else if(message2.match(/^quoi{1,} ?\?*$/)){
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
    }else if(message2.match(/ *\bbelge\b/)){
        if(message.author.id != "629407078175473664")return; 
        message.react(`🍟`);
        message.react(`🍺`);
    }else if(message2.match(/ *\bo{1,}m{1,}g{1,}\b/)){
        if(message.author.id != "517337001330999296" && message.author.id != "405670347761778688")return; 
        message.react(`<:kek:874343378031112233>`);
    } else if(message2.match(/ *\barabe\b/)){
        message.react(`<a:GRRRRRR:982408331115261973>`);
    } 
}