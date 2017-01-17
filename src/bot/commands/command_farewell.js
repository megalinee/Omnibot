/*

		farewell COMMAND
	(for setting farewell and
	enabling/disabling the
		   farewell)

*/

const fs = require('fs');
const path = require('path');
const colors = require('colors');

const pathToServers = path.resolve(__dirname, '../servers.json');

var servers = require(pathToServers);

const command = {

	name: 'farewell',
	description: 'A command to enable/disable the farewell command or set farewell message',
	arguments: ['set/disable/enable'],
	alias: ['leavemessage','leavemsg'],
	requirement: 'bot-commander',
	process: (bot, message, config) => {

		suffix = message.content.split(' ').splice(1);

		switch(suffix[0]) {

			case 'enable': {

				try {

					servers[message.guild.id].config.farewell = true;

					fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

					message.channel.sendMessage(`farewells have been enabled for ${message.guild.name}.`);

				} catch(error) {

					console.log(`| ERROR WHILE EDITING SERVER CONFIG FOR ${guild.name} (${guild.id}) :${error}`.red);

				}

				break;

			}
			case 'disable': {

				try {

					servers[message.guild.id].config.farewell = false;

					fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

					message.channel.sendMessage(`Farewells have been disabled for ${message.guild.name}.`);

				} catch(error) {

					console.log(`| ERROR WHILE EDITING SERVER CONFIG FOR ${guild.name} (${guild.id}) :${error}`.red);

				}

				break;

			}
			case 'set': {

				const newfarewell = message.content.split(' ').splice(1).splice(1).join(' ');

				servers[message.guild.id].config.farewellMessage = newfarewell;

				fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

				message.channel.sendMessage(`The new farewell has been set.`);

				break;

			}

		}

	}

}

module.exports = command;