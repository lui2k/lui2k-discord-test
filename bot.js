const Discord = require('discord.js');
const client = new Discord.Client();

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];
var PFitems = ['cache','cobble','inferno','mirage','nuke','overpass','train','subzero','dust2','canals'];


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto') {
        message.reply('Enter !ActiveDutyVeto  OR  !PopflashVeto');
    }
});


client.login(process.env.BOT_TOKEN);
