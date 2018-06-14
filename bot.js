const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

client.on('message', message => {
    if (message.content.toLowerCase().startsWith("!scrimadd"))
    {        
        message.reply("allowed to add.");
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
