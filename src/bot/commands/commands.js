/*

	LIST OF COMMANDS TO EXPORT

*/

var commands = {

	ping: require('./command_ping.js'),
	say: require('./command_say.js'),
	prefix: require('./command_prefix.js')

}

module.exports = commands;