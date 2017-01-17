/*

		GREETING COMMAND
	(for setting greeting and
	enabling/disabling the
		   greeting)

*/

const fs = require('fs');
const path = require('path');
const colors = require('colors');

const pathToServers = path.resolve(__dirname, '../servers.json');

var servers = require(pathToServers);

const command = {

	name: 'greeting',
	description: 'A command to enable/disable the greet command or set greeting',
	arguments: ['set/disable/enable'],
	alias: ['greet'],
	requirement: 'bot-commander',
	process: (bot, message, config) => {

		suffix = message.content.split(' ').splice(1);

		switch(suffix[0]) {

			case 'enable': {

				try {

					servers[message.guild.id].config.greet = true;

					fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

					message.channel.sendMessage(`Greetings have been enabled for ${message.guild.name}.`);

				} catch(error) {

					console.log(`| ERROR WHILE EDITING SERVER CONFIG FOR ${guild.name} (${guild.id}) :${error}`.red);

				}

				break;

			}
			case 'disable': {

				try {

					servers[message.guild.id].config.greet = false;

					fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

					message.channel.sendMessage(`Greetings have been disabled for ${message.guild.name}.`);

				} catch(error) {

					console.log(`| ERROR WHILE EDITING SERVER CONFIG FOR ${guild.name} (${guild.id}) :${error}`.red);

				}

				break;

			}
			case 'set': 

		}

	}

}

module.exports = command;