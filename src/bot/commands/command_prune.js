/*

	PRUNE COMMAND

*/

command = {

	name: 'prune',
	description: 'Deletes the given amount of messages',
	arguments: ['amount'],
	alias: ['purge','clean','clear'],
	permission: 'none',
	process: (bot,message) => {

		message.delete();

		if(true) {

			let suffix = message.content.split(' ').splice(1).join('');

			if(suffix <= 100 && !isNaN(suffix)) {

				messagesToPrune = message.channel.fetchMessages({limit: parseInt(suffix)}).then(messages => {

					message.channel.bulkDelete(messages).then(messages => {
						
						message.channel.sendMessage(`Successfully deleted ${suffix} messages`).then(message => {

							setTimeout(function() {message.delete()}, 1000);

						})

					}).catch(error => {

						message.channel.sendMessage(`An error has occured while trying to prune, maybe I don't have permission to delete messages?`)
							.then(message => {

								setTimeout(function() {message.delete()}, 1000);

							})

					})

				})


			} else {

				message.channel.sendMessage(`Please make sure the number of messages to prune is between \`2\` and \`100\`.`);

			}

		}

	}

}

module.exports = command;