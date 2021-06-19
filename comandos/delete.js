const Ticket = require('../models/Ticket');

module.exports = {
    name: 'delete',
    alias:['d'],
    permissions:["ADMINISTRATOR"],
    
    async execute (Discord, client, message){
        const ticket = await Ticket.findOne({channelId: message.channel.id});
        if(ticket){
            message.delete();
            message.channel.updateOverwrite(ticket.authorId, { 
                SEND_MESSAGES: false 
            }).catch((error) => console.log(error));
            ticket.resolved = true;
            await ticket.save().then(message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('This ticket has now been closed!')
            .setDescription(`Closed by <@${message.author.id}>\n\n**This channel will be auto deleted in 10s**`)
            ));

            message.channel.edit({
                name: 'ticket-closed'
            });
            console.log('Ticket closed');

            setTimeout(() => {
                message.channel.delete();
            }, 10000);
            console.log('Ticket deleted');
        }
    }
}