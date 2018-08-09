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


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

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


/*EAL-SPECIFIC MAP VETO 
Suggested by ♠🅰🇳🇩🇪🇷🇸🖤🏴♠#9830
Updated 07-July-2018 11:53.
*/
var ealVeto = false, coinFlipped = false, coinFlipDone =  false, ealAllowBan = false, ealChooseSide = false, finishedRemoving = false;
var startingTeam = "", userA = "", userB = "", outcome = "", coinChoose = 0, ealBestOf;

client.on('message', message => {
	if (message.content.toLowerCase() === '!ealmapveto' || message.content.toLowerCase() === '!eal map veto'  || message.content.toLowerCase() === '!ealveto') {
		message.reply('EAL Map Veto is **live**. \n \n Start by determining the number of maps to play (bo1, bo3, bo5) \n *e.g. !ealveto bo1');
		mapsLeft = 50;
		bestOfSelected=false;
		ealAllowBan =false;
        	coinFlipped=false;
        	ealVeto = true;
		coinFlipDone=false;
		ealChooseSide = false;
		finishedRemoving = false;
		coinChoose = 0;
		ealBestOf = 0;
	}
	
	if (message.content.toLowerCase() === '!ealveto bo1' || message.content.toLowerCase() === '!eal veto bestofone') {
		ealBestOf = 1;
		bestOfSelected=true;
		ealAllowBan =false;
		message.channel.send('\n \n Each team leader predicts a coin flip: \n Type !ealveto heads  OR  !ealveto tails. **(START WITH !ealveto heads)**')
	}
	
	if (message.content.toLowerCase() === '!ealveto bo3' || message.content.toLowerCase() === '!eal veto bestofthree') {
		ealBestOf = 3;
		bestOfSelected=true;
		ealAllowBan =false;
		message.channel.send('\n \n Each team leader predicts a coin flip: \n Type !ealveto heads  OR  !ealveto tails. **(START WITH !ealveto heads)**')
	}
	
	if (message.content.toLowerCase() === '!ealveto bo5' || message.content.toLowerCase() === '!eal veto bestoffive') {
		ealBestOf = 5;
		bestOfSelected=true;
		ealAllowBan =false;
		message.channel.send('\n \n Each team leader predicts a coin flip: \n Type !ealveto heads  OR  !ealveto tails. **(START WITH !ealveto heads)**')
	}
    
	
	var result = "";
	if (message.content.toLowerCase() === '!ealveto heads') {
		userA = message.author.toString();
		coinChoose  += 1;
		
		if(coinChoose == 2)
		{
			result = pickSide[Math.floor(Math.random()*pickSide.length)];
			message.channel.send("Coinflip: " + result);
			coinFlipped=true;
			coinChoose = 0;
		}
	}
	
	if (message.content.toLowerCase() === '!ealveto tails' && message.author.toString() != userA) {
		userB = message.author.toString();
		coinChoose += 1;
		
		if(coinChoose == 2)
		{
			result = pickSide[Math.floor(Math.random()*pickSide.length)];
			message.channel.send("Coinflip: " + result);
			coinFlipped=true;
			coinChoose = 0;
		}
	}
	if(coinFlipped && !ealAllowBan)
	{
		if(result=="heads")
		{
			message.channel.send(userA + " predicted the coinflip correctly. Do you elect to begin the veto yourself, or pass it to " + userB + "'s team? \n \n !ealveto myTeam // !ealveto otherTeam");
		}
		else if(result=="tails")
		{
			message.channel.send(userB + "  predicted the coinflip correctly. Do you elect to begin the veto yourself, or pass it to " + userA + "'s team? \n \n !ealveto myTeam // !ealveto otherTeam");
		}
		coinFlipDone=true;
		coinFlipped=false;
	}
	
	if (message.content.toLowerCase() === '!ealveto myteam') {
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
		message.channel.send("maps left:"+maps);
	}	
	if (message.content.toLowerCase() === '!ealveto otherteam') {
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
		message.channel.send("maps left:"+maps);
	}
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!veto cache' && maps.indexOf('cache')!= -1 &&ealAllowBan) {
        maps = maps.replace('cache, ', '');
        message.reply('Cache removed.');
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
    }
	
if (message.content.toLowerCase() === '!veto dust2' && maps.indexOf('dust2')!= -1 &&ealAllowBan) {
        maps = maps.replace('dust2, ', '');
        message.reply("Dust 2 removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
    }
	
	
if (message.content.toLowerCase() === '!veto inferno' && maps.indexOf('inferno')!= -1 &&ealAllowBan) {
        maps = maps.replace('inferno, ', '');
        message.reply("Inferno removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
	else
	{
		message.channel.send("You will play on " + maps + ". Veto completed");
	}
    }
	
if (message.content.toLowerCase() === '!veto mirage' && maps.indexOf('mirage')!= -1 &&ealAllowBan) {
        maps = maps.replace('mirage, ', '');
        message.reply("Mirage removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
	else
	{
		message.channel.send("You will play on " + maps + ". Veto completed");
	}
    }
if (message.content.toLowerCase() === '!veto nuke' && maps.indexOf('nuke')!= -1 &&ealAllowBan) {
        maps = maps.replace('nuke, ', '');
        message.reply("Nuke removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
	else
	{
		message.channel.send("You will play on " + maps + ". Veto completed");
	}
    }

if (message.content.toLowerCase() === '!veto overpass' && maps.indexOf('overpass')!= -1 &&ealAllowBan) {
        maps = maps.replace('overpass, ', '');
        message.reply("Overpass removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
        }
	else
	{
		message.channel.send("You will play on " + maps + ". Veto completed");
	}
    }

	
if (message.content.toLowerCase() === '!veto train' && maps.indexOf('train')!= -1 &&ealAllowBan) {
        maps = maps.replace('train', '');
        message.reply("Train removed.");
        mapsLeft -= 1; 
        if(mapsLeft==ealBestOf)
        {
		finishedRemoving = true;		
		message.reply("Now pick the maps to play, starting with !pick MAP" );
		ealAllowBan=false;
	}
	else
	{
		message.channel.send("You will play on " + maps + ". Veto completed");
	}
    }
});
    
client.login(process.env.BOT_TOKEN);
