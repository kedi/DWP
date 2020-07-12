class CHANNEL_DELETE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("ChannelDeleted", packet);
    
    }

}

module.exports = CHANNEL_DELETE;