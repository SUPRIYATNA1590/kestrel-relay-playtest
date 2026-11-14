// Kestrel Relay: the numbers every system shares. One place, so the judge can read the
// whole game balance in a minute and the sim never disagrees with the HUD about a price.
export const CONFIG = {
  // A round is 100 seconds; the freeze before it is 8. First team to 5 rounds wins the
  // match; a match runs at most 9 rounds.
  roundSeconds: 100,
  freezeSeconds: 8,
  roundsToWin: 5,
  maxRounds: 9,
  // The spike takes 3.5 s to plant and 5 s to defuse; it blows 35 s after the plant.
  plantSeconds: 3.5,
  defuseSeconds: 5,
  spikeSeconds: 35,
  // Money: everyone starts with $800. A kill pays $300, a plant $300, a round win $3,250
  // and a round loss $1,900.
  startMoney: 800,
  killReward: 300,
  plantReward: 300,
  winReward: 3250,
  lossReward: 1900,
  health: 100,
  armorReduction: 0.5,
};

export const WEAPONS = {
  pistol: {
    name: 'P9 Sidearm', price: 0, auto: false, damage: 26, headMult: 4,
    mag: 12, reserve: 36, fireGap: 0.16, reload: 1.4, spreadStill: 0.004,
    spreadMove: 0.03, kick: 0.006, range: 55, tracer: 0xe8c25a,
  },
  smg: {
    name: 'VK-9 Ripper', price: 1500, auto: true, damage: 22, headMult: 4,
    mag: 28, reserve: 84, fireGap: 0.075, reload: 1.9, spreadStill: 0.006,
    spreadMove: 0.034, kick: 0.007, range: 48, tracer: 0xe8c25a,
  },
  rifle: {
    name: 'AR-77 Longshot', price: 2700, auto: true, damage: 33, headMult: 4,
    mag: 30, reserve: 90, fireGap: 0.096, reload: 1.9, spreadStill: 0.0022,
    spreadMove: 0.028, kick: 0.009, range: 80, tracer: 0xf0a830,
  },
  sniper: {
    name: 'LRS-50 Warden', price: 4750, auto: false, damage: 110, headMult: 4,
    mag: 5, reserve: 15, fireGap: 1.1, reload: 2.8, spreadStill: 0.0004,
    spreadMove: 0.06, kick: 0.03, range: 120, tracer: 0x9fd8ff,
  },
};

export const GRENADE = {
  name: 'Frag grenade', price: 300, radius: 6.5, maxDamage: 95, fuse: 1.6,
};

export const ARMOR = { name: 'Kevlar vest', price: 650 };

export const TEAMS = {
  vipers: { name: 'Vipers', color: 0xf0a830, spawn: { x: 0, z: 20 } },
  sentinels: { name: 'Sentinels', color: 0x7fb4c7, spawn: { x: 0, z: -20 } },
};
