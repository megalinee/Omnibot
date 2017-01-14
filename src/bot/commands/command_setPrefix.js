/*

	SeTTINGS COMMAND

*/

const command = {

	name: 'setPrefix',
	description: 'A command that let you change the prefix for your guild',
	arguments: ['prefix'],
	requirement: 'none',
	process: (bot , message , config) => {
    const config = require("../config/config.json");
    let args = message.content.split(" ").slice(1)
    config.(message.guild.id).prefix = args
				message.channel.sendEmbed({
					color: 0x656a7d,
					title: `My prefix is now ${args}`
				});
			});

	}

}
