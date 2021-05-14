module.exports = {
	name: 'mozna',
	description: "nie mozna",
	execute(msg, Discord){
		const attachment = new Discord.MessageAttachment('comms/kitten/mozna.jpg', 'mozna.jpg');
		const newEmbed = new Discord.MessageEmbed()
		.attachFiles(attachment)
		.setColor('#36393f')
		.setTitle('Nie można')
		.setImage('attachment://mozna.jpg');
	msg.channel.send(newEmbed);
	}
	
}