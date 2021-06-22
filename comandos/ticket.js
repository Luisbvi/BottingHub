const TicketConfigs = require("../models/TicketConfig");

module.exports = {
    name: 'st',
    alias: ['set-ticket'],
    permissions: ["ADMINISTRATOR"],

    async execute(Discord, client , message , args, reaction){

        try {

            var tiempo = new Date().toLocaleTimeString();
            console.log(`${tiempo} Instalando ticket...`);;
            const embed = await message.channel.send(new Discord.MessageEmbed()
            
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setTitle('07 SERVICES')
            .setDescription('Welcome to **OSRS SERVICES**. All our services are hand made and done via \n**Nord VPN**. We also take orders on proxies on your request. For more information, please react below.')
            .addField('Skilling', 'React with <a:skills:853386714168819753> for Skilling')
            .addField('Questing', 'React with <:quest_icon:853391747278962709> for Questing')
            .addField('Buy Gold', 'React with <:coins_icon:853392355067035709> to buy gold')
            .addField('Buy accounts','React with <:BTC:853398763392466944> to buy an account')
            .addField('Custom Services','React with ⚒️ for any Custom Services / Bulk accounts')
            .addField('If you need help in your botting journey, react with 🥇, **VIP Role required**')
            .addField('All quotes / trades  are done via Tickets only', `We don't Quote / Collect any Money outside the Scope of tickets, all confirmation are done via tickets only\n\nAdditional fees may apply for ironman or hardcore ironman services. By opening a ticket, you agree with our <#762927028395048961>`)
            .setColor('RED')
            .setFooter(`Powered By BottingHub.com`)
            )
            console.log(`${tiempo} Ticket Instalado!`);

                console.log(`${tiempo} Añadiendo reacciones!`);
                console.log(`${tiempo} Skilling`);
                await embed.react('<a:skills:853386714168819753>');
                console.log(`${tiempo} Questing`);
                await embed.react('<:quest_icon:853391747278962709>');
                console.log(`${tiempo} Oro`);
                await embed.react('<:coins_icon:853392355067035709>');
                console.log(`${tiempo} Venta de cuentas`);                
                await embed.react('<:BTC:853398763392466944>');
                console.log(`${tiempo} Otros servicios`);
                await embed.react('⚒️');
                console.log(`${tiempo} Setup ID: ${embed.id}`);
                message.delete();

                console.log('Getting embed id');
                embedId = embed.id;
                const fetchMsg = await message.channel.messages.fetch(embedId);
                const roles = ['761127575472046081', '832960907775705100']
                if(fetchMsg){
                    for(roleId of roles)
                    if(!message.guild.roles.cache.get(roleId))throw new Error ('Roles don\'t exist!')
                    let sv = await new TicketConfigs({
                        messageId: embedId,
                        guildId: message.guild.id,
                        roles: JSON.stringify(roles),
                        channelID: message.channel.id
                    });
                    await sv.save();
                    console.log('Saved Ticket Config to DB!');

                } else throw new Error ('Invalid Fields!');

        } catch (err) {
            console.log(err)
        }
    }   
}