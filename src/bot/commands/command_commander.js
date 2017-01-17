/*

	COMMANDER COMMAND

*/

const fs = require('fs');
const colors = require('colors');
const path = require('path');

const pathToServers = path.resolve(__dirname, '../servers.json');
const servers = require(pathToServers);

const command = {

	name: 'commander',
	description: 'Add or remove commander from a user',
	arguments: ['add/remove','user mention'],
	alias: ['cmdr'],
	requirement: 'none',
	process: (bot, message, config) => {


		if(message.member.hasPermission('ADMINISTRATOR') || message.author.id === message.guild.owner.user.id) {

			if(message.mentions.users.first()) {

				suffix = message.content.split(' ')[1];

				switch(suffix) {

					case 'add' : {

						servers[message.guild.id]['bot-commanders'].push(message.mentions.users.first().id);

						fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

						message.channel.sendMessage(`${message.mentions.users.first()} is now a \`bot-commander\``);

						break;

					}
					case 'remove': {

						servers[message.guild.id]['bot-commanders'].splice(message.mentions.users.first().id, 1);

						fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

						message.channel.sendMessage(`${message.mentions.users.first()} is no longer a \`bot-commander\``);

						break;

					}
					default: {

						message.channel.sendMessage(`Incorrect usage, do \`${servers[message.guild.id].config.prefix}commander add/remove ${message.mentions.users.first()}\``);

						break;

					}

				}



			} else {

				message.channel.sendMessage(`You must mention a user. Command usage: \`${servers[message.guild.id].config.prefix}comamnder add/remove @usermention\``);

			}

		} else {

			message.channel.sendMessage(`:lock: You must have ADMINISTRATOR permission in your role to add a bot commander.`);

		}

	}


}

module.exports = command;