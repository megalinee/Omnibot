/*
	KICK COMMAND
*/

const command = {

	name: 'kick',
	description: 'Kick a player from a guild.',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {

        var filter = message

        var textchannel = message.guild.channels.find('name', 'mod-log');

        var mes = message.content.split(" ").splice(2, 3).join(" ")

        if(!mes){
            mes = "Unknown reason"
        }

        var mention = message.mentions.users.first()

        var user = message.guild.members.get(msg.mentions.users.first().id);

        if(!user){
            return
            message.channel.sendMessage("Please mention a user.")
        }

        var memb = bot.users.get(user.id);

        user.kick()

        channel.awaitMessages(filter, { max: 1 })
 .then(collected => 
	 if(message.content.includes('yes')) {
		 
 message.channel.sendMessage('What would you like to send him?')
 
 channel.awaitMessages(filter, { max: 1 })
 .then(collected =>
	 
	 const embed = new Discord.RichEmbed()
		 .setTitle('You have been kicked!')
		 .setColor(0x00AE86)
		 .addField('You have been kicked out of the guild ' + message.guild + ' for ' + )

		 mention.sendEmbed(
		 embed,
		 '',
		 { disableEveryone: true }
	 );
	 
 )}
	if(message.content.includes('no')) return;
);
          }
	      }
      }   
	  }
  }
