const Emitter = require("./Emitter");

class READY{

    constructor(client){

        this.client = client;
    
    }

    /**
     * 
     * @param {Object} packet The packet of ready event.
     * Ready event handler. Ready event is sent whenever the client makes a succesfull connection with Gateway.
     */
    async handle(packet){

        this.client.eventHandler.emitEvent("ready", packet);
    
    }

}

module.exports = READY;