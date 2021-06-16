const Discord = require('discord.js');

module.exports = {
    name: "kick", //Aquí ponemos el nombre del comando
    alias: ["ADMINISTRATOR"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

    execute (client, message, args){

        var perms = message.member.hasPermission('KICK_MEMBERS');
        if (!perms) return message.channel.send(`You don't have permissions to use this command`)

        const user = message.mentions.members.first();
        if (!user) return message.channel.send('You need mention an user to kick it');

        if (user === message.author) return message.channel.send(`You can't kick yourself!`);

        if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send(`You can't kick this user`);

        var kickReason = args.slice(1).join(' ');
        if (!kickReason){
            kickReason = 'No reason'
        }


        message.guild.member(user).kick(kickReason);

        message.channel.send(`The user **${user}** has been kicked successfully for **${kickReason}**`);


    }

}