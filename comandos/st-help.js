const TicketConfigs = require("../models/TicketConfig");

module.exports = {
    name: 'sth',
    alias: [],
    permissions: ["ADMINISTRATOR"],

    async execute(Discord, client , message , args, reaction){

        try {

            var tiempo = new Date().toLocaleTimeString();
            console.log(`${tiempo} Instalando ticket...`);;
            const embed = await message.channel.send(new Discord.MessageEmbed()
            
            .setTitle('HELP BOT')
            .setDescription('Welcome to **BOTTING HUB LOYALTY**. We are glad to have you on board.\nFor any inquiries, please react below accordingly.')
            .addField('Bot manager','React 🤖 to get help with your Manager')
            .addField('Parameters', 'React ⚙️ to get help with your Parameters')
            .addField('Proxies','React 🌐 to get help with your Proxies')
            .addField('Script', 'React 📜 to get help with your Script')
            .addField('Botting Journey','If you need help in your botting journey, react with 🥇, **VIP Role required**\n\n**Full FAQ Below:**  https://bottinghub.com/faqs/')
            .setColor('RED')
            .setFooter(`Powered By BottingHub.com`)
            )
            console.log(`${tiempo} Ticket Instalado!`);

                console.log(`${tiempo} Añadiendo reacciones!`);
                console.log(`${tiempo} Manager`);
                await embed.react('🤖');
                console.log(`${tiempo} Parameters`);
                await embed.react('⚙️');
                console.log(`${tiempo} Proxies`);
                await embed.react('🌐');
                console.log(`${tiempo} Script`);
                await embed.react('📜');
                console.log(`${tiempo} Setup ID: ${embed.id}`);
                await embed.react('🥇');
                console.log('VIP Role');
                message.delete();
                console.log('Getting embed id');
                embedId = embed.id;
                const fetchMsg = await message.channel.messages.fetch(embedId);
                const roles = ['855140050526011442', '855186520578064385']
                if(fetchMsg){
                    for(roleId of roles)
                    if(!message.guild.roles.cache.get(roleId))throw new Error ('Roles don\'t exist!')
                    let sv = await new TicketConfigs({
                        messageId: embedId,
                        guildId: message.guild.id,
                        roles: JSON.stringify(roles),
                        channelID: message.channel.id
                    });
                    sv.save();
                    
                    console.log('Saved Ticket Config to DB!');

                } else throw new Error ('Invalid Fields!');

        } catch (err) {
            console.log(err)
        }
    }   
}