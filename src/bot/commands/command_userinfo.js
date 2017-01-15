/*

    USER INFO COMMAND

*/

const command = {

	name: 'userinfo',
	description: 'Get info about a user in a specfic guild.',
	arguments: [],
	requirement: 'none',
	process: (bot , message , config) => {

        var author;
    
        if(!message.mentions.users.first()) author = message.author;
    
        if(message.mentions.users.first()) author = message.mentions.users.first();
    
        const embed = {

            author: {
                name: author.username,
                icon_url: author.avatarURL
            },
            color: 0x00AE86,
            footer: {
                text: 'Omni Bot | ' + new Date(),
                icon_url: bot.user.avatarURL
            },
            title: 'Info about ' + author.username,
            thumbnail: {
                url: author.avatarURL
            },
            fields: [
                {
                    name: 'Date account made',
                    value: author.createdAt,
                    inline: true
                },
                {
                    name: 'Author ID',
                    value: author.id,
                    inline: true
                }
            ],
            url: 'http://quif.github.io/omnibot'

        }

        message.channel.sendEmbed(embed);

    }

}

module.exports = command;
