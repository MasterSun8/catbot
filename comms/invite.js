module.exports = {
	name: 'invite',
	description: "whalecum",
	execute(msg, args){
		msg.channel.send("https://discord.com/oauth2/authorize?client_id=836338260439203870&scope=bot&permissions=0");
	}
	
}