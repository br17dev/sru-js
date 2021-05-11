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
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

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

