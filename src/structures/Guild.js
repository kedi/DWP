class GuildStructure {
  /**
   * Creates an instance of GuildStructure.
   * @param {*} guild
   * @param {import('../Managers/BaseManager')} client
   * @memberof GuildStructure
   */
  constructor(guild, client) {
    Object.assign(this, guild);
    this.client = client;
  }

  /**
   * Leaves the guild. Should be attached with Guild Manager.
   * @returns {GuildStructure}
   */
  leave() {
    return new Promise(async (resolve, reject) => {
      await this.client
        .getCallback(`/users/@me/guilds/${this.id}`, "delete")
        .then(() => {
          resolve(this);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = GuildStructure;
