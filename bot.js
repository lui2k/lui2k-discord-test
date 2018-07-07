const Discord = require('discord.js');
const client = new Discord.Client();

var items = ['cache','dust2','inferno','mirage','nuke','overpass','train'];
var PFitems = ['cache','cobble','inferno','mirage','nuke','overpass','train','subzero','dust2','canals'];
var pickSide = ['heads','tails'];
var user;
var maps;
var mapsLeft;
var allowBan = false;
var bestOfSelected = false;
var bestOf;


client.on('message', message => {
	if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto'  || message.content.toLowerCase() === '!veto') {
		message.reply('Enter !veto bestOfOne  OR  !veto bestOfThree');
		mapsLeft = 50;
		bestOfSelected=false;
		allowBan =false;
	}
});

client.on('message', message=> {
	if(message.content.toLowerCase() === '!veto flipcoin' || message.content.toLowerCase() === '!veto flipacoin')
	{
		message.reply('the coin has landed on '+ pickSide[Math.floor(Math.random()*pickSide.length)] + '.');
	}
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto bestofone' && !allowBan && !bestOfSelected) {
	    bestOf = 1;
	    bestOfSelected=true;
	    allowBan =false;
	    message.reply('Enter !Veto ActiveDuty  OR  !Veto Popflash for a best of ' + bestOf + "match.");
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto bestofthree' && !allowBan && !bestOfSelected) {
	    bestOf = 3;
	    bestOfSelected=true;
	    allowBan =false;
	    message.reply('Enter !Veto ActiveDuty  OR  !Veto Popflash for a best of ' + bestOf + "match.");
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto activeduty' && !allowBan && bestOfSelected) {
        maps = 'cache, dust2, inferno, mirage, nuke, overpass, train';
        message.reply('Active Duty Map Veto starting: Type !veto MapName to ban any of the following maps: ' + maps);
        mapsLeft = 7; 
        allowBan=true;
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto popflash'  && !allowBan && bestOfSelected) {
	    maps = 'subzero, dust2, canals, cobble, cache, inferno, mirage, nuke, overpass, train';
	    message.reply('Popflash Map Veto starting: Type !veto MapName to ban any of the following maps: ' + maps);
	    mapsLeft = 10; 
	    allowBan=true;
    }
});


//MAPS LEFT CMD
client.on('message', message => {
	if (message.content.toLowerCase() === '!mapsleft' && allowBan) {
		message.reply("Maps left: "+maps + " ("+(mapsLeft - 1)+")");
	}
});

//BOT HELP CMD
client.on('message', message => {
    if (message.content.toLowerCase() === '!veto help') {
	    message.reply("Need help with the Veto Bot? Visit http://csgoscrims.co.uk/discordBot.html or contact the developer: Lui2k#3225 ");
    }
});


//MAPS
client.on('message', message => {
    if (message.content.toLowerCase() === '!veto cobble' && maps.indexOf('cobble')!= -1 && allowBan) {
        maps = maps.replace('cobble, ', '');
        message.reply('Cobblestone removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto cache' && maps.indexOf('cache')!= -1 && allowBan) {
        maps = maps.replace('cache, ', '');
        mapsLeft -= 1; 
        message.reply('Cache removed. Maps left: ' + maps);
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto mirage' && maps.indexOf('mirage')!= -1 && allowBan) {
        maps = maps.replace('mirage, ', '');
        mapsLeft -= 1; 
        message.reply('Mirage removed. Maps left: ' + maps);
        if(mapsLeft==bestOf)
        {
		message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!")
		allowBan=false;
		bestOfSelected=false;
        }
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto nuke' && maps.indexOf('nuke')!= -1 && allowBan) {
        maps = maps.replace('nuke, ', '');
        message.reply('Nuke removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});



client.on('message', message => {
    if (message.content.toLowerCase() === '!veto overpass' && maps.indexOf('overpass')!= -1 && allowBan) {
        maps = maps.replace('overpass, ', '');
        message.reply('Overpass removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto train' && maps.indexOf('train')!= -1 && allowBan) {
        maps = maps.replace('train', '');
        message.reply('Train removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto inferno' && maps.indexOf('inferno')!= -1 && allowBan ) {
        maps = maps.replace('inferno, ', '');
        message.reply('Inferno removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto canals' && maps.indexOf('canals')!= -1 &&allowBan) {
        maps = maps.replace('canals, ', '');
        message.reply('Canals removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto subzero' && maps.indexOf('subzero')!= -1 &&allowBan) {
        maps = maps.replace('subzero, ', '');
        message.reply('Subzero removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
        
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!veto dust2' && maps.indexOf('dust2')!= -1 &&allowBan) {
        maps = maps.replace('dust2, ', '');
        message.reply('Dust 2 removed. Maps left: ' + maps);
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            allowBan=false;
            bestOfSelected=false;
        }
    }
});


client.on('message',message=> {
    if(message.content.toLowerCase() === '!randommap' || message.content.toLowerCase() === '!random map' ) {
     message.reply( items[Math.floor(Math.random()*items.length)] );
    }
});



client.on('message',message=> {
    if(message.content.toLowerCase() === '!randompopflashmap' || message.content.toLowerCase() === '!random popflash map' ) {
     message.reply( PFitems[Math.floor(Math.random()*PFitems.length)] );
    }
});


///EAL-SPECIFIC MAP VETO (Contact @Lui2k_ for specific)
var ealVeto = false, coinFlipped = false, coinFlipDone =  false, ealAllowBan = false;
var startingTeam = "", userA = "", userB = "";

client.on('message', message => {
	if (message.content.toLowerCase() === '!ealmapveto' || message.content.toLowerCase() === '!eal map veto'  || message.content.toLowerCase() === '!eal veto') {
		message.reply('Running the EAL Map Veto. \n \n Each team leader predicts a coin flip: \n Type !ealveto heads  OR  !ealveto tails. **(START WITH !ealveto heads)**');
		mapsLeft = 50;
		bestOfSelected=false;
		ealAllowBan =false;
        	coinFlipped=false;
        	ealVeto = true;
		coinFlipDone=false;
	}
    
    if (message.content.toLowerCase() === '!ealveto heads' || message.content.toLowerCase() === '!eal veto heads'  || message.content.toLowerCase() === '!eal heads') {
	    userA = message.author.toString();
	    message.channel.send(userA +" has selected heads.");
	}
    else if (message.content.toLowerCase() === '!ealveto tails' || message.content.toLowerCase() === '!eal veto tails'  || message.content.toLowerCase() === '!eal tails') {
	    userB = message.author.toString();
	    message.channel.send(userB +" has selected tails.");
	    var result = pickSide[Math.floor(Math.random()*pickSide.length)];
	    coinFlipped=true;
	}
	if(coinFlipped && !ealAllowBan)
	{
		    if(result=="heads")
		    {
			    message.channel.send(userA + " predicted the coinflip correctly. Do you elect to begin the veto yourself, or pass it to " + userB + "'s team? \n \n !eal myTeam // !eal otherTeam");
		    }
		    else if(result=="tails")
		    {
			    message.channel.send(userB + "  predicted the coinflip correctly. Do you elect to begin the veto yourself, or pass it to " + userA + "'s team? \n \n !eal myTeam // !eal otherTeam");
		    }
		coinFlipDone=true;
		coinFlipped=false;
	}
	
	if (message.content.toLowerCase() === '!eal myteam' || message.content.toLowerCase() === '!eal me') {
		if(result=="heads" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userA.toString();
		}
		else if(result=="tails" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userB.toString();
		}
		message.channel.send(startingTeam + " will start the veto.");
		maps = 'cache, dust2, inferno, mirage, nuke, overpass, train';
        	message.reply('Active Duty Map Veto starting for EAL S2 fixture: Type !veto MapName to ban any of the following maps: ' + maps);
        	mapsLeft = 7; 
        	ealAllowBan=true;
		bestOf = 3;
	    	bestOfSelected=true;
		
	}
	
	if (message.content.toLowerCase() === '!eal otherteam') {
		if(result=="heads" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userB.toString();
		}
		else if(result=="tails" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userA.toString();
		}
		message.channel.send(startingTeam + " will start the veto.");
		maps = 'cache, dust2, inferno, mirage, nuke, overpass, train';
        	message.reply('Active Duty Map Veto starting for EAL S2 fixture: Type !veto MapName to ban any of the following maps: ' + maps);
        	mapsLeft = 7; 
        	ealAllowBan=true;
		bestOf = 3;
	    	bestOfSelected=true;
	}
	
	if (message.content.toLowerCase() === '!eal otherteam') {
		if(result=="heads" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userB.toString();
		}
		else if(result=="tails" && coinFlipDone && !ealAllowBan)
		{
			startingTeam = userA.toString();
		}
		message.channel.send(startingTeam + " will start the veto.");
		maps = 'cache, dust2, inferno, mirage, nuke, overpass, train';
        	message.reply('Active Duty Map Veto starting for EAL S2 fixture: Type !veto MapName to ban any of the following maps: ' + maps);
        	mapsLeft = 7; 
        	ealAllowBan=true;
		bestOf = 3;
	    	bestOfSelected=true;
	}
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto cache' && maps.indexOf('cache')!= -1 &&ealAllowBan) {
        maps = maps.replace('cache, ', '');
        message.reply('Cache removed.');
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }
	
if (message.content.toLowerCase() === '!veto dust2' && maps.indexOf('dust2')!= -1 &&ealAllowBan) {
        maps = maps.replace('dust2, ', '');
        message.reply("Dust 2 removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }
	
	
if (message.content.toLowerCase() === '!veto inferno' && maps.indexOf('inferno')!= -1 &&ealAllowBan) {
        maps = maps.replace('inferno, ', '');
        message.reply("Inferno removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }
	
if (message.content.toLowerCase() === '!veto mirage' && maps.indexOf('mirage')!= -1 &&ealAllowBan) {
        maps = maps.replace('mirage, ', '');
        message.reply("Mirage removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }
if (message.content.toLowerCase() === '!veto nuke' && maps.indexOf('nuke')!= -1 &&ealAllowBan) {
        maps = maps.replace('nuke, ', '');
        message.reply("Nuke removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }

if (message.content.toLowerCase() === '!veto overpass' && maps.indexOf('overpass')!= -1 &&ealAllowBan) {
        maps = maps.replace('overpass, ', '');
        message.reply("Overpass removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }

	
if (message.content.toLowerCase() === '!veto train' && maps.indexOf('train')!= -1 &&ealAllowBan) {
        maps = maps.replace('train', '');
        message.reply("Train removed.");
        mapsLeft -= 1; 
        if(mapsLeft==bestOf)
        {
            message.reply("you will play on " + maps + " (BO" + bestOf + "). Good luck, have fun!" );
            ealAllowBan=false;
            bestOfSelected=false;
        }
    }

	
});
    
client.login(process.env.BOT_TOKEN);
