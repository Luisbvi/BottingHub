const Canvas = require('canvas')
const path = require('path')
const Status = require('../models/Status');
const { findOne } = require('../models/TicketConfig');
module.exports = {
    name: ['status'],
    alias: ['s'],
    permissions: [],

    async execute(Discord , client, message){
        const status = await Status.findOne({_id: "1"})
        const canvas = Canvas.createCanvas(765,503);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage(
            path.join(__dirname, '../background.png')
        );

        ctx.font = '30px Impact'
        ctx.fillStyle = '#ffffff'
        ctx.drawImage(background, 0,0, canvas.width, canvas.height)
        let Manager = 'BOT MANAGER STATUS'
        ctx.fillText(Manager, canvas.width / 2 - ctx.measureText(Manager).width / 2 , 100)
        let creator = `Creator: ${status.Creator}`
        ctx.fillText(creator, canvas.width / 2 - ctx.measureText(creator).width / 2 ,180)
        let redeemer = ` Unlocker: ${status.Unlocker}`
        ctx.fillText(redeemer, canvas.width / 2 - ctx.measureText(redeemer).width / 2 , 300)
        let unlocker = `Redeemer: ${status.Redeemer}`
        ctx.fillText(unlocker, canvas.width / 2 - ctx.measureText(unlocker).width / 2 , 420)
        
    


        const attachment = new Discord.MessageAttachment(canvas.toBuffer())
        message.channel.send('',attachment)


    }
}