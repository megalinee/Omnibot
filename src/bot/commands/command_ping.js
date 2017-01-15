/*

	PING COMMAND

*/

const command = {

	name: 'ping',
	description: 'A simple ping command to test the bot is working / get the ping to the server',
	arguments: [],
	requirement: 'none',
	alias: ['test', 'piiing'],
	process: (bot , message , config) => {

		const now = require('performance-now');

		const startTime = now();

		message.channel.sendMessage('Getting `ping`')
			.then(message => {
				const endTime = now();

				message.delete();

				message.channel.sendEmbed({
					color: 0x656a7d,
					title: `Pong! ${(endTime - startTime).toFixed(0)}ms`
				});

			});

	}

}

module.exports = command;
