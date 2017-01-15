const command = {

	name: 'userinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {

  var author;
  
  if(!message.mentions.users.first()) author = message.author
  
  if(message.mentions.users.first()) author = message.mentions.users.first()
  
  const embed = new Discord.RichEmbed()
  .setTitle('Info about ' + author.username)
  .setAuthor(author.username, author.avatarURL)
  .setColor(0x00AE86)
  .setFooter('Omni Bot | ' + new Date, bot.user.avatarURL)
  .setThumbnail(author.avatarURL)
  .setURL('http://quif.github.io/omnibot')
  .addField('Date account made', author.createdAt)
  .addField('Author ID', author.id, true)

  msg.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );

	}

}
