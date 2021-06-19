const db = require('mongoose');
const Ticket = require('../../models/Ticket');
const TicketConfig = require('../../models/TicketConfig');
const Status = require('../../models/Status');

module.exports = (Discord, client) => {
    console.log(``);
    console.log(`Iniciando BOT ${client.user.tag}...`);

    db.connect(process.env.MONGO, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log('connected to database');
    }).catch((error) => {
        console.log(error);
    });
    
    console.log(' ');
    console.log(`${client.user.tag} BOT iniciado con exito!`);
    console.log(' ');
}