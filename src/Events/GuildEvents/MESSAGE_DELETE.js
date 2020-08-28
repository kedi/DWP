class MESSAGE_DELETE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("MessageDeleted", packet);
  }
}

module.exports = MESSAGE_DELETE;
