const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

const token = fs.readFileSync("token.txt").toString();

bot.commands = new Discord.Collection();

const commfiles = fs.readdirSync('./comms').filter(file => file.endsWith('.js'));

for(const file of commfiles){
	const comm=require(`./comms/${file}`);
	
	bot.commands.set(comm.name, comm)
}

var prefix = "!";

bot.on('ready', () =>{
	console.log('uwu');
})

bot.on('message',  msg =>{
if(msg.author.bot){return;}
if(msg.author.username==="Bartisz cumming" && msg.content.startsWith(prefix)){msg.channel.send('avak co ty dupisz');
return;}
	switch(msg.content.toLowerCase()){
		case "uwu":
			bot.commands.get('uwu').execute(msg);
		break;
		case "owo":
			bot.commands.get('owo').execute(msg);
		break;
		case "nope":
		bot.commands.get('nope').execute(msg);
		break;
		case "nopers":
		bot.commands.get('nope').execute(msg);
		break;
		case "arasz":
		bot.commands.get('arasz').execute(msg);
		break;
		case "arasz?":
		bot.commands.get('arasz').execute(msg);
		break;
		case "arasz co ty jarasz":
		bot.commands.get('arasz').execute(msg);
		break;
		case "można?":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "mozna?":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "można":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "mozna":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "nie mozna":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "nie można":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "nie mozna":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "nie można?":
		bot.commands.get('mozna').execute(msg, Discord);
		break;
		case "kurwa":
		bot.commands.get('kurwa').execute(msg, Discord);
		break;
		case "galaxybrane":
		bot.commands.get('brane').execute(msg, Discord);
		break;
		case ":galaxybrane:":
		bot.commands.get('brane').execute(msg, Discord);
		break;
		case "galaxybrain":
		bot.commands.get('brane').execute(msg, Discord);
		break;
	}
	
	if(!msg.content.startsWith(prefix) || msg.content.startsWith("!zerotwo")){return;}
	
	const args = msg.content.substring(prefix.length).split(" ");
	const comm = args.shift().toLowerCase();
	
	switch(comm){
		/*	case "02":
				bot.commands.get('zerotwo').execute(msg,args)
				break;*/
		case "mozna":
			bot.commands.get('mozna').execute(msg, Discord);
			break;
		case "hi":
			bot.commands.get('hi').execute(msg,args)
			break;
		case "kitku":
			bot.commands.get('kitten').execute(msg, args, Discord);
			break;
		case "kitten":
			bot.commands.get('kitten').execute(msg, args, Discord);
			break;
		case "nya":
			bot.commands.get('kitten').execute(msg, args, Discord);
			break;
		case "code":
			bot.commands.get('code').execute(msg,args,Discord);
			break;
		case "invite":
			bot.commands.get('invite').execute(msg,args);
			break;
		case "nope":
			bot.commands.get('nope').execute(msg,args);
			break;
		case "av":
			bot.commands.get('av').execute(msg,args,Discord);
			break;
		case "arasz":
			bot.commands.get('arasz').execute(msg);
			break;
		case "pet":
			bot.commands.get('pet').execute(msg,args, Discord,token);
			break;
		case "petpet":
			bot.commands.get('pet').execute(msg,args, Discord,token);
			break;
		case "pat":
			bot.commands.get('pet').execute(msg,args, Discord,token);
			break;
		case "patpat":
			bot.commands.get('pet').execute(msg,args, Discord,token);
			break;
		case "brane":
			bot.commands.get('brane').execute(msg,args);
			break;
		default:
			bot.commands.get('monkas').execute(msg,args);
			break;
	}
	})
bot.login(token);