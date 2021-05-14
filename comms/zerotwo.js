module.exports = {
	name: 'zerotwo',
	description: "uwu",
	execute(msg, args){
		if(loop){loop=false;}else{var loop=true;}
		if(loop){
		var interval = setInterval (function () {
            msg.channel.send("!zerotwo");
        }, 60 * 1000); 
	}else{loop}
	}
}