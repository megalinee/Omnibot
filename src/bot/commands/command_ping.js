/*

	PING COMMAND

*/

const command = {

	name: 'ping',
	description: 'A simple ping command to test the bot is working / get the ping to the server',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {

		const now = require('performance-now');

		const start = now();

		message.channel.sendMessage('Getting `ping`')
			.then(message => {
				const end = now();

				message.delete();

				message.channel.sendEmbed({
					color: 0x656a7d,
					title: `Pong! ${(endTime - startTime).toFixed(3)}ms`
				});
			});

	}

}