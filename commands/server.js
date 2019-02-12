module.exports = {
    name: 'server',
    description: 'Displays info about the server',
    guildOnly: true,
    args: false,
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};