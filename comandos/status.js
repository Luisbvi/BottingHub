const Canvas = require('canvas')
const path = require('path')
const Status = require('../models/Status');
module.exports = {
    name: ['status'],
    alias: ['s'],
    permissions: [],

    async execute(Discord , client, message){
        const status = await Status.findOne({_id: "1"})
        const canvas = Canvas.createCanvas(765,503);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage(
            path.join(__dirname, '../backgroud.png')
        );

        ctx.font = '30px Impact'
        ctx.fillStyle = '#000000'
        ctx.drawImage(background, 0,0, canvas.width, canvas.height)
        let Manager = 'BOT MANAGER STATUS'
        ctx.fillText(Manager, canvas.width / 2 - ctx.measureText(Manager).width / 2 , 100)
        let creator = `Creator`
        ctx.fillText(creator, 226, 170)
        let redeemer = `Unlocker`
        ctx.fillText(redeemer, 226 , 252)
        let unlocker = `Redeemer`
        ctx.fillText(unlocker, 226 , 338)
        let creator1 = `${status.Creator}`
        ctx.fillText(creator1, 415, 170)
        let unlocker1 = `${status.Unlocker}`
        ctx.fillText(unlocker1, 415 , 252)
        let redeemer1 = `${status.Redeemer}`
        ctx.fillText(redeemer1, 415 , 338)
        
    


        const attachment = new Discord.MessageAttachment(canvas.toBuffer())
        message.channel.send('',attachment)


    }
}