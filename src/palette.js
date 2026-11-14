// The look plan, in one place. Kestrel Relay is a desert relay station at dusk: warm
// sand and rust under a violet dusk sky, one amber accent for the Vipers and one cool
// teal for the Sentinels. The lighting makes every shade the game needs, so no other
// colour appears in the code. The same names are the CSS custom properties in index.html.
export const PALETTE = {
  canvas: '#1a1410', // dusk sky, also the page background
  surface: '#3a2f26', // packed sand and concrete
  hairline: '#5c4a38', // crates, barriers and low cover
  ink: '#efe7d8', // sun-bleached walls and the HUD text
  muted: '#9a8d7a', // shadows, distant metal
  accent: '#f0a830', // Viper amber: the spike, the buy menu, tracers
  sentinel: '#7fb4c7', // Sentinel teal: enemy markers and their site
  rust: '#8a4a2a', // container rust and the antenna tower
  olive: '#6a6a4a', // sandbags and camo netting
};

export function shade(name) {
  return PALETTE[name];
}
