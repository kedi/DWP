class GUILD_BAN_ADD {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("BanAdded", packet);
  }
}

module.exports = GUILD_BAN_ADD;
