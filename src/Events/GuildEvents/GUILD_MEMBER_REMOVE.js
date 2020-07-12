class GUILD_MEMBER_REMOVE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("MemberLeft", packet);
    
    }

}

module.exports = GUILD_MEMBER_REMOVE;