/*
	KICK COMMAND
*/

command = {

	name: 'kick',
	description: 'kicks a user',
	arguments: ['member'],
	requirement: 'none',
	alias: ['stun','tempban'],
	process: function(bot,message) {

		if(message.member.hasPermission('KICK_MEMBERS')) {

			if(message.mentions.users.size >= 1) {

				message.mentions.users.array().forEach(user => {

					let member = message.guild.members.get(user.id);

					if(member.kickable) {

						member.kick(0).then(member => {
							message.channel.sendMessage(`${member.user.username} was successfully kicked, what shall the kick message be?`);
							message.channel.awaitMessages(m => message.author === m.author, { max: 1, time: 6000000, errors: ['time'] })
								.then(collected => {

									member.user.sendMessage(`You have been kicked with message: ${collected.first().content}`);

								});
						});

					} else {

						message.channel.sendMessage(`I do not have permission to kick ${member.user.username}`);

					}

				})

			} else {
				message.channel.sendMessage(`You didn't mention anyone to kick.`);
			}

		} else {

			message.channel.sendMessage(`You do not have permission to kick`);
		
		}

	}

}

module.exports = command;