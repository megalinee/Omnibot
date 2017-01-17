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

		if(server.config.greet) {

			member.guild.defaultChannel.sendMessage(server.config.greeting);

		}



	} catch(error) {

		console.log(`| ERROR WHILE GREETING USER ${error}`.red);

	}

}

module.exports = event;