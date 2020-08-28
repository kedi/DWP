class INVITE_CREATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("InviteCreated", packet);
  }
}

module.exports = INVITE_CREATE;
