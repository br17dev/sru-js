module.exports = {
	name: 'ready',
	once: true,
	execute(Discord, client, sqlite) {
		console.log(`Ready! ${client.user.tag}`);
        client.user.setActivity(`Tac Channels`, { type: 'LISTENING' });
		let db = new sqlite.Database('./testdb.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    	db.run(`CREATE TABLE IF NOT EXISTS commands(userid INTEGER NOT NULL, username TEXT NOT NULL)`);
	},
};