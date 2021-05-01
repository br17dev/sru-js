module.exports = {
    name: 'deploy',
    description: 'Deploy command',
    execute(Discord, client, message, args) {
        message.delete({timeout: 5000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
        .catch(console.error);

		if(message.member.roles.cache.some(r => r.name === "SRU Medic") || message.member.roles.cache.some(r => r.name === "SRU Officer I") || message.member.roles.cache.some(r => r.name === "SRU Officer II") || message.member.roles.cache.some(r => r.name === "SRU Specialist") || message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
			if (args[0] === `1` || args[0] === `2` || args[0] === `3` || args[0] === `4` || args[0] === `5` || args[0] === `6` || args[0] === `X` || args[0] === `Y`) {
				let desc = args.slice(1).join(` `);
				let channel = client.channels.cache.find(channel => channel.name === "sru-callout")

				if (desc === ""){
					channel.send(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\nN/A.\n\n**Callout ID:**\nLoading...`)
					.then(msg => {
						setTimeout(function(){
							msg.edit(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\nN/A.\n\n**Callout ID:**\n${msg.id}`);
						},1000)
						})
				} 
                
                else {
					channel.send(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\n${desc}.`)
					.then(msg => {
						setTimeout(function(){
							msg.edit(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\n${desc}.\n\n**Callout ID:**\n${msg.id}`)
						},1000)
					})
				}
			} 
            
            else {
				message.lineReply(`Please make sure to follow the proper format, as outlines in #sru-callout.`)
				.then(msg => {
					msg.delete({ timeout: 5000})
				})
				.catch(console.error);
			}
		} 
        
        else {
			message.lineReply(`You must be a full time member of SRU in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team`)
		.then(msg => {
			msg.delete({ timeout: 5000})
		})
		.catch(console.error);
    	}
    }
};