module.exports = {
	name: 'code',
	description: "error",
	execute(msg, args){
		const fs = require('fs');
		msg.channel.send("```"+fs.readFileSync("index.js").toString()+"```")
	}
}