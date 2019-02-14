module.exports = {
    name: 'kick',
    description: 'kick a user from the server',
    guildOnly: true,
    args: true,
    usage: '<@user>',
    execute(message, args) {
        message.react('✅');
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};