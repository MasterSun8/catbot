module.exports = {
	name: 'kitten',
	description: "uwu",
	execute(msg, args, Discord){

const fs = require('fs')
const request = require('request')

if(url === 'https://cataas.com/cat/gif' || Math.floor(Math.random()*2)===1){
var url = 'https://cataas.com/cat/gif'
}else{
var url = 'https://cataas.com/cat'
}
while(!url){
	
}
const path = './comms/gif/nya.gif'

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

download(url, path, () => {
const attachment = new Discord.MessageAttachment('comms/gif/nya.gif', 'nya.gif');
	const newEmbed = new Discord.MessageEmbed()
	.attachFiles(attachment)
	.setColor('#ffb6c1')
	.setTitle('Nya')
	.setImage('attachment://nya.gif');
	msg.channel.send(newEmbed);
})

	
}
}