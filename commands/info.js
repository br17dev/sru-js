module.exports = {
    name: 'info',
    description: 'Info command',
    aliases: ['version','ping','botinfo','uptime'],
    execute(Discord, client, message, args) {
        const config = require('../config.json');

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
};