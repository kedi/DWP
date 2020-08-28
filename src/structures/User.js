class UserStructure {
  /**
   * Creates an instance of UserStructure.
   * @param {*} user
   * @param {import('../Managers/BaseManager')} client
   * @memberof UserStructure
   */
  constructor(user, client) {
    Object.assign(this, user);
    this.client = client;
  }
}

module.exports = UserStructure;
