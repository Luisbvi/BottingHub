const {Schema, Model} = require('mongoose');
const db = require('mongoose');

const Status = db.Schema({
    _id: String,
    Creator: String,
    Unlocker: String,
    Redeemer: String
});

module.exports = db.model('Status', Status);