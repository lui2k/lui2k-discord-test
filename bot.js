const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dataFile = require("./data.json");

const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];

client.on('message', message => {
    if (message.content.toLowerCase() === '!lui2k') {
        message.reply('Running test bot');
        dataFile.num = (config.num + 1);
        
        fs.writeFile("./data.json",JSON.stringify(dataFile), (err) => console.error);
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
