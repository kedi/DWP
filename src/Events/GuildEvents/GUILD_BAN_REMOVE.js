class GUILD_BAN_REMOVE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("BanRemoved", packet);
    
    }

}

module.exports = GUILD_BAN_REMOVE;