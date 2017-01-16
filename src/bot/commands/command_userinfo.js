/*

	USERINFO COMMAND

*/

const command = {

	name: 'userinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	alias: ['uinfo'],
	requirement: 'none',
	process: (bot , message , config) => {
	  	
	  	var member;

   		if(message.mentions.users.first()) {
	  		
	  		member = message.guild.members.get(message.mentions.users.first().id);

	  	} else {

      		member = message.member;

	  	}

	  	mutualGuilds = [];

	  	bot.guilds.forEach(guild => {

	  		if(guild.members.has(member.user.id)) {

	  			mutualGuilds.push(guild.name);

	  		}

	  	});

	  	if(member.voiceChannel) {

	  		memberVoiceChannel = member.voiceChannel.name;

	  	} else {

	  		memberVoiceChannel = 'Not in a voice channel';

	  	}

	  	mutualGuilds = mutualGuilds.join(' , ');

	  	const embed = {

	  		title: `Info about : ${member.user.username}`,
	  		color: member.highestRole.color,
	  		author: {
	  			name: member.user.username,
	  			icon_url: member.user.avatarURL
	  		},
	  		thumbnail: {
	  			url: member.user.avatarURL
	  		},
	  		fields: [

	  			{
	  				name: `Display Name: `,
	  				value: member.displayName,
	  				inline: true
	  			},
	  			{
	  				name: `Discriminator: `,
	  				value: member.user.discriminator,
	  				inline: true
	  			},
	  			{
	  				name: `User ID: `,
	  				value: member.user.id,
	  				inline: true
	  			},
	  			{
	  				name: `Status: `,
	  				value: member.presence.status,
	  				inline: true
	  			},
	  			{
	  				name: `Highest Role: `,
	  				value: member.highestRole.name,
	  				inline: true
	  			},
	  			{
	  				name: `Bot User: `,
	  				value: member.user.bot,
	  				inline: true
	  			},
	  			{
	  				name: `Mutual Guilds: `,
	  				value: mutualGuilds,
	  				inline: true
	  			},
	  			{
	  				name: `Bannable: `,
	  				value: member.bannable,
	  				inline: true
	  			},
	  			{
	  				name: `Kickable: `,
	  				value: member.kickable,
	  				inline: true
	  			},
	  			{
	  				name: `Guild Joined At Date: `,
	  				value: member.joinedTimestamp,
	  				inline: true
	  			},
	  			{
	  				name: `Discord Joined At Date: `,
	  				value: member.user.createdTimestamp,
	  				inline: true
	  			},
	  			{
	  				name: `Server Deafened: `,
	  				value: member.serverDeaf,
	  				inline: true
	  			},
	  			{
	  				name: `Server Muted: `,
	  				value: member.serverMute,
	  				inline: true
	  			},
	  			{
	  				name: `Self Deafened: `,
	  				value: member.selfDeaf,
	  				inline: true
	  			},
	  			{
	  				name: `Self Muted: `,
	  				value: member.selfMute,
	  				inline: true
	  			},
	  			{
	  				name: `Voice Channel: `,
	  				value: memberVoiceChannel,
	  				inline: true
	  			},

	  		]
	  	}
  		
		  message.channel.sendEmbed(embed, '', { disableEveryone: true });
	
		}
}

module.exports = command;