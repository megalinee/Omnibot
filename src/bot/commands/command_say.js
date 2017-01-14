/*

	SAY COMMAND

*/

const command = {

	name: 'say',
	description: 'A simple command that will echo what you say',
	arguments: ['text'],
	requirement: 'none',
	process: (bot , message , config) => {
				message.channel.sendEmbed({
					color: 0x656a7d,
					title: message.content
				});
			});

	}

}
