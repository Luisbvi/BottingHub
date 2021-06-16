module.exports = (Discord, client, guildMember) =>{
    const embed = new Discord.MessageEmbed()
        .setTitle('New user arrive!')
        .setDescription(`The user **${guildMember.user.username}** has join to the server now we're **${guildMember.guild.memberCount}** members\n\nPlease read the channel **<#762927028395048961>** before making an order `)
        .setColor('RANDOM');

    client.channels.cache.get('766037958889177138').send(embed);
}