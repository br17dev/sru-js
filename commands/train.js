module.exports = {
    name: 'train',
    description: 'Train command',
    execute(Discord, client, message, args) {
        message.delete({timeout: 5000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
        .catch(console.error);
        const {footer} = require('../config.json')
        // Permission Check - SRU Specialist+
        if(message.member.roles.cache.some(r => r.name === "SRU Specialist") || message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {

         // Collects training announcement channel
         const channel = client.channels.cache.find(channel => channel.name === "training-announcements")
         let guild = client.guilds.cache.get('830412291358588960'); // sru server ID
         let member = guild.member(message.author);
         let nickname = member ? member.displayName : null;

          // Should follow format, -train [type] [date] [time] [eventlink]
         if (args.length != 4) {
    		message.lineReply(`Please make sure to follow the proper format!`)
				.then(msg => {
			    msg.delete({ timeout: 5000 })
            })
			.catch(console.error);
        }
      
        // Maritime
    	else if (args[0] === `maritime`) {
        const maritimeeb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Maritime Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Maritime Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Maritime Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(footer);

        channel.send(`<@&> <@&>`, { embed: maritimeeb,});
        } 

      // Tactical Pilot
      else if (args[0] === `tacpilot`) {
        const tacpiloteb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Tactical Pilot Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Tactical Pilot Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Tactical Pilot Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(footer);

        channel.send(`<@&> <@&>`, { embed: tacpiloteb,});
      }

      // Sniper
      else if (args[0] === `sniper`) {
        const snipereb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Counter Sniper Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Counter Sniper Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Counter Sniper Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

        channel.send(`<@&> <@&>`, { embed: snipereb,});
      }

      // Negotiator
      else if (args[0] === `negotiator`) {
        const negotiatoreb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Crisis Negotiator Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Crisis Negotiator Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Crisis Negotiator Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(footer);

    		channel.send(`<@&> <@&>`, { embed: negotiatoreb,});
      }

      // Tac Med
      else if (args[0] === `tacmed`) {
        const tacmedeb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Tactical Medic Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Tactical Medic Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Medic Recruit or SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer. (Does not apply to SRU Medic Recruit)`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Tactical Medic Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(footer);

    		channel.send(`<@&> <@&>`, { embed: tacmedeb,});
      }

      // EOD
      else if (args[0] === `eod`) {
        const eodeb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New EOD Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU EOD Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer II+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer II+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the EOD Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(footer);

    		channel.send(`<@&> <@&>`, { embed: eodeb,});
      }

      // In Game
      else if (args[0] === `ingame`) {
            const ingameeb = new Discord.MessageEmbed()
            .setColor(`#000000`)
            .setTitle(`New Basic In Game Training`)
            .setThumbnail(`https://imgur.com/Wgggksj.png`)
            .setDescription(`There will be a **SRU Basic In Game** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
            .addFields(
                { name: `Requirements:`, value: `- Must be an SRU Recruit within the San Andreas Strategic Response Unit.\n- Must be able to attend for the whole duration of this training.\n- Must have completed and passed the Basic In Class Training.`},
                { name: `Assistants:`, value: `Any SRU Officer I+ who wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
                { name: `Event Link:`, value: `${args[3]}`},
            )
            .setTimestamp()
            .setFooter(footer);

            channel.send(`<@&> <@&>`, { embed: ingameeb,});

      }

      // In Class
      else if (args[0] === `inclass`) {
            const inclasseb = new Discord.MessageEmbed()
            .setColor(`#000000`)
            .setTitle(`New Basic In Class Training`)
            .setThumbnail(`https://imgur.com/Wgggksj.png`)
            .setDescription(`There will be a **SRU Basic In Class** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${nickname} (${message.author}).\n`)
            .addFields(
                { name: `Requirements:`, value: `- Must be an SRU Recruit within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must have an accepted SRU Application and Interview.`},
                { name: `Assistants:`, value: `Any SRU Specialist+ who wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
                { name: `Event Link:`, value: `${args[3]}`},
            )
            .setTimestamp()
            .setFooter(footer);

            channel.send(`<@&> <@&>`, { embed: inclasseb,});
			}

			// Invalid Training Type
        else {
            message.lineReply(`It does not appear this training type exists (${args[0]})! Please make sure to choose a correct training type.`)
            .then(msg => {
            msg.delete({ timeout: 5000 })
            })
            .catch(console.error);
        }
		} 
    // Failure to have permission
    else {
	    message.lineReply(`You must be an SRU Specialist or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
			.then(msg => {
		    msg.delete({ timeout: 5000 })
		  })
		  .catch(console.error);
		}
	}
};