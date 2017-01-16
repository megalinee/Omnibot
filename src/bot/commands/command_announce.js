/*

	ANNOUNCE COMMAND

*/

const command = {

	name: 'announce',
	description: 'Announces the given message to the announcements channel ',
	arguments: ['text'],
	alias: ['ann'],
	requirement: 'none',
	process: (bot , message , config) => {
	
		let suffix = message.content.split(' ').splice(1).join(' ');

		if(message.guild.channels.exists('name','announcements')) {

			const announcementsChannel = message.guild.channels.find('name','announcements');

		} else {

			const announcementsChannel = message.guild.defaultChannel;

		}

		announcementsChannel.sendMessage(suffix);

	}

}

module.exports = command;