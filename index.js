const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "-";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(/ +/g);
  const command = args.shift().toLowerCase();

  // Training Announcement Command
  if (command === "train") {
    message.delete({timeout: 100})
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 10 miliseconds`))
    .catch(console.error);

    // Permission Check - SRU Specialist+
    if(message.member.roles.cache.some(r => r.name === "SRU Specialist") || message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {

      // Collects training announcement channel
      const channel = client.channels.cache.find(channel => channel.name === "training-announcements")

      // Should follow format, -train [type] [date] [time] [eventlink]
      if (args.length != 4) {
    		return message.reply(`Please make sure to follow the proper format!`)
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
      else if (args[0] === `negotatior`) {
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
      } else {
        message.reply(`It does not appear this training type exists (${args[0]})! Please make sure to choose a correct training type.`)
      }

      // Failure to have permission
  	} else {
      message.reply(`You must be an SRU Specialist or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
      }
    }

  else if (command === "documents") {
    message.delete({timeout: 100})
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 10 miliseconds`))
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
      https://bit.ly/2U4UrVO`)
      .setTimestamp()
      .setFooter(`San Andreas Strategic Response Unit 2021`);
      channel.send(docseb)
    } else {
      return message.reply(`You must be an SRU Supervisor or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
    }
  }

});

client.login(config.BOT_TOKEN);
