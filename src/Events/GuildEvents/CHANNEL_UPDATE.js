class CHANNEL_UPDATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("ChannelUpdated", packet);
  }
}

module.exports = CHANNEL_UPDATE;
