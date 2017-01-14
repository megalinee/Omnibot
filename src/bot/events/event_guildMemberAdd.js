/*

	GUILD MEMBER ADD
		 EVENT

*/

const event = (member) => {

	console.log(`${member.displayName} joined ${member.guild.name}`);
	
}

module.exports = event;