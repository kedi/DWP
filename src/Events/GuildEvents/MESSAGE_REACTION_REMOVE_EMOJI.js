class MESSAGE_REACTIONS_REMOVE_EMOJI{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of the event.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("ReactionEmojiRemoved", packet);
    
    }

}

module.exports = MESSAGE_REACTIONS_REMOVE_EMOJI;