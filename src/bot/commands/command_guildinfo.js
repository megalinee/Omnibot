const command = {

	name: 'guildinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	requirement: 'none',
	alias: ['ginfo'],
	process: (bot , message , config) => {
    var serv;
	  serv = message.guild()
    if(!serv.available){
		  return msg.reply("An error ocurred, please try again")
	  }

	  const embed = {
	    title: 'Info about ' + serv.name,
			color: 0x00AE86,
	    thumbnail: {
			  url: serv.icon
	    },
	    fields: [
				{
					name: 'Number of Roles:',
					value: serv.roles.length,
					inline: true
				},
			  {
					name: 'ID:',
					value: serv.id,
					inline: true
			  },
			  {
					name: 'Members:',
					value: serv.memberCount,
					inline: true
			  },
			  {
					name: 'Owner',
					value: serv.owner,
					inline: true
			  },
				{
					name: 'Number of Channels:',
					value: serv.channels.length,
					inline: true
			  },
				{
					name: 'Default Channel:',
					value: serv.defaultChannel,
					inline: true
			  },
				{
					name: 'Number of Emojis:',
					value: serv.emojis.length,
					inline: true
			  },
				{
					name: 'Region:',
					value: serv.region,
					inline: true
			  }
    	]
    }
    msg.channel.sendEmbed(embed,'',{ disableEveryone: true });
	}
}

module.exports = command;