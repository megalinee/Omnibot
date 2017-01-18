/*

	KEEP TRACK OF EVENTS
		THEN EXPORT

*/

const events = {

	//presenceUpdate : require('./event_presenceUpdate.js'),
	guildMemberAdd: require('./event_guildMemberAdd.js'),
	guildCreate: require('./event_guildCreate.js'),
	guildBanAdd: require('./event_guildBanAdd.js')

}

module.exports = events;