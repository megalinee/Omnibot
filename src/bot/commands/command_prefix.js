/*

	PREFIX COMMAND

*/

const fs = require('fs');

const command = {

	name: 'prefix',
	description: 'Sets a prefix for a specfic server.',
	arguments: [],
	alias: ['prefix','setprefix'],
	requirement: 'none',
	process: (bot , message , config) => {

		var mes = message.content.split(" ").slice(1).join(" ");

		if(mes.length > 1) {

			message.channel.sendMessage(`Error, the suffix may only be 1 char long`);

		} else {
	
			var servers = require('../servers.json'); // This is to get the servers.json file
	
			servers[message.guild.id].config.prefix = mes; // This changes the prefix
  
  			fs.writeFile('./servers.json', JSON.stringify(servers, 'null', 4)); // Saves it
		
			message.channel.sendEmbed({

				color: 0x656a7d,
				title: 'Changed prefix to ' + mes
			
			});
		}
	}

}

module.exports = command;