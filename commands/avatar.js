module.exports = {
    name: 'avatar',
    description: `Displays a user's avatar`,
    guildOnly: false,
    args: false,
    execute(message, args) {
        if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}
	
		const avatarList = message.mentions.users.map(user => {
			return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
		});
    },
};