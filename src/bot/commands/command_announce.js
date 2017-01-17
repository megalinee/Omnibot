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

		setTimeout(function() {message.delete()}, 6000);
	
		let suffix = message.content.split(' ').splice(1).join(' ');

		if(message.guild.channels.exists('name','announcements')) {

			announcementsChannel = message.guild.channels.find('name','announcements');

		} else {

			announcementsChannel = message.guild.defaultChannel;

		}

		announcementsChannel.sendMessage(`@everyone, ${suffix}`)
			.then(msg => {

				message.reply(`I have announced your message in ${announcementsChannel}`);

				setTimeout(() => {msg.delete()}, 6000);

			}).catch(error => {

				message.reply(`I did not have permission to talk in ${announcementsChannel}`);

			})

	}

}

module.exports = command;