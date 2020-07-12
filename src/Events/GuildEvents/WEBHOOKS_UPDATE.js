class WEBHOOKS_UPDATE{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("WebhooksUpdated", packet);
    
    }

}

module.exports = WEBHOOKS_UPDATE;