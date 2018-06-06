const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var userData = JSON.parse(fs.readFileSync('/userInfo.json', 'utf8'));

const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];

client.on('message', message => {
    if (message.content.toLowerCase() === '!lui2k') {
        message.reply('Running test bot');
        
        if(!userData[message.author.id]) 
        {
            userData[message.author.id] = {
                messagesSent: 0
            }
        }
        userData[message.author.id].messagesSent ++;
        
        fs.writeFile("/userInfo.json", JSON.stringify(userData));
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
