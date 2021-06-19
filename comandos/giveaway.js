const {GiveawaysManager} = require('discord-giveaways');
const ms = require('ms');

module.exports = {
    name: 'giveaway',
    alias: ["gStart"],
    permissions: [],

    async execute(Discord, client, message,args){
        let channel = message.mentions.channels.first();
        if(!channel) return console.log('mention a channel pls');

        let giveawayDuration = args[1] 
        if(!giveawayDuration || isNaN(giveawayDuration)) return message.reply('pls enter a valid duration');

        let giveawayWinners = parseInt(args[2])
        if(isNaN(giveawayWinners)) return message.reply('Pls enter a valid number of winner');

        let giveawayPrize = args.slice(3).join(" ");
        if(!giveawayPrize) return message.reply('Pls enter a valid prize');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,
            reaction: '🎉',
            messages: {
                giveawayEnd: (client.config.everyoneMention ? "@everyone\n\n" : '') + "Giveaway Ended",
                timeRemaining: "Time Remaining **{duration}**",
                inviteToParticipate: "React with 🎉 to join the giveaway",
                winMessage: "Congrats {winners}, you have  won the giveaway",
                embedFooter: 'Powered by BottingHub.com',
                noWinner: "Could not determine a winner",
                hostedBy: 'Hosted by {user}',
                winners: "winners",
                endedAt: 'Ends at',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            }
        });
        message.channel.send(`Giveaway starting in ${channel}`)
    }
}