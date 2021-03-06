# Block-explorer
An experimental game using WebGL and procedural terrain generation. Go [here](https://www.sharpoblunto.com/projects/block-explorer/) to see a live demo. Move around using the arrow keys or wasd and use space for a speed boost - try and catch as many blue & red cubes as you can.

### Building

Run ```npm install```

### Development

Run npm run dev to start up a development server, then browse to http://localhost:8080. Any changes made to the sim or render systems will be hot reloaded without the need to refresh the browser.
Production

Run ```npm run build```. All built assets will be created in dist/.

### Component Entity system

The game is powered by a simple component entity system

#### Components
All relevant entity states should be attached via some combination of components on an entity.

#### Builders
Builders are factory functions that allow a known configuration of components to be attached to an entity.

#### Sim systems
Sim systems represent all the games logic and are responsible for simulating the world. Sim systems should be completely stateless (all state should reside in components) in order for them to be hot reloadable.

#### Render systems
Render systems are responsible for rendering entities and thier components. Render systems should be completely stateless, and also should not alter the world state - i.e. they should only read the world state.
