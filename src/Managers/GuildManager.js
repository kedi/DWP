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
        let guild = await this.client.getCallback(`/guilds/${guildID}`, "get").catch(err => {console.log(err)})
        
        let partialGuild = await new GuildStructure(guild, this.client)

        return await guild ? await partialGuild : null
    }

    async getMembers(guildID){
        
    }
}

module.exports = Guild