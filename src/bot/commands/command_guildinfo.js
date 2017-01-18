/*
	
	GUILD INFO COMMAND

*/

const fs = require('fs');
const path = require('path');

const pathToServers = path.resolve(__dirname, '../servers.json');
const servers = require(pathToServers);

const command = {

	name: 'guildinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	requirement: 'none',
	alias: ['ginfo'],
	process: (bot , message , config) => {

	  	guild = message.guild;

    	if( !guild.available ) {

			return message.reply("An error ocurred, please try again");
	  	}

	  	botAccounts = [];

	  	guild.members.forEach(member => {

	  		if(member.user.bot) {

	  			botAccounts.push(member.user.id);

	  		}

	  	})

	  	const embed = {
	    	title: `Info about ${guild.name}`,
			color: guild.members.get(bot.user.id).highestRole.color,
	    	thumbnail: {
			
			  url: guild.iconURL
	   		
	   		},
	    	
	    	fields: [

	    		{
	    			name: 'Name :',
	    			value: guild.name,
	    			inline: true
	    		},

	    		{
	    			name: 'ID :',
	    			value: guild.id,
	    			inline: true
	    		},

	    		{
					name: 'Default Channel :',
					value: `#${guild.defaultChannel.name}`,
					inline: true
			    },

			    {
					name: 'Creation Date:',
					value: guild.createdAt,
					inline: true
			    },

			    {
	    			name: 'Emojis :',
	    			value: guild.emojis.size,
	    			inline: true
	    		},

	    		{
	    			name: 'Roles :',
	    			value: guild.roles.size,
	    			inline: true
	    		},

	    		{
	    			name: 'Members :',
	    			value: guild.members.size,
	    			inline: true
	    		},

	    		{
	    			name: 'Bots :',
	    			value: botAccounts.length,
	    			inline: true
	    		},

	    		{
	    			name: 'Owner :',
	    			value: `${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.displayName})`,
	    			inline: true
	    		},

	    		{
	    			name: 'Region :',
	    			value: guild.region,
	    			inline: true
	    		},

	    		{
	    			name: 'Bot Custom Prefix :',
	    			value: `\`${servers[guild.id].config.prefix}\``,
	    			inline: true
	    		},

	    		{
	    			name: 'Greeting :',
	    			value: `Enabled: ${servers[guild.id].config.greet}\nMessage: ${servers[guild.id].config.greetMessage}`,
	    			inline: true
	    		},

	    		{
	    			name: 'Farewell :',
	    			value: `Enabled: ${servers[guild.id].config.farewell}\nMessage: ${servers[guild.id].config.farewellMessage}`,
	    			inline: true
	    		},

    		]
    		
    	}
    

    	message.channel.sendEmbed(embed)
    		.then(message => message)
    		.catch(error => message.channel.sendMessage(`An error has occured, ${error}`))
	
	}
}

module.exports = command;