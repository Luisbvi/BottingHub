const Discord = require('discord.js');
const Ticket = require('../../models/Ticket');
const TicketConfig = require('../../models/TicketConfig');
module.exports = async (message,messageReactionAdd, reaction,user) => {
    if(user.bot) return;
    
    if(reaction.message.channel.id === '853452873445801984' && reaction.emoji.id === '853386714168819753'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    console.log(roleIdString);
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&854591185950343248>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to OSRS Services\n\n')
                    .setDescription('Type of services: **Skill Services**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await new Ticket({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                    ticket.save();

                } catch (error) {
                    console.log(error);
                }
            }

         }else{
            console.log('No ticket config found!');
        }
    } else if(reaction.message.channel.id === '853452873445801984' && reaction.emoji.id === '853391747278962709'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&854591185950343248>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to OSRS Services\n\n')
                    .setDescription('Type of services: **Questing**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }

         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '853452873445801984' && reaction.emoji.id === '853392355067035709'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&854591185950343248>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to OSRS Services\n\n')
                    .setDescription('Type of services: **Gold**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '853452873445801984' && reaction.emoji.id === '853398763392466944'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&854591185950343248>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to OSRS Services\n\n')
                    .setDescription('Type of services: **Buy Accounts**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });

                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '853452873445801984' && reaction.emoji.name === '⚒️'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&854591185950343248>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to OSRS Services\n\n')
                    .setDescription('Type of services: **Custom services**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '855183196928999464' && reaction.emoji.name === '🤖'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&855186520578064385>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to Support\n\n')
                    .setDescription('Type of issue: **Bot Manager**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '855183196928999464' && reaction.emoji.name === '⚙️'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&855186520578064385>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to Support\n\n')
                    .setDescription('Type of issue: **Parameters**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    } else if(reaction.message.channel.id === '855183196928999464' && reaction.emoji.name === '🌐'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&855186520578064385>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to Support\n\n')
                    .setDescription('Type of issue: **Proxies**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '855183196928999464' && reaction.emoji.name === '📜'){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&855186520578064385>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to Support\n\n')
                    .setDescription('Type of issue: **Script**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }else if(reaction.message.channel.id === '855183196928999464' && reaction.emoji.name === '🥇' && reaction.user.roles.has(reaction.guild.roles.find('VIP'))){
        reaction.users.remove(user);
        const ticketConfig = await TicketConfig.findOne({messageId: reaction.message.id});
        if(ticketConfig){
            const findTicket = await Ticket.findOne({authorId: user.id, resolved: false});
            if(findTicket) user.send('You already have a ticket!');
            else{
                try {
                    console.log('Creating ticket...');
                    const roleIdString = ticketConfig.roles;
                    const roleIds = JSON.parse(roleIdString);
                    const permissions = roleIds.map((id) => ({allow: 'VIEW_CHANNEL', id}));
                    const channel = await reaction.message.guild.channels.create(`ticket-${user.username}`, {
                        permissionOverwrites: [
                            { deny: 'VIEW_CHANNEL', id: reaction.message.guild.id},
                            { allow: 'VIEW_CHANNEL', id: user.id },
                            ...permissions
                        ]
                    });

                    const msg = await channel.send(`<@${user.id}> <@&855186520578064385>`, new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Welcome to Support\n\n')
                    .setDescription('Type of issue: **VIP member**\n\nSupport will assist you shortly. In the meantime, please check out our main website https://bottinghub.com/')
                    .setTimestamp()
                    .setFooter(`Ticket for ${user.tag}`)
                    );

                    const ticket = await Ticket.create({
                        authorId: user.id,
                        channelId: channel.id,
                        guildId: reaction.message.guild.id,
                        resolved: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            }
         }else{
            console.log('No ticket config found!');
        }
    }
}