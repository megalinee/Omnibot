/*
	PREFIX COMMAND
*/

const command = {

	name: 'prefix',
	description: 'Sets a prefix for a specfic server.',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {
	
	var mes = message.content.split(" ").slice(1).join(" ");
	
	var servers = require('../servers.json') // This is to get the servers.json file
	
	var server = servers.(message.guild.id).config.prefix = mes // This changes the prefix
  
  fs.writeFile('../server.json', JSON.stringify(server)) // Saves it
		
		message.channel.sendEmbed({

			color: 0x656a7d,
			title: 'Changed prefix to ' + mes
			
		});
	}

}

module.exports = command;
