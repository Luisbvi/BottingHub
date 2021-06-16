module.exports = {
    name: "say", //Aquí ponemos el nombre del comando
    alias: ["decir"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],
    permissions: ["ADMINISTRATOR"],

    execute (Discord, client , message, args){
        let texto = args.join(' ');
        if (!texto) return message.channel.send('You need write a text!');
        message.delete();
        message.channel.send(texto);
    }
}