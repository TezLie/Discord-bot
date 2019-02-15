module.exports = {
    name: 'react',
    description: 'add reaction',
    guildOnly: false,
    args: false,
    usage: '<@user>',
    execute(message, args) {
        message.react('✅')
    },
};