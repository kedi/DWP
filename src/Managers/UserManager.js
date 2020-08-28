const UserStructure = require("../structures/User");

class User {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {string} userID Returns to a user's information with an object.
   */
  async get(userID) {
    if (typeof userID !== "string") {
      return console.log(new Error("Please provide a valid User ID."));
    }

    const userInfo = await this.client
      .getCallback(`/users/${userID}`, "get")
      .catch((err) => console.log(err));
    const partialUser = new UserStructure(userInfo, this.client);

    return (await userInfo) ? await partialUser : null;
  }
}

module.exports = User;
