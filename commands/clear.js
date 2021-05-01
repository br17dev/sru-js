module.exports = {
    name: 'clear',
    description: 'Clear command',
    execute(Discord, client, message, args) {
        message.delete({timeout: 5000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
        .catch(console.error);

		if(message.member.roles.cache.some(r => r.name === "SRU Medic") || message.member.roles.cache.some(r => r.name === "SRU Officer I") || message.member.roles.cache.some(r => r.name === "SRU Officer II") || message.member.roles.cache.some(r => r.name === "SRU Specialist") || message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
			if (args.length != 1 ){
				message.lineReply(`Please make sure to follow the proper format!`)
				.then(msg => {
			    msg.delete({ timeout: 5000 })
			  })
			  .catch(console.error);
			} 
            
            else {
				if(message.channel.id === `830412292175822912`) {
					if(args[0] === `838028551516061726`) { // to be changed with the original callout message ID
						message.lineReply(`You cannot delete this message.`)
		  			    .then(message => {
						    message.delete({timeout:5000})
						})
		  			.catch(console.error);
					} 
                    
                    else {
						message.lineReply(`Clearing Callout: ${args[0]}`)
                        .then(message => {
                            message.delete({timeout:5000})
                        })
                        .catch(console.error);

                        message.channel.messages.fetch(args[0])
	  			        .then(message => {
						message.delete({timeout:5000})
						})
	  			        .catch(console.error);
				    }
			    } 
            
                else {
                    message.lineReply(`Please make sure to utilise this command in the appropriate channel <#830412292175822912>.`)
                    .then(msg => {
                        msg.delete({ timeout: 5000})
                    })
                    .catch(console.error);
                }
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