/*

	GUILD MEMBER ADD
		 EVENT

*/

const fs = require('fs');
const colors = require('colors');
const path = require('path');

const pathToServers = path.resolve(__dirname, '../servers.json');
var servers = require(pathToServers);

const event = function(member) {

	try {

		const server = servers[member.guild.id];

		if(server.config.greet === true) {

			const greetMessage = servers[member.guild.id].config.greetMessage.replace("%USERNAME%", member.displayName).replace('%GUILDNAME%', member.guild.name);

			member.guild.defaultChannel.sendMessage(greetMessage);

		}



	} catch(error) {

		console.log(`| ERROR WHILE GREETING USER ${error}`.red);

	}

}

module.exports = event;