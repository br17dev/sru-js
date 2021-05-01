const Discord = require("discord.js");
const fs = require("fs");
const {prefix, token} = require("./config.json");

require("discord-reply");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

client.on("ready", function(){

	console.log(client.user.tag);
	client.user.setActivity(`Tac Channels`, { type: 'LISTENING' })
  client.user.setNickname(`SA SRU`)
});

client.on("guildMemberAdd", (member) => {
	const channel = client.channels.cache.find(channel => channel.name === "welcome")
	const welcomeeb = new Discord.MessageEmbed()
	.setColor(`#00ff00`)
	.setTitle(`New Member Alert`)
	.setThumbnail(`https://imgur.com/Wgggksj.png`)
	.setDescription(`<@!${member.id}> (${member.user.username}#${member.user.discriminator}) has joined the DoJRP SRU Discord and is awaiting verification and permissions.`)
	.setFooter(`San Andreas Strategic Response Unit 2021`)
	.setTimestamp()
	channel.send(welcomeeb)
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
    message.lineReply("There was an issue executing that command, the bot developers have been notified.")
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