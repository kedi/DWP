class GUILD_MEMBER_UPDATE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("MemberUpdated", packet);
    
    }

}

module.exports = GUILD_MEMBER_UPDATE;