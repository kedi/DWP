class GUILD_INTEGRATIONS_UPDATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("IntegrationUpdated", packet);
  }
}

module.exports = GUILD_INTEGRATIONS_UPDATE;
