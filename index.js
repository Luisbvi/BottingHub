const Discord = require('discord.js');
require('dotenv').config();
const {GiveawaysManager} = require('discord-giveaways');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const config = require('./config.json')
client.config = config;

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.giveawaysManager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)( client, Discord ) 
});

client.login(process.env.TOKEN);
