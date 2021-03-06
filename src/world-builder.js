/* @flow */
import type { World } from 'framework';
import * as Builders from 'builders';
import glm from 'gl-matrix';

/**
 * This function is responsible for initializing the world state. Once
 * initialized it is the sim systems that will manage the state of the
 * world
 */
export default function buildWorld(world: World): void {
    world.createEntity(Builders.camera,{
        lockPitch: true,
        fov: 45,
        position: glm.vec3.fromValues(0,5,10),
        focalPoint: glm.vec3.fromValues(0,0,0),
    });

    world.createEntity(Builders.rover,{
        position: glm.vec3.fromValues(0,0,0),
        rotation: glm.quat.create(),
        mass: 300,
    });

    world.createEntity(Builders.ground,{ 
        noiseParams: {
            frequency: 0.007,
            amplitude: 15,
            persistence: 0.2,
            lacunarity: 4,
            octaves: 6,
        },
    });
}
