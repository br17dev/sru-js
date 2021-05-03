module.exports = {
    name: 'callout',
    description: 'Callout command',
    execute(Discord, client, message, args) {
        message.delete({timeout: 5000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
        .catch(console.error);

        // Permission Check SRU Supervisor+
        
        if(message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
            const config = require('../config.json');
            const calloutchannel = client.channels.cache.find(channel => channel.name === "sru-callout")
            const logchannel = client.channels.cache.find(channel => channel.name === "audit-log")
            calloutchannel.send("**__Welcome to the SRU Callout Chat__**\n\nThink of this channel as your pager for SRU deployment notifications. Any @SRU Tac Response can notify of an active situation and request additional units to assist in server. If you have sufficient units in server already, there is no need to request them here. There must be at least 3 spots open in your server to make a callout request here!\n\n**Instructions:**\n```SRU Officers requesting deployment of additional SRU Officers to their server can use the following command:\n\n${config.prefix}deploy [Server #] [Brief Description of Call (Barricaded Person, Hostage Situation, etc.)]\n\nSRU Officers wishing to clear a previous request once the situation is Code 4 should use the below command:\n\n-clear [Callout ID]```\nWe hope this helps provide better response times and numbers for responses. Anyone caught abusing the features of this system will lose access to it for a temporary or indefinite time depending on the circumstances. If you have any issues or questions regarding this bot, see Ben R. 5S-34.")
            logchannel.send(`**DEV ALERT**\n${config.developers} Callout message has been changed`)
        } 
        
        else {
            message.lineReply(`You must be an SRU Supervisor or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
            .then(msg => {
            msg.delete({ timeout: 5000 })
            })
            .catch(console.error);
        }
    }
};