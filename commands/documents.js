module.exports = {
    name: 'documents',
    description: 'Documents command',
    aliases: ['docs'],
    execute(Discord, client, message, args) {
        message.delete({timeout: 5000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 5000 miliseconds`))
        .catch(console.error);

        const {footer} = require('../config.json')

        // Permission Check - SRU Supervisor+
        if(message.member.roles.cache.some(r => r.name === "SRU Supervisor") || message.member.roles.cache.some(r => r.name === "SRU Commander") || message.member.roles.cache.some(r => r.name === "SRU Deputy Director") || message.member.roles.cache.some(r => r.name === "SRU Director")) {
        const channel = client.channels.cache.find(channel => channel.name === "documents")
        const docseb = new Discord.MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`Strategic Response Unit | Important Documents`)
        .setThumbnail(`https://imgur.com/Wgggksj.png`)
        .setDescription(`
        **__Important Links:__**
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
        .setFooter(footer);
        channel.send(docseb)

        } 
        
        else {
        message.lineReply(`You must be an SRU Supervisor or above in order to use this command. If you think this is a mistake, please contact a member of the SRU Supervisory Team.`)
                .then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch(console.error);
        }
    }
};
