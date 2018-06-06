const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
var userData = JSON.parse(fs.readFileSync('Storage/userInfo.json', 'utf8'));

const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

client.on('message', message => {
    if (message.content.toLowerCase() === '!lui2k') {        
        if(!userData[message.author.id]) userData[message.author.id] = {
                messagesSent: 0
            }
        userData[message.author.id].messagesSent ++;
        fs.writeFile("Storage/userInfo.json", JSON.stringify(userData));
        message.reply('Running test bot');
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
