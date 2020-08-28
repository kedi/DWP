class INVITE_DELETE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("InviteDeleted", packet);
  }
}

module.exports = INVITE_DELETE;
