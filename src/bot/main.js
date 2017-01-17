/*

	THE MAIN FILE FOR THE BOT

*/

const Discord = require('discord.js'); // IMPORT DISCORD
const bot = new Discord.Client(); // BOT OBJECT

const fs = require('fs'); // IMPORT FS
const colour = require('colors') // COLOURED CONSOLE IS 🔥

const devConfig = JSON.parse(fs.readFileSync('../../../omnibot_config.json')); // CONFIG FOR PRIVATE STUFF
var config = JSON.parse(fs.readFileSync('./config.json')); // CONFIG FOR DEFAULT PREFIX AND GAME 


const commands = require('./commands/commands.js');
const events = require('./events/events.js');

var servers = require('./servers.json');

/*

	MOD EVENTS HANDLER 

*/

bot.on('guildMemberAdd', events.guildMemberAdd);
bot.on('guildCreate', events.guildCreate);

/*

	READY EVENT

*/

bot.on('ready', () => {

	bot.user.setGame(config.game, 'http://twitch.tv/notStreaming');

	console.log(`BOT IS ${'ONLINE'.green}`);
	
	console.log(`| Logged in on account ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`.green);

	console.log(`\n| Performing on ${`${bot.guilds.size}`.yellow} guilds and ${`${bot.users.size}`.yellow} people`)

})

/*

	MESSAGE HANDLER

*/

bot.on('message', message => { try {

	/*

		COMMAND HANDLER

	*/

	if(message.type !== 'dm') {

		if(servers[message.guild.id]) {	
	
			if(message.content.startsWith(servers[message.guild.id].config.prefix)) {
		
				let input = message.content.toLowerCase();
				let cmdText = input.split(' ')[0].substring(1);
		
				let foundCommand = false;
				let command;
		
				for(cmd in commands) {
	
					try {
	
    	            	if(commands[cmd] && (cmdText === commands[cmd].name || commands[cmd].alias.indexOf(cmdText) !== -1)) {
    	            	    
    	            	    foundCommand = true;
    	            	    
    	            	    command = cmd;
    	            	    
    	            	    break;
    	            	
    	            	} else {
    	            	
    	            	    foundCommand = false;
    	            	
    	            	}
	
    	            } catch(error) {
	
    	            	// COMMAND WASNT FOUND


    	            }
    	        }
		
				if(foundCommand) {
		
		
					// COMMAND HAS BEEN TRIGGERED
		
					//console.log(`| COMMAND ${cmdText} WAS TRIGGERED BY ${message.author.username}#${message.author.discriminator}`.yellow);
		
					try {

						if(commands[command].requirement === 'none') {
		
							commands[command].process(bot, message, config);

						} else if(commands[command].requirement === 'bot-commander') {

							if(servers[message.guild.id]['bot-commanders'].indexOf(message.author.id) !== -1 || message.author.id === message.guild.owner.id) {

								// HAS COMMANDER ROLE

								commands[command].process(bot, message, config);

							} else {

								message.channel.sendMessage(`:lock: You must have server bot-commander. An administrator with the \`ADMINISTRATOR\` permission can give this to you by doing \`${servers[message.guild.id].config.prefix}commander add ${message.author}\`.`);

							}

						} else {

							message.channel.sendMessage('hi');

						}
	
						servers = require('./servers.json');
		
					} catch(error) {
		
						console.log(`| COMMAND ${cmdText.toUpperCase()} FAILED : ${error}`.red)
		
					}
		
				}
				
		
			}
	
		} else {
	
			console.log(`| COULD NOT FIND SERVER CONFIG FOR GUILD: ${message.guild.id}`.red);
	
			servers[message.guild.id] = {
	
				config: {
					prefix: '|',
					greet: false,
					greetMessage: 'Welcome %USERNAME% to %GUILDNAME%',
					farewell: false,
					farewellMessage: 'Bye bye %USERNAME%'
				},
				logs: [],
				'bot-commanders': []

	
			};
	
			fs.writeFile('./servers.json', JSON.stringify(servers, 'null', 4));
	
			console.log(`| CREATED CONFIG FOR ${message.guild.id}`.yellow);
	
	
	
		}
	}

	} catch(error) {

		console.log(`| ERROR IN MESSAGE HANDLER ${error}`.red);

	}

})

/*
	BOT LOGIN
*/

bot.login(devConfig.token); // LOGIN
