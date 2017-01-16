/*

	SAY COMMAND

*/

const command = {

	name: 'say',
	description: 'A command that will echo what you say',
	arguments: ['text'],
	alias: ['echo','copy','repeat'],
	requirement: 'none',
	process: (bot , message , config) => {
		
		let suffix = message.content.split(' ').splice(1).join(' ');

		message.channel.sendMessage(suffix);

	}

}

module.exports = command;