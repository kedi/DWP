class MESSAGE_REACTIONS_REMOVE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("ReactionRemoved", packet);
  }
}

module.exports = MESSAGE_REACTIONS_REMOVE;
