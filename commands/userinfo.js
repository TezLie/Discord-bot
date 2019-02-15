module.exports = {
    name: 'userinfo',
    description: 'Displays userinfo',
    guildOnly: true,
    args: false,
    usage: '',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour id: ${message.author.id}`);
    },
};