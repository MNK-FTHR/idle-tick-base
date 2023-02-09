import {GameLoop} from './GameLoop.js'
const loop = new GameLoop();

let gold = 0;
let gold_per_millisecond = 0.003;

loop.onUpdate = function(dt, t) {
  gold += gold_per_millisecond * dt;
};

loop.onRender = function(i) {
  document.getElementById("goldDisplay").textContent = gold.toFixed(2);
};

loop.onPanic = function() {
  this.timing.lag = 0;
};
console.log(loop);
loop.start();