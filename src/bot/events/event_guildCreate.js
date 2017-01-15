/*

	WHEN BOT JOINS A GUILD

*/

const fs = require('fs');
const path = require('path');

const pathToServers = path.resolve(__dirname, "../servers.json")
const servers = JSON.parse(fs.readFileSync(pathToServers));

const event = (guild) => {

	//

}

module.exports = event;