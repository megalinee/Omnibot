/*

	WHEN A USER GETS BANNED

*/

const path = require('path');

const pathToServers = path.resolve(__dirname, '../servers.json');
const servers = require(pathToServers);

const event = (guild, user) => {

	if(servers[guild.id].config.logChannelID === 'not set') {

		guild.defaultChannel.sendMessage(`You have not set your \`logs\` channel. Do \`|config logs #channelmention\``);

	} else {

		const serverConfig = servers[guild.id].config;

		if(serverConfig.logChannelID) {}

	}

}

module.exports = event;