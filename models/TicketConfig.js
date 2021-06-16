const {Schema, Model} = require('mongoose');
const db = require('mongoose')

const TicketConfigs = new db.Schema({
    messageId: String,
    channelId: String,
    guildId: String,
    roles: Array
});

module.exports = db.model('TicketConfigs', TicketConfigs);