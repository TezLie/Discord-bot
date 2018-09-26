module.exports = {
    name: 'gay',
    description: `pretty gay`,
    guildOnly: false,
    args: true,
    execute(message, args) {
	
		const gayList = message.mentions.users.map(user => {
			return `${user.username} is acting pretty gay`;
		});
    },
};