class GUILD_MEMBER_ADD {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("MemberJoined", packet);
  }
}

module.exports = GUILD_MEMBER_ADD;
