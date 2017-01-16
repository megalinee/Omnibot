const command = {

	name: 'userinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {
  	var author;
    if(message.mentions.users.first()){
	  	author = message.mentions.users.first()
	  }else{
      author = message.author
	  }

  const embed = {
    title: `Info about ${author.username}`,
  	color: 0x00AE86,
  	author: {
  		name: author.username,
  		icon_url: author.avatarURL
    },
  	thumbnail: {
  		url: author.avatarURL
  	},
	  fields: [
			{
				name: 'Author ID:',
				value: author.id,
				inline: true
			},
			{
				name: 'Account made:'
				value:  author.createdAt,
				inline: true
			},
			{
				name: 'Discriminator:',
				value: author.discriminator,
				inline: true
			},
			{
				name: 'Presence:',
				value: author.presence,
				inline: true
			}
	  ],
	  footer: {
	    text: 'Omni Bot | ' + new Date, bot.user.avatarURL
	  }

	  msg.channel.sendEmbed(embed, '', { disableEveryone: true });

	}
}
