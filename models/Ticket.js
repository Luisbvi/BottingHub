const {Schema, Model} = require('mongoose');
const db = require('mongoose')
const Tickets = db.Schema({
    channelId: String,
    guildId: String,
    resolved: Boolean,
    authorId: String, 
});

module.exports = db.model('Tickets', Tickets)