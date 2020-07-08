const UserStructure = require("../structures/User")
class User{
    
    constructor(client){
        this.client = client
    }
    
    /**
     * Returns to a user's information with an object.
     */
    async get(userID){
        let userInfo = await this.client.getCallback(`/users/${userID}`, "get").catch(err => console.log(err))

        let partialUser = new UserStructure(userInfo, this.client)
        
        return await userInfo ? await partialUser : null
    }

    
}

module.exports = User