class CHANNEL_CREATE{
    
    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("ChannelCreated", packet);
    
    }

}

module.exports = CHANNEL_CREATE;