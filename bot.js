const Discord = require('discord.js');
const client = new Discord.Client();

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];
var PFitems = ['cache','cobble','inferno','mirage','nuke','overpass','train','subzero','dust2','canals'];
var user = "";


client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setActivity({game: {name: "CS:GO", type: 0}});
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto') {
        message.reply('Enter !ActiveDutyVeto  OR  !PopflashVeto');
        user = message.mentions.members.first();
    }    
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!!mapUser') {
        message.reply(user + " is the active user");
    }    
});


client.login(process.env.BOT_TOKEN);
