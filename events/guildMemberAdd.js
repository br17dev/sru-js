module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member, Discord, client) {
		const channel = client.channels.cache.find(channel => channel.name === "welcome")
        const {footer} = require('../config.json')
        const welcomeeb = new Discord.MessageEmbed()
        .setColor(`#00ff00`)
        .setTitle(`New Member Alert`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`<@!${member.id}> (${member.user.username}#${member.user.discriminator}) has joined the DoJRP SRU Discord and is awaiting verification and permissions.`)
        .setFooter(footer)
        .setTimestamp();
        channel.send(welcomeeb)
	},
};