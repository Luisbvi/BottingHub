const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./comandos/').filter(file => file.endsWith('.js'));
    
    var tiempo = new Date().toLocaleTimeString();
    for(const file of command_files){
        const command = require(`../comandos/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
            console.log(`${tiempo} Comando ${file} fue cargado exitosamente`)
        }else{
            continue;
        }           
    }
    
}