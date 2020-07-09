const WebSocket = require('ws');
class EventEmittter{
    constructor(client){
        this.client = client
        this.ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json")

         this.ws.on('message', async(packet) =>  {
            
            let WebSocketResponse = JSON.parse(packet)

            if(WebSocketResponse.op == 10){
            await this.ws.send(`{
                "op": 2,
                "d": {
                  "token": "${this.client.token.replace("Bot ","")}",
                  "properties": {
                    "$os": "linux",
                    "$browser": "@atoasty/discordwrapper",
                    "$device": "@atoasty/discordwrapper"
                  }
                }
              }`)

            }
        });

    }

}

module.exports = EventEmittter