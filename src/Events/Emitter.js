const WebSocket = require('ws');
const events = require("events");
const fs = require("fs");
const ClientEventEmitter = new events();

class EventEmitter{

    constructor(client){

        this.client = client;
        this.ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");
        this.client.ClientEventEmitter = ClientEventEmitter;
        
        /**
         * To create class for all events provided in the path.
         */
        fs.readdir("./src/Events", async(err, files) => {

            files.map(eventFile => {

                const eventName = eventFile.split(".")[0];

                /**
                 * Opens new class from the redirected path with event names. If an event has not been found in the directory, it would return.
                 */
                if (eventName.toLowerCase() !== "emitter" && eventName.toLowerCase() !== "handler"){

                    const file = require(`./${eventName}.js`);

                    this[[`${eventName}`]] = new file(this.client);

                }
            
            });

        });
        
        /**
         * The gateway and payload set from Discord API. See https://discord.com/developers/docs/topics/gateway for reference & more info.
         */
        this.ws.on('message', async(packet) => {
            
            const WebSocketResponse = JSON.parse(packet);

            if (WebSocketResponse.op != 10 && WebSocketResponse.t != null && Object.keys(this).includes(WebSocketResponse.t)){

                this[[`${WebSocketResponse.t}`]].handle(WebSocketResponse).catch(err => err);

            }

            /**
             * Identify payload setup for let our client get events from Discord API. See https://discord.com/developers/docs/topics/gateway#identify for reference & more info.
             */
            if (WebSocketResponse.op == 10){

                await this.ws.send(`{
            "op": 2,
            "d": {
            "token": "${this.client.token.replace("Bot ", "")}",
            "properties": {
              "$os": "linux",
              "$browser": "@atoasty/discordwrapper",
              "$device": "@atoasty/discordwrapper"
            }
          }
        }`);

            }
        
        });

    }

}

module.exports = EventEmitter;