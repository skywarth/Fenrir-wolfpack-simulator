# Fenrir Wolfpack Simulator
![alt text][logo]

[logo]: https://github.com/skywarth/Fenrir-wolfpack-simulator/blob/master/resc/fenrir-logo-black.png "Fenrir Wolfpack Simulator"
Fenrir is an assistant to prognosticate the future of a wolfpack using vanilla Javascript and data structures. 

### Simulation and prediction includes:
* Changes in the environment
* Health and status of individual wolves
* Disease conditions of each wolf
* Weather events and effects
* Alpha rankings in the pack
* Mortality status of pack members
* Wild card encounters (triggered by scout event)
* Meat distribution
* Regular events
* Irregular events



## Installation
```
npm i fenrir-wolfpack-simulation
```
## Current Version
Includes:
* Max-heap tree for alpha determination and food distribution.
* Regular Events.
* Environment module (partial).
* Constant parameters module.
* Modifiers module for chance and likelihood calculation.
* Variable parameter module.
* Wolf data module.
* Simulation module (initiating the simulation and generating reports).

Brief capabilities:
1. Create environment and it's object (input).
2. Create one or more wolf objects (input).
3. Calculate 7 hunt parameters which affect hunt success chance.
4. Determine alpha of the pack considering alpha points calculated.
5. Placement of wolf objects to max-heap tree according to alpha points.
6. Hunt event conclusion.
7. Food distribution order in pack.
8. Weather event trigger.
9. Scouting and results. (partial)
10. Basic simulation loop.

## License
Licenced under the [MIT License](https://github.com/skywarth/Fenrir-wolfpack-simulator/blob/master/LICENSE)
