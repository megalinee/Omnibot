/*

	THE MAIN FILE FOR THE BOT

*/

const Discord = require('discord.js'); // IMPORT DISCORD
const bot = new Discord.Client(); // BOT OBJECT

const fs = require('fs'); // IMPORT FS
const colour = require('colors') // COLOURED CONSOLE IS 🔥

const devConfig = JSON.parse(fs.readFileSync('../../../omnibot_config.json')); // CONFIG FOR PRIVATE STUFF

const commands = require('./commands/commands.js');
const events = require('./events/events.js');

/*

	MOD EVENTS 

*/

bot.on('presenceUpdate', events.presenceUpdate);

/*

	COMMAND HANDLER

*/

/*
	BOT LOGIN
*/

bot.login(devConfig.token); // LOGIN