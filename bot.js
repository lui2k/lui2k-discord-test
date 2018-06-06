const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));

const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];

client.on('message', message => {
    if (message.content.toLowerCase() === '!lui2k') {
        var sender = message.author;
        
        message.reply('Running test bot');
        
        if(!userData[sender.id]) userData[sender.id] = {
            messagesSent: 0
        }
        
        userData[sender.id].messagesSent ++;
        
        fs.writeFile("./userData.json", JSON.stringify(userData), (err) => {
            if(err) console.log(err) });
        }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
