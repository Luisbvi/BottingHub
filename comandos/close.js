const Ticket = require('../models/Ticket');

module.exports = {
    name: 'close',
    alias:['c'],
    permissions:["ADMINISTRATOR"],
    async execute (Discord, client, message){
        const ticket = await Ticket.findOne({where: {channelId: message.channel.id}});
        if(ticket){
            message.delete();
            message.channel.updateOverwrite(ticket.getDataValue('authorId'), { 
                SEND_MESSAGES: false 
            }).catch((error) => console.log(error));
            ticket.resolved = true;
            await ticket.save().then(message.channel.send(new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('This ticket has now been closed!')
            .setDescription(`Closed by <@${message.author.id}>\n\n**This channel will be auto deleted in 24 hours**`)
            ))
            setTimeout(() => {
                message.channel.delete();
            }, 86400000);
            console.log('Ticket closed');
            const ticketId = String(ticket.getDataValue('ticketId')).padStart(4,0);
            message.channel.edit({
                name: `closed-${ticketId}`
            });
        }
    }
}