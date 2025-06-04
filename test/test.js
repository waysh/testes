import assert from 'assert';
import { Timer } from '../js/timer.js';

// Basic sanity test for Timer class
const timer = new Timer(1, null, null);
assert.strictEqual(timer.running, false);

// start the timer
timer.start();
assert.strictEqual(timer.running, true);
assert.ok(timer.startDate instanceof Date);

// stop the timer immediately
 timer.stop();
assert.strictEqual(timer.running, false);
console.log('tests passed');
