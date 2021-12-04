const index = require('../index.js');

exports.fun = message => {
    const args = message.content.split(' ');
	const cmd = args.shift();
    if(cmd == index.p+'ping'){
        message.channel.send('pong !');
    }
};