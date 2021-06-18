const Status = require('../models/Status');

module.exports = {
    name: 'UpdateM',
    alias: ['um'],
    permissions: ['ADMINISTRATOR'],

    async execute (Discord, client, message){
        message.delete();
        const filter = (m) => m.author.id === message.author.id
        message.channel.send( new Discord.MessageEmbed()
        .setTitle('Updating Bot Manager ...')
        .setDescription('Enter the status for **Creator**\n\n**1: Online\n2: Under Maintenance\n3: Offline**'));
        let CreatorS = (await message.channel.awaitMessages(filter, {max: 1})).first().content;
        if(CreatorS === '1') CreatorS = 'Online';
        else if(CreatorS === '2') CreatorS = 'Under Maintenance';
        else if(CreatorS === '3') CreatorS = 'Offline';
        console.log(`Updating Creator Status to: ${CreatorS}`);

        await message.channel.bulkDelete(2);
        message.channel.send( new Discord.MessageEmbed()
        .setTitle('Updating Bot Manager Utilities')
        .setDescription('Enter the status for **Unlocker**\n\n**1: Online\n2: Under Maintenance\n3: Offline**'));
        let UnlockerS = (await message.channel.awaitMessages(filter, {max: 1})).first().content;
        if(UnlockerS === '1') UnlockerS = 'Online';
        else if(UnlockerS === '2') UnlockerS = 'Under Maintenance';
        else if(UnlockerS === '3') UnlockerS = 'Offline';
        console.log(`Updating Unlocker Status to: ${UnlockerS}`);
        
        await message.channel.bulkDelete(2);
        message.channel.send( new Discord.MessageEmbed()
        .setTitle('Updating Bot Manager Utilities')
        .setDescription('Enter the status for **Redeemer**\n\n**1: Online\n2: Under Maintenance\n3: Offline**'));
        let RedeemerS = (await message.channel.awaitMessages(filter, {max: 1})).first().content;
        if(RedeemerS === '1') RedeemerS = 'Online';
        else if(RedeemerS === '2') RedeemerS = 'Under Maintenance';
        else if(RedeemerS === '3') RedeemerS = 'Offline';
        console.log(`Updating Redeemer Status to: ${RedeemerS}`);
        await message.channel.bulkDelete(2);

        message.channel.send( new Discord.MessageEmbed()
        .setTitle('Bot Manager Status Updated!'));

        setTimeout(() => {
        message.channel.bulkDelete(1);
        }, 5000);

        

        let sv = new Status({
            _id: 1,
        Creator: CreatorS,
        Unlocker: UnlockerS,
        Redeemer: RedeemerS
        });
        sv.save()

        
     }
}