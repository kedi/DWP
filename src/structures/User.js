class UserStructure{
    constructor(user,client){
        Object.keys(user).map(key => {
            this[[`${key}`]] = user[[`${key}`]]
        })

        this.client = client
    }

}

module.exports = UserStructure