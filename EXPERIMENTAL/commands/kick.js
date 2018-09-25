module.exports = {
    name: 'kick',
    description: 'kicks a user from the server',
    guildOnly: true,
    args: true,
    usage: '<@user>',
    execute(message, args) {
		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};