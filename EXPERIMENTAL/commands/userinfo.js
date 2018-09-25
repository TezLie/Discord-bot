module.exports = {
    name: 'userinfo',
    description: 'Displays userinfo',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour id: ${message.author.id}`);
    },
};