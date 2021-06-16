require('dotenv').config();
module.exports = (Discord, client, message) =>{
    try {
        
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.alias && a.alias.includes(cmd));
    
    const validPermission = [
        "ADMINISTRATOR", // (implicitly has all permissions, and bypasses all channel overwrites)
        "CREATE_INSTANT_INVITE", // (create invitations to the guild)
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "MANAGE_CHANNELS", // (edit and reorder channels)
        "MANAGE_GUILD", // (edit the guild information, region, etc.)
        "ADD_REACTIONS", // (add new reactions to messages)
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES" ,// (delete messages and reactions)
        "EMBED_LINKS", // (links posted will have a preview embedded)
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY", // (view messages that were posted prior to opening Discord)
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS", // (use emojis from different guilds)
        "VIEW_GUILD_INSIGHTS",
        "CONNECT", // (connect to a voice channel)
        "SPEAK", // (speak in a voice channel)
        "MUTE_MEMBERS", // (mute members across all voice channels)
        "DEAFEN_MEMBERS", // (deafen members across all voice channels)
        "MOVE_MEMBERS", // (move members between voice channels)
        "USE_VAD", // (use voice activity detection)
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES", // (change other members' nicknames)
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]
    
    if(!command) return;
    
    if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermission.includes(perm)){
                return console.log(`Invalid permission ${perm}`);
            }
            if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
                break;
            }
        }
        if(invalidPerms.length)return message.reply(`**You don't have permission to use this command**`);
    }
    command.execute(Discord ,client, message, args);
           
    } catch (error) {
        console.log(error)
    }
}