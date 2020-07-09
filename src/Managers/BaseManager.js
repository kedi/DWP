const axios = require("axios");
const UserManager = require("./UserManager")
const GuildManager = require("./GuildManager");
const MessageManager = require("./MessageManager")
const ChannelManager = require("./ChannelManager")
const EventEmitter = require("../Events/Emitter")

class Request {
    constructor(){
        this.apiURL = `https://discord.com/api/v6`
        this.token = null
        this.users = new UserManager(this)
        this.guilds = new GuildManager(this)
        this.messages = new MessageManager(this)
        this.channels = new ChannelManager(this)
    }
    
    /**
     * 
     * @param {string} way The path of the request to send.
     * @param {string} method The method of the request.
     */
    async getCallback(way, method){
        return await new Promise(async (resolve,reject) => {
            await axios({
                method: method,
                url: `${this.apiURL}${way}`,
                headers: {
                    authorization: this.token
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err.response.data.message)
            })
        })
    }

    /**
     * 
     * @param {string} token The token of the Bot to start interacting with Discord API.
     */
    async login(token){
        this.token = `Bot ${token}`
        await this.getCallback("/users/@me","get").then((res) => {
            console.log(`API connected with ${res.username}#${res.discriminator} (${res.id})!`)
            
            this.eventEmitter = new EventEmitter(this)
        }).catch(err => {
            console.error("Provided token is invalid.")
        })
    }

}



module.exports = Request