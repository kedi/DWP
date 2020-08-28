class GUILD_ROLE_CREATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("RoleCreated", packet);
  }
}

module.exports = GUILD_ROLE_CREATE;
