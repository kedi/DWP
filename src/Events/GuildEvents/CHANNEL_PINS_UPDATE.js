class CHANNEL_PINS_UPDATE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("ChannelPinsUpdated", packet);
    
    }

}

module.exports = CHANNEL_PINS_UPDATE;