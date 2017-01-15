/*

	GUILD MEMBER ADD
		 EVENT

*/

const event = function(member) {

	console.log(`${member.displayName} joined ${member.guild.name}`);
	
}

module.exports = event;