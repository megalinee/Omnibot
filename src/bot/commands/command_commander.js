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


		if(true) {

			if(true) {

				suffix = message.content.split(' ')[1];

				switch(suffix) {

					case 'add' : {

						if(message.member.hasPermission('ADMINISTRATOR') || message.author.id === message.guild.owner.user.id) {

							if(message.mentions.users.first()) {

								servers[message.guild.id]['bot-commanders'].push(message.mentions.users.first().id);

								fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

								message.channel.sendMessage(`${message.mentions.users.first()} is now a \`bot-commander\``);

								break;

							} else {



							}


						} else {
							message.channel.sendMessage(`:lock: You must have ADMINISTRATOR permission in your role to add a bot commander.`);
						}

					}
					case 'remove': {

						if(message.member.hasPermission('ADMINISTRATOR') || message.author.id === message.guild.owner.user.id) {

							servers[message.guild.id]['bot-commanders'].splice(message.mentions.users.first().id, 1);

							fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

							message.channel.sendMessage(`${message.mentions.users.first()} is no longer a \`bot-commander\``);	

							break;
						} else {
							message.channel.sendMessage(`:lock: You must have ADMINISTRATOR permission in your role to add a bot commander.`);
						}

					}
					case 'list': {

						if(servers[message.guild.id]['bot-commanders'].indexOf(message.author.id) !== -1) {

							message.channel.sendMessage(`List of \`bot-commanders\` ${servers[message.guild.id]['bot-commanders'].join(' , ')}.`);

						} else {

							message.channel.sendMessage(`:lock: You must be a \`bot-commander\` to view the list of \`bot-commanders\``);

						}

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