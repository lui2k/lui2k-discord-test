const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM0OTg1NjMwMTA0MDI3MTM3.DbSX1w.P343t6FMU81sJczI-m_67XoEFoc';
var correctLength = false, map = false, region=false;

client.on('message', message => {
    if (message.content.toLowerCase().startsWith("!scrimadd"))
    {
        correctLength=false;
        map=false;
        region=false;
        var info = message.content.toLowerCase();
        info = info.split(" ");
        
        if(info.length==4)
        { correctLength = true; }
        
        if(info[3].toString().match("(any|cache|cobblestone|dust2|mirage|inferno|overpass|nuke|train)"))
        { map=true; }
        
        if(info[2].toString().match("(eu|na|sa|afr|oce|asia)"))
        { region=true; }
        
        if(correctLength && map && region)
        {
            var str = "http://csgoscrims.co.uk/scrimDiscordAdd.php?teamName=" + info[1] + "&user=" + message.author + "&region=" + info[2] + "&map=" + info[3];
            var xml = new XMLHttpRequest();
            xml.open("GET", str, false);
            xml.send();
            message.reply("Uploading:" + xml.responseText);
            return;
        }
        else
        {
            message.reply("Error. Try again with the following format:  !scrimAdd TeamName Map Region. \\n \\n E.g. !scrimAdd TeamA Dust2 EU");
            return;
        }
    }
    
    if(message.content.toLowerCase().startsWith("!scrimfind"))
    {
        correctLength=false;
        map=false;
        
        var info = message.content.toLowerCase();
        info = info.split(" ");
        
        if(info.length==2)
        { correctLength=true;}
        
        if(info[1].toString().match("(any|cache|cobblestone|dust2|mirage|inferno|overpass|nuke|train)"))
        { map=true; }
               
        if(correctLength && map)
        {
            var str = "http://csgoscrims.co.uk/scrimDiscordReturn.php?map=" + info[1];
            var xml = new XMLHttpRequest();
            xml.open("GET", str, false);
            xml.send();
            message.reply("Uploading:" + xml.responseText);
            return;
        }
        else
        {
            message.reply("Error. Try again with the following format:  !scrimFind Map \\n \\n E.g. !scrimFind Inferno");
            return;
        }
    }
    
    
});


client.login(token);
//client.login(process.env.BOT_TOKEN);
