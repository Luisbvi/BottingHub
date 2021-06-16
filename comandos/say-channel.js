const Discord = require('discord.js');

module.exports = {
    name: "send", //Aquí ponemos el nombre del comando
    alias: ["enviar"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

    execute (client, message, args){

        var perms = message.member.hasPermission('ADMINISTRATOR');
        if (!perms) return message.channel.send('You do not have permission to use this command');

        let canal = message.mentions.channels.first();
        if (!canal) return message.channel.send('You must mention a channel')

        let texto = args.slice(1).join(" ");
        if (!texto) return message.channel.send('You need write a text!');

        canal.send(texto);

    }

}