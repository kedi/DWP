module.exports = (bitfield) => {
  const BadgesWithNames = [];

  const BADGE_BITFIELDS = {
    DISCORD_EMPLOYEE: 1,
    DISCORD_PARTNER: 2,
    HYPESQUAD_EVENTS: 4,
    BUGHUNTER_LEVEL_1: 8,
    HOUSE_BRAVERY: 64,
    HOUSE_BRILLIANCE: 128,
    HOUSE_BALANCE: 256,
    EARLY_SUPPORTER: 512,
    TEAM_USER: 1024,
    SYSTEM: 4096,
    BUGHUNTER_LEVEL_2: 16384,
    VERIFIED_BOT: 65536,
    VERIFIED_DEVELOPER: 131072,
  };

  Object.entries(BADGE_BITFIELDS).map((entry) => {
    if ((bitfield & entry[1]) == entry[1]) {
      BadgesWithNames.push(entry[0]);
    }
  });

  return BadgesWithNames;
};
