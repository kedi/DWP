class MESSAGE_REACTION_ADD {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("ReactionAdded", packet);
  }
}

module.exports = MESSAGE_REACTION_ADD;
