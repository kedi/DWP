class GUILD_ROLE_DELETE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("RoleDeleted", packet);
  }
}

module.exports = GUILD_ROLE_DELETE;
