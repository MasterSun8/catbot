module.exports = {
	name: 'av',
	description: "your avatar",
	execute(msg, args, Discord){		
    const user = msg.mentions.users.first() || msg.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(user.username + "'s avatar")
        .setImage(user.avatarURL({ dynamic:true , size: 1024 }));
    msg.channel.send(avatarEmbed);
	}
}