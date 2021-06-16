const Discord = require('discord.js');

module.exports = {
    name: "clear", //Aquí ponemos el nombre del comando
    alias: ["cls"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],
    permissions: ["MANAGE_MESSAGES"],

    async execute (Discord, client, message, args){
        if(!message.member.hasPermission('ADMINISTRATOR'))return;

        let cantidad = args[0]

        if (!cantidad) return message.reply(`You need write the amount of message`);
        if(isNaN(cantidad)) return message.reply('You need enter a **number**');
        if(cantidad < 1) return message.reply('You must delete atleast **one** message');
        if (cantidad > 99 ) return message.reply(`You can't delete more than **99** messages at time!`);

        await message.channel.messages.fetch({Limit: cantidad}).then(messages =>{
            message.channel.bulkDelete(parseInt(args[0])+1, true).then(()=>{
                message.channel.send(`**${cantidad}** messages deleted`);
            });
        });

        setTimeout(() => {
            message.delete()
        }, 5000);
    }
}