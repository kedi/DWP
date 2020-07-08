const GuildStructure = require("../structures/Guild")
class Guild{
    
    constructor(client){
        this.client = client
    }

    /**
     * 
     * @param {string} guildID The ID of the guild to get information.
     */
    async get(guildID){
        if(typeof guildID !== "string") return console.log(new Error("Please provide a valid Guild ID."))

        let guild = await this.client.getCallback(`/guilds/${guildID}`, "get").catch(err => {console.log(err)})
        let partialGuild = await new GuildStructure(guild, this.client)

        return await guild ? await partialGuild : null
    }

    async getMembers(guildID){
        
    }
}

module.exports = Guild