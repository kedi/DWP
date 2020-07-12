
class Handler{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {string} eventName The event name of the event provided from Discord API. The handler manages the name, forms and makes a new emit to the BaseManager's client.
     * @param {Object} packet The packet gathered from Discord API containing the information about the event.
     */
    async emitEvent(eventName, packet){

        this.client.eventEmitter.ws.emit(eventName, packet);

    }

}

module.exports = Handler;