const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';

var items = ['cache','cobble','inferno','mirage','nuke','overpass','train'];
var PFitems = ['cache','cobble','inferno','mirage','nuke','overpass','train','subzero','dust2','canals'];
var user = "";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!mapveto') {
    msg.reply('Select !ActiveDutyVeto  OR  !PopflashVeto');
    user = msg.author;
  }
});

client.on('message', msg => {
  if (msg.content === '!mapuser') {
    msg.reply('Current user: ' + user);
  }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
