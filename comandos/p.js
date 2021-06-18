const Status = require('../models/Status')
module.exports = {

    name: 'pre',
    alias: [],
    permissions: [],

 async execute(Discord, client, message){
     const status = await Status.findOne({_id: "1"});
     setInterval(() => {
        function presence() {
            const estados = [`Acc Creator: ${status.Creator}`, `Unlocker: ${status.Unlocker}`, `Redeemer: ${status.Redeemer}`]
            client.user.setPresence({
                status: 'dnd',
                activity:{
                    name: estados[Math.floor(Math.random()*estados.length)],
                    type:'WATCHING'
                }
            });
        }
        presence()
     }, 5000);

 }
}