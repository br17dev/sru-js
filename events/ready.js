module.exports = {
	name: 'ready',
	once: true,
	execute(Discord, client) {
		console.log(`Ready! ${client.user.tag}`);
        client.user.setActivity(`Tac Channels`, { type: 'LISTENING' });
	},
};