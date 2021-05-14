module.exports = {
	name: 'pet',
	description: "petpetpet",
	execute(msg, args, Discord){
		const pet = require('pet-pet-gif');
		const fs = require('fs');

const user = msg.mentions.users.first() || msg.author;

const av = user.avatarURL({ format: "png", size: 2048});

pet(av).then((pat) => {
fs.writeFile('comms/gif/idi_nahui.gif', pat, function (err) {
	const attachment = new Discord.MessageAttachment('comms/gif/idi_nahui.gif', 'idi_nahui.gif');
	const newEmbed = new Discord.MessageEmbed()
	.attachFiles(attachment)
	.setColor('#ffb6c1')
	.setTitle('Pat Pat')
	.setImage('attachment://idi_nahui.gif');
	msg.channel.send(newEmbed);
    })
});
if(user.username==="Kubek344"){
msg.channel.send('i tak cie nie lubie.')
}
}
}