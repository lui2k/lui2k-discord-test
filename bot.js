const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';
var correctLength = false, map = false, region=false;

client.on('message', message => {
    if (message.content.toLowerCase().startsWith("!scrimadd"))
    {
        correctLength=false;
        var info = message.content.toLowerCase();
        info = info.split(" ");
        
        if(info.length==4)
        { correctLength = true; }
        
        if(info[3].toString().match("(any|cache|cobblestone|dust2|mirage|inferno|overpass|nuke|train)"))
        { map=true; }
        else
        { message.reply("Enter a valid map from: Any, Cache, Cobblestone, Dust2, Mirage, Inferno, Overpass, Nuke, Train"); return; }
        
        if(info[2].toString().match("(eu|na|sa|afr|oce|asia)"))
        { region=true; }
        else
        { message.reply("Enter a region from: EU, NA, SA, AFR, OCE, ASIA"); return; }
        
        if(correctLength && map && region)
        {
            var str = "http://csgoscrims.co.uk/scrimDiscordAdd.php?teamName=" + info[1] + "&user=" + message.author + "&region=" + info[2] + "&map=" + info[3];
            message.reply(str);
        };
        else
        {
            message.reply("Error");
        }
    }
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
