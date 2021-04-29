const Discord = require("discord.js");
const config = require("./config.json");
require("discord-reply");
const client = new Discord.Client();
const prefix = config.prefix;


client.on("ready", function(){

	console.log(client.user.tag);
	client.user.setActivity(`Tac Channels`, { type: 'LISTENING' })

});

client.on("guildMemberAdd", (member) => {
	const channel = client.channels.cache.find(channel => channel.name === "welcome")
	const welcomeeb = new Discord.MessageEmbed()
	.setColor(`#00ff00`)
	.setTitle(`New Member Alert`)
	.setThumbnail(`https://imgur.com/Wgggksj.png`)
	.setDescription(`<@${member.id}> (${member.user.username}#${member.user.discriminator}) has joined the DoJRP SRU Discord and is awaiting verification and permissions.`)
	.setFooter(`San Andreas Strategic Response Unit 2021`)
	.setTimestamp()
	channel.send(welcomeeb)
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(/ +/g);
  const command = args.shift().toLowerCase();

  // ALL COMMANDS AVAILABLE

  if (command === "train") {
    message.delete({timeout: 5000})
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
    .catch(console.error);

    // Permission Check - SRU Specialist+
    if(message.member.roles.cache.some(r => r.name === "SRU Specialist") || message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {

      // Collects training announcement channel
      const channel = client.channels.cache.find(channel => channel.name === "training-announcements")

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
        .setDescription(`There will be a **SRU Maritime Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Maritime Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

        channel.send("<@&>")
        channel.send(maritimeeb)
      }

      // Tactical Pilot
      else if (args[0] === `tacpilot`) {
        const tacpiloteb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Tactical Pilot Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Tactical Pilot Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Tactical Pilot Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

        channel.send("<@&>")
        channel.send(tacpiloteb)
      }

      // Sniper
      else if (args[0] === `sniper`) {
        const snipereb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Counter Sniper Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Counter Sniper Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Counter Sniper Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

        channel.send("<@&>")
        channel.send(snipereb)
      }

      // Negotiator
      else if (args[0] === `negotiator`) {
        const negotatioreb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Crisis Negotiator Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Crisis Negotiator Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Crisis Negotiator Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

    		channel.send("<@&>")
        channel.send(negotatioreb)
      }

      // Tac Med
      else if (args[0] === `tacmed`) {
        const tacmedeb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New Tactical Medic Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU Tactical Medic Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Medic Recruit or SRU Officer I+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer. (Does not apply to SRU Medic Recruit)`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the Tactical Medic Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

    		channel.send("<@&>")
        channel.send(tacmedeb)
      }

      // EOD
      else if (args[0] === `eod`) {
        const eodeb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`New EOD Certification Training`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`There will be a **SRU EOD Certification** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
        .addFields(
          { name: `Requirements:`, value: `- Must be a SRU Officer II+ within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must hold the rank of SRU Officer I+ for a minimum of 30 days or longer.`},
          { name: `Assistants:`, value: `Any SRU Officer who has already obtained the EOD Certification and wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
          { name: `Event Link:`, value: `${args[3]}`},
        )
        .setTimestamp()
        .setFooter(`San Andreas Strategic Response Unit 2021`);

    		channel.send("<@&>")
        channel.send(eodeb)
      }

			// In Game
			else if (args[0] === `ingame`) {
				const ingameeb = new Discord.MessageEmbed()
				.setColor(`#000000`)
				.setTitle(`New Basic In Game Training`)
				.setThumbnail(`https://imgur.com/Wgggksj.png`)
				.setDescription(`There will be a **SRU Basic In Game** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
				.addFields(
					{ name: `Requirements:`, value: `- Must be an SRU Recruit within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must have completed and passed the Basic In Class Training.`},
					{ name: `Assistants:`, value: `Any SRU Officer I+ who wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
					{ name: `Event Link:`, value: `${args[3]}`},
				)
				.setTimestamp()
				.setFooter(`San Andreas Strategic Response Unit 2021`);

				channel.send("<@&>")
				channel.send(ingameeb)

			}

			// In Class
			else if (args[0] === `inclass`) {
				const inclasseb = new Discord.MessageEmbed()
				.setColor(`#000000`)
				.setTitle(`New Basic In Class Training`)
				.setThumbnail(`https://imgur.com/Wgggksj.png`)
				.setDescription(`There will be a **SRU Basic In Class** training on **${args[1]}** at **${args[2]}**.\n\nThis training will be hosted by ${message.author}.\n`)
				.addFields(
					{ name: `Requirements:`, value: `- Must be an SRU Recruit within the San Andreas Strategic Response Unit\n- Must be able to attend for the whole duration of this training.\n- Must have an accepted SRU Application and Interview.`},
					{ name: `Assistants:`, value: `Any SRU Specialist+ who wishes to assist, please react with <:SRUSpecialist:833487986787483648> and comment on the event link below.`},
					{ name: `Event Link:`, value: `${args[3]}`},
				)
				.setTimestamp()
				.setFooter(`San Andreas Strategic Response Unit 2021`);

				channel.send("<@&>")
				channel.send(inclasseb)

			}

			// Invalid Training Type
			else {
        message.lineReply(`It does not appear this training type exists (${args[0]})! Please make sure to choose a correct training type.`)
				.then(msg => {
			    msg.delete({ timeout: 5000 })
			  })
			  .catch(console.error);
      }

      // Failure to have permission
		} else {
	    message.lineReply(`You must be an SRU Specialist or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
			.then(msg => {
		    msg.delete({ timeout: 5000 })
		  })
		  .catch(console.error);
		}
	}

	else if (command === "documents") {
    message.delete({timeout: 5000})
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
    .catch(console.error);

    // Permission Check - SRU Supervisor+
    if(message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
      const channel = client.channels.cache.find(channel => channel.name === "documents")
      const docseb = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setTitle(`Strategic Response Unit | Important Documents`)
      .setThumbnail(`https://imgur.com/Wgggksj.png`)
      .setDescription(`**__Important Links:__**
      **Standard Operating Procedures**
      https://bit.ly/39bHMmU
      **Unit Policy Memorandums**
      https://bit.ly/2wxqROi
      **Equipment Sheet**
      https://bit.ly/3a3EUsN
      **Public Roster**
      https://bit.ly/39aIDEk
      **Vehicle & Weapon Structure**
      https://bit.ly/2FMGrr2
      **Post-Deployment Report Guide**
      https://bit.ly/3thUFWG
      **Post-Deployment Report**
      https://bit.ly/2wADurI
      **Training Assistant Form**
      https://bit.ly/2Ru5dS7
      **Commend & Complaint Form**
      https://bit.ly/3aqNxhG
      **Suggestion Form**
      https://bit.ly/2YF373R
      **LOA Form**
      https://bit.ly/2ODGyIf
      **Disciplinary Action Appeal Form**
      https://bit.ly/2UxDbG5
      **Policy Agreement Form**
      https://bit.ly/2QJPbDo

      **__Training Guidelines:__**
      **General Course Training Guide**
      https://bit.ly/39DlRXQ
      **Tactical Combat Casualty Care**
      http://bit.ly/2YpfjqR
      **Crisis Negotiation Guide**
      http://bit.ly/3iLsBXV
      **Tactical Pilot Guide**
      http://bit.ly/3iHwRI1
      **Counter Sniper Guide**
      http://bit.ly/2NAULtd
      **EOD Guide**
      http://bit.ly/39YkLq0
      **Maritime Guide**
      http://bit.ly/39eSAUu

      **__Strategic Response Unit Mutual Aid Agreements:__**
      **Port Authority/SRU EOD Agreement**
      https://bit.ly/2CH36TB
      **Port Authority/BACO/SRU Maritime Agreement**
      https://bit.ly/2U4UrVO

			__All documents are the property of SRU and are for in-house use only, please do not copy or distribute without permission.__`)
      .setTimestamp()
      .setFooter(`San Andreas Strategic Response Unit 2021`);
      channel.send(docseb)

    } else {
      message.lineReply(`You must be an SRU Supervisor or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
			.then(msg => {
		    msg.delete({ timeout: 5000 })
		  })
		  .catch(console.error);
    }
  }

  else if (command === "callout") {
		message.delete({timeout: 5000})
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
    .catch(console.error);

		//Permission Check SRU Supervisor+
    if(message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
        const channel = client.channels.cache.find(channel => channel.name === "sru-callout")
        channel.send("**__Welcome to the SRU Callout Chat__**\n\nThink of this channel as your pager for SRU deployment notifications. Any @SRU Tac Response can notify of an active situation and request additional units to assist in server. If you have sufficient units in server already, there is no need to request them here. There must be at least 3 spots open in your server to make a callout request here!\n\n**Instructions:**\n```SRU Officers requesting deployment of additional SRU Officers to their server can use the following command:\n-deploy [Server #] [Brief Description of Call (Barricaded Person, Hostage Situation, etc.)]\n\nSRU Officers wishing to clear a previous request once the situation is Code 4 should use the below command\n\n-clear [Callout ID]```\nWe hope this helps provide better response times and numbers for responses. Anyone caught abusing the features of this system will lose access to it for a temporary or indefinite time depending on the circumstances. If you have any issues or questions regarding this bot, see Ben R. 5S-34.")
      } else {
        message.lineReply(`You must be an SRU Supervisor or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
				.then(msg => {
			    msg.delete({ timeout: 5000 })
			  })
			  .catch(console.error);
			}
    }

	else if (command === "deploy") {
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

				} else {
					channel.send(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\n${desc}.`)
					.then(msg => {
						setTimeout(function(){
							msg.edit(`<@&>\nA request for additional SRU Officers has been made by ${message.author}!\nPlease can all available officers make their way to **Server ${args[0]}** and the respective SRU Tac Channel!\n\n**Notes:**\n${desc}.\n\n**Callout ID:**\n${msg.id}`)
						},1000)
					})
				}
			} else {
				message.lineReply(`Please make sure to follow the proper format, as outlines in #sru-callout.`)
				.then(msg => {
					msg.delete({ timeout: 5000})
				})
				.catch(console.error);
			}
		} else {
			message.lineReply(`You must be a full time member of SRU in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team`)
		.then(msg => {
			msg.delete({ timeout: 5000})
		})
		.catch(console.error);
	}
}

	else if (command === "clear") {
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

			} else {
				if(message.channel.id === `830412292175822912`) {
					if(args[0] === `836257707371659264`) { // to be changed with the original callout message ID
						message.lineReply(`You cannot delete this message.`)
		  			.then(message => {
							message.delete({timeout:2000})
						})
		  			.catch(console.error);

					} else {
						message.channel.messages.fetch(args[0])
	  			.then(message => {
						message.delete({timeout:2000})
						})
	  			.catch(console.error);
				}

			} else {
				message.lineReply(`Please make sure to utilise this command in the appropriate channel <#830412292175822912>.`)
				.then(msg => {
					msg.delete({ timeout: 5000})
				})
				.catch(console.error);
			}
		}

	} else {
		message.lineReply(`You must be a full time member of SRU in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team`)
		.then(msg => {
			msg.delete({ timeout: 5000})
		})
		.catch(console.error);
	}
}

  else if (command === "info"){

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    var uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`

    const infoeb = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setTitle(`SRU Discord Bot Information`)
    .setThumbnail(`https://imgur.com/Wgggksj.png`)
    .setDescription(``)
    .addFields(
      {name:`Version:`, value:`${config.bot_version}`,inline: true},
      {name:`Developers:`, value:`<@!427518474139467796>`,inline:true},
      {name:`Ping:`, value:`${Date.now() - message.createdTimestamp}ms`,inline:true},
			{name:`Uptime:`, value:`${uptime}`, inline:true},
			{name:`Prefix:`, value:`${config.prefix}`,inline:true},
			{name:`Changelog:`, value: `TBC`, inline:true},
    )
    .setTimestamp()
    .setFooter(`San Andreas Strategic Response Unit 2021`)
    message.lineReply(infoeb)
  }

	else if (commmand === "help") {
		return

	}
});

client.login(config.token);
