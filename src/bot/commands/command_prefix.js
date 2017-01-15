/*

    SETTINGS COMMAND

*/

var config = require("../config/config.json");

const command = {

    name: 'prefix',
    description: 'A command that let you change the prefix for your guild',
    arguments: ['prefix'],
    requirement: 'none',
    process: (bot , message , config) => {
 
        let args = message.content.split(" ").slice(1);

        config[message.guild.id].prefix = args;
        message.channel.sendEmbed({
            color: 0x656a7d,
            title: `My prefix is now ${args}`
        });

    }

}

module.exports = command;