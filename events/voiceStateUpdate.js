module.exports = {
	name: 'voiceStateUpdate',
	once: false,
	execute(oldState, newState, Discord, client) {
        var {footer} = require('../config.json')
        if (!oldState.channel && newState.channel) {
            if(newState.channel.name.includes(`SRU Tac Channel`)) {
              var logchannel = client.channels.cache.find(channel => channel.name === "audit-log");
        
              var eb = new Discord.MessageEmbed()
              .setColor('#00ff00')
              .setTitle('Member Joined Tac Channel')
              .addFields(
                {name:'Officer:', value: `${newState.member.displayName} \n ${newState.member}`, inline: true},
                {name:'Tac Channel:', value:`${newState.channel.name}`, inline: true},
              )
              .setTimestamp()
              .setFooter(footer);
              logchannel.send(eb)
        
            }
        
        } else if (oldState.channel && newState.channel) {
            if(oldState.channel.name.includes('SRU Tac Channel') && newState.channel.name.includes('SRU Tac Channel')) {
                var logchannel = client.channels.cache.find(channel => channel.name === "audit-log");
            
                var eb = new Discord.MessageEmbed()
                .setColor('#FFA500')
                .setTitle('Member Switched Tac Channel')
                .addFields(
                    {name:'Officer:', value: `${newState.member.displayName} \n ${newState.member}`, inline: true},
                    {name:'Old Tac Channel:', value:`${oldState.channel.name}`, inline: true},
                    {name:'New Tac Channel:', value:`${newState.channel.name}`, inline: true},
                )
                .setTimestamp()
                .setFooter(footer);
                logchannel.send(eb)
        
            } else if(!oldState.channel.name.includes('SRU Tac Channel') && newState.channel.name.includes('SRU Tac Channel')) {
                var logchannel = client.channels.cache.find(channel => channel.name === "audit-log");
        
                var eb = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Member Joined Tac Channel')
                .addFields(
                {name:'Officer:', value: `${newState.member.displayName} \n ${newState.member}`, inline: true},
                {name:'New Tac Channel:', value:`${newState.channel.name}`, inline: true},
                )
                .setTimestamp()
                .setFooter(footer);
                logchannel.send(eb)
            } else if(oldState.channel.name.includes('SRU Tac Channel') && !newState.channel.name.includes('SRU Tac Channel')) {
                var logchannel = client.channels.cache.find(channel => channel.name === "audit-log");
          
                var eb = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Member Left Tac Channel')
                .addFields(
                  {name:'Officer:', value: `${oldState.member.displayName} \n ${oldState.member}`, inline: true},
                  {name:'Tac Channel:', value:`${oldState.channel.name}`, inline: true},
                )
                .setTimestamp()
                .setFooter(footer);
                logchannel.send(eb)
            }
        
          } else if (oldState.channel && !newState.channel) {
            if(oldState.channel.includes('SRU Tac Channel'))
                var logchannel = client.channels.cache.find(channel => channel.name === "audit-log");
        
                var eb = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Member Left Tac Channel')
                .addFields(
                {name:'Officer:', value: `${oldState.member.displayName} \n ${oldState.member}`, inline: true},
                {name:'Tac Channel:', value:`${oldState.channel.name}`, inline: true},
                )
                .setTimestamp()
                .setFooter(footer);
                logchannel.send(eb)
          } else {
            return
          }
    },
};