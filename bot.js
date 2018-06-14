const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';
var correctLength = false;

client.on('message', message => {
    if (message.content.toLowerCase().startsWith("!scrimadd"))
    {
        correctLength=false;
        var info = message.content.toLowerCase();
        info = info.split(" ");
        
        if(info.length==4)
        {
            correctLength = true;
        }
        
        if(info[3].toString().match("(any|cache|cobblestone|dust2|mirage|inferno|overpass|nuke|train)"))
        { console.log("Map " + true); }
        else
        { console.log("Map " + false); return; }
        
        if(info[2].toString().match("(eu|na|sa|afr|oce|asia)"))
        { console.log("Region " + true); }
        else
        { console.log("Region " + false); return; }
        
        var str = "http://csgoscrims.co.uk/scrimDiscordAdd.php?teamName=" + info[1] + "&user=" + message.author + "&region=" + info[2] + "&map=" + info[3];
        
        message.reply(str);
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
