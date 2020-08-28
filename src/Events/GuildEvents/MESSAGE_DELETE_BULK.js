class MESSAGE_DELETE_BULK {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("MessageBulkDeleted", packet);
  }
}

module.exports = MESSAGE_DELETE_BULK;
