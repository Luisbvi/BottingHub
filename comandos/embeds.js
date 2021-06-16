const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, MessageEmbed } = require ('discord.js');

module.exports = {
    name: "embed", //Aquí ponemos el nombre del comando
    alias: ["eb"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],
    permissions: [],

    execute (client, message, args){

        var perms = message.member.hasPermission('MANAGE_MESSAGE');
        if (!perms) return message.channel.send(`You don't have permissions to use this command`);

        let texto = args.join(' ');
        if (!texto) return message.channel.send(`You need write a text`);
        let opciones = texto.split(' >> ');

        const embed = new Discord.MessageEmbed()
            .setTitle(opciones[0])
            .setDescription(opciones[1])
            .setFooter(opciones[2])
            .setColor(opciones[3])

        message.channel.send(embed);




    }

}