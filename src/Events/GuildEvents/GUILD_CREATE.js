class GUILD_CREATE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("GuildCreated", packet);
    
    }

}

module.exports = GUILD_CREATE;