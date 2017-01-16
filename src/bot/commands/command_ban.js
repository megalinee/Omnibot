/*
	BAN COMMAND
*/

command = {

	name: 'ban',
	description: 'Bans a user',
	arguments: ['member'],
	permission: 'none',
	alias: ['snipe','permkic'],
	process: function(bot,message) {

		if(message.member.hasPermission('BAN_MEMBERS')) {

			if(message.mentions.users.size >= 1) {

				message.mentions.users.array().forEach(user => {

					let member = message.guild.members.get(user.id);

					if(member.bannable) {

						member.kick(0).then(member => {
							message.channel.sendMessage(`${member.user.username} was successfully banned, what shall the ban message be?`);
							message.channel.awaitMessages(m => message.author === m.author, { max: 1, time: 6000000, errors: ['time'] })
								.then(collected => {

									member.user.sendMessage(`You have been banned with message: ${collected.first().content}`);

								});
						});

					} else {

						message.channel.sendMessage(`I do not have permission to ban ${member.user.username}`);

					}

				})

			} else {
				message.channel.sendMessage(`You didn't mention anyone to ban.`);
			}

		} else {

			message.channel.sendMessage(`You do not have permission to ban`);
		
		}

	}

}

module.exports = command;