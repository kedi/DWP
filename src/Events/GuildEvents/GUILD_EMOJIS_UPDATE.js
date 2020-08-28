class GUILD_EMOJIS_UPDATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("EmojiUpdated", packet);
  }
}

module.exports = GUILD_EMOJIS_UPDATE;
