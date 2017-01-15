/*
	PREFIX COMMAND
*/

const command = {

	name: '',
	description: 'A command that will echo what you say',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {
  
  		var servers = require('./servers.json');
			
		message.channel.sendEmbed({

			color: 0x656a7d,
			
		});
	}
}

module.exports = command;