const {DataTypes, Model} = require('sequelize');

module.exports = class TicketConfig extends Model{
    static init(sequelize){
        super.init({
            messageId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            channelID: {
                type: DataTypes.STRING
            },
            guildId: {
                type: DataTypes.STRING
            },
            roles: {
                type: DataTypes.STRING
            },
        },{
            tableName: 'TicketConfigs',
            sequelize
        });
    }
}