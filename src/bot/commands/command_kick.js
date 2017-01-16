/*
	KICK COMMAND
*/

command = {

	name: 'kick',
	description: 'kicks a user',
	arguments: ['member'],
	permission: 'none',
	process: function(bot,message) {

		if(message.member.hasPermission('KICK_MEMBERS')) {

			// If mentioned

			if(message.mentions.users.size >= 1) {

				message.mentions.users.array().forEach(user => {

					let member = message.guild.members.get(user.id);

					if(message.member.highestRole.position > member.highestRole.position) {

						if(member.kickable) {

							member.kick(0).then(member => {

								message.channel.sendMessage(`${member.user.username} was successfully kicked, what do you want the message to be?`);
								channel.awaitMessages(m => m.author.id === messsage.author.id, { max: 1, time: 6000000, errors: ['time'] })
									.then(collected => {

										member.user.sendMessage(`Hello, ${member.user.username}, you have been kicked from the server ${message.guild.name} for the reason ${collected.first().content}`).then(message => {

											console.log(`Gave user \`\`${member.user.username}\`\` kick message \`\`${collected.first().content}\`\``);

										}).catch(error => {

											console.log(`Failed to send kick message ${error}`);

										})

									});

							});

						} else {

							message.channel.sendMessage(`I do not have permission to kick ${member.user.username}`);

						}

					} else {

						message.channel.sendMessage(`You do not have permission to kick ${member.user.username}`);

					}

				})

			} else {
				message.channel.sendMessage(`Sir, you didn't mention anyone to kick.`);
			}

		} else {

			message.channel.sendMessage(`I am sorry Sir but you do not have permission to kick`);

		}

	}

}

module.exports = command;
