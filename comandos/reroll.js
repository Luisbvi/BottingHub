module.exports = {
    name: 'reroll',
    alias:['roll'],
    permissions:['ADMINISTRATOR'],

    execute(Discord,client,args){
        const messageId = args[0]
        client.giveawaysManager.reroll(messageId).then(() =>{
            message.channel.send('Success! Giveaway rerolled!');
        }).catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }
}