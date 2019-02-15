module.exports = {
    name: 'role',
	description: 'Assing a role to yourself',
	guildOnly: true,
	args: true,
	usage: '[Legend]',
    execute(message, args, client) {
			console.log('debug2');
			message.channel.send(args)
			if (args = 'wraith') {
				let userToModify = message.member;
				message.author.message('545527370514432000')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'mirage') {
				message.author.addrole('545527348896727042')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'gibraltar') {
				message.author.addrole('545527322850099210')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'caustic') {
				message.author.addrole('545527288263999508')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'bloodhound') {
				message.author.addrole('545527262947180544')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'bangalore') {
				message.author.addrole('545527122052120577')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'pathfinder') {
				message.author.addrole('545527094273245204')
				.then(console.log)
				.catch(console.error);
			}
			if (args === 'lifeline') {
				message.author.addrole('545527058369871872')
				.then(console.log)
				.catch(console.error);
			}
		},
};