module.exports = {
    name: 'args-info',
	description: 'arguments',
	guildOnly: false,
	args: true,
	usage: '<argument> {argument}...',
    execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    },
};