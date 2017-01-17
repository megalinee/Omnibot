/*

	LIST OF COMMANDS TO EXPORT

*/

var commands = {

	ping: require('./command_ping.js'),
	prune: require('./command_prune.js'),
	eval: require('./command_eval.js'),
	say: require('./command_say.js'),
	prefix: require('./command_prefix.js'),
	userinfo: require('./command_userinfo.js'),
	guildinfo: require('./command_guildinfo.js'),
	ban: require('./command_ban.js'),
	kick: require('./command_kick.js'),
	announce: require('./command_announce.js'),
	commander: require('./command_commander.js'),
	greeting: require('./command_greeting.js'),
	farewell: require('./command_farewell.js')

}

module.exports = commands;
