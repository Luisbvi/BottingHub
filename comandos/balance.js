module.exports = {
    name: 'balance',
    alias: ['bal'],
    permissions: [],

    execute(Discord, client, message){
        const user = message.mentions.users.first() || message.author;
        const userId = user.id;
        console.log('ID:', userId);

    },
}