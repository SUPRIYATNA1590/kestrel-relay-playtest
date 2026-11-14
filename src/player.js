// The player: a body (shared with the bots), an arsenal, health and armour. It is a
// Viper, and it carries the spike at the start of every round. Damage halves through
// kevlar; death drops the spike where the player fell and hands the camera to a
// teammate until the next round.
import * as THREE from 'three';
import { createBody } from './body.js';
import { createArsenal } from './weapons.js';
import { CONFIG } from './config.js';

export function createPlayer(world, camera) {
  const spawn = world.spawns.vipers[0];
  const body = createBody(world.colliders, spawn[0], spawn[1], Math.PI);
  const arsenal = createArsenal(camera);
  const player = {
    name: 'You',
    team: 'vipers',
    body,
    arsenal,
    health: CONFIG.health,
    armor: false,
    alive: true,
  };
  const eye = new THREE.Vector3();

  function respawn() {
    body.state.position.set(spawn[0], 0, spawn[1]);
    body.state.velocity.set(0, 0, 0);
    body.state.yaw = Math.PI;
    body.state.pitch = 0;
    player.health = CONFIG.health;
    player.armor = false;
    player.alive = true;
    arsenal.refill();
  }

  return {
    ...player,
    respawn,
    eyePosition(out) {
      return body.eyePosition(out || eye);
    },
    // Movement input from the held keys, or nothing while frozen between rounds.
    step(dt, keys, frozen) {
      if (!player.alive || frozen) return;
      body.step(dt, {
        forward: (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0),
        strafe: (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
        crouch: keys.has('ControlLeft') || keys.has('ControlRight') || keys.has('KeyC'),
        jump: keys.has('Space'),
      });
    },
    look(dx, dy) {
      body.look(dx, dy);
    },
    recoil(pitchKick, yawKick) {
      body.state.pitch = Math.min(1.45, body.state.pitch + pitchKick);
      body.state.yaw += yawKick;
    },
    groundSpeed() {
      return body.groundSpeed();
    },
    damage(amount) {
      if (!player.alive) return false;
      const taken = player.armor ? Math.round(amount * (1 - CONFIG.armorReduction)) : amount;
      player.health -= taken;
      if (player.health <= 0) {
        player.health = 0;
        player.alive = false;
        return true;
      }
      return false;
    },
    buyArmor() {
      player.armor = true;
    },
    resetMatch() {
      // A new match starts with a pistol and no armour; the buy menu is the way up.
      for (const id of ['smg', 'rifle', 'sniper']) delete arsenal.owned[id];
      arsenal.state.grenades = 0;
      arsenal.equip('pistol');
      respawn();
    },
  };
}
