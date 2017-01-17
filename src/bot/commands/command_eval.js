/*

    EVAL COMMAND

*/

const adminlist = require('../admins.json').admins;
const util = require('util');

const command = {
    name: "eval",
    description: "Eval a string",
    arguments: ["text"],
    permission: "requirement",
    alias: ["e"],
    process: (bot , message , config) => {

        if(adminlist.indexOf(message.author.id) !== -1) {
            
            let suffix = message.content.split(' ').splice(1).join(' ');
            
            try {

                let evaled = eval(suffix);
    			let objInsp = util.inspect(evaled, {depth: 0});
                message.channel.sendMessage(`**EVAL** :\n\`\`\`js\n${suffix}\`\`\`\n**RESULT** : (worked)\n\`\`\`js\n${objInsp}\`\`\``);
            
            } catch(error) {
               
                message.channel.sendMessage(`**EVAL** :\n\`\`\`js\n${suffix}\`\`\`\n**RESULT** : (not worked)\n\`\`\`js\n${error}\`\`\``);
            
            }
            
        } else {

            message.channel.sendMessage(`You don't have the permission to use this command`);
        
        }
    
    }
}

module.exports = command;
