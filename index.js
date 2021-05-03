const Discord = require("discord.js");
const fs = require("fs");
const {prefix, token, footer} = require("./config.json");

require("discord-reply");

const client = new Discord.Client();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, Discord, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, Discord, client));
	}
}

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

client.on("voiceStateUpdate", (oldState, newState) => {
  // User joins voice channel from none
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
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(/ +/g);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) 
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(Discord, client, message, args);
  } catch(error) {
    console.error(error);
    message.lineReply("There was an issue executing that command.")
      .then(msg => {
      msg.delete({ timeout: 5000 })
      })
    .catch(console.error);
  }
});

client.login(token);

for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}