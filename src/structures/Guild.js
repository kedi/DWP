class GuildStructure{
    constructor(guild,client){
        Object.keys(guild).map(key => {
            this[[`${key}`]] = guild[[`${key}`]]
        })

        this.client = client
    }

    /**
     * Leaves the guild. Should be attached with Guild class.
     */
    async leave(){
        return new Promise(async (resolve,reject) => {
            await this.client.getCallback(`/users/@me/guilds/${this.id}`, "delete").then(() => {
                resolve(this)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = GuildStructure