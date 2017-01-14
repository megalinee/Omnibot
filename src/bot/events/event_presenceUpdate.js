/*

	PRESENCE UPDATE
		 EVENT

*/

const event = (oldMember, newMember) => {

	if(oldMember.presence.status === 'offline' && newMember.presence.status === 'online') {

		console.log(`${newMember.displayName} is now online`);

	}

}

module.exports = event;