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

  // Training Command
  if (command === "train") {

    // Should follow format, -train [type] [date] [time] [eventlink]
    if (args.length != 4) {
  		return message.reply(`Please make sure to follow the proper format!`)

  	}

    // Maritime Choice
  	else if (args[0] === 'maritime') {
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
  		return message.channel.send(maritimeeb);
  	}

  	message.channel.send(`First argument: ${args[0]}`);
  }
});

client.login(config.BOT_TOKEN);
