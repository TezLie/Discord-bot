module.exports = {
    name: 'ping',
    description: 'Ping!',
    guildOnly: false,
    args: false,
    usage: '',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Pong.');
    },
};