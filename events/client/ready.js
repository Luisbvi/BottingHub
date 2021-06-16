const db = require('../../database');
const Ticket = require('../../models/Ticket');
const TicketConfig = require('../../models/TicketConfig');

module.exports =  (Discord, client) => {
    var tiempo = new Date().toLocaleTimeString();

    const estados = ['Proxies', 'Servers', 'Bots', 'Orders']

    console.log(``);
    console.log(`${tiempo} Iniciando BOT ${client.user.tag}...`);

    setInterval(() =>{
        function presence() {
            client.user.setPresence({
                status: 'dnd',
                activity:{
                    name: estados[Math.floor(Math.random()*estados.length)],
                    type:'WATCHING'
                }
            });
        }
        presence()
    },60000);

    db.authenticate()
    .then(()=>{
        console.log('Connected to DB');
        Ticket.init(db);
        Ticket.sync();
        TicketConfig.init(db);
        TicketConfig.sync();
    }).catch(err => console.log(err));
    
    console.log(' ');
    console.log(`${tiempo} ${client.user.tag} BOT iniciado con exito!`);
    console.log(' ');
}