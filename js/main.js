import { Clock } from './clock.js';
import { Timer } from './timer.js';
import { Log } from './log.js';

const clockEl = document.getElementById('clock');
const minuteHand = clockEl.querySelector('.minute');
const secondHand = clockEl.querySelector('.second');
const startBtn = document.getElementById('start-btn');
const logList = document.getElementById('log');

const clock = new Clock(clockEl, minuteHand, secondHand);
const log = new Log(logList);
let timer;

startBtn.addEventListener('click', async () => {
    if (timer && timer.running) return; // ignore if already running
    const minutes = clock.getSelectedMinutes();
    if (minutes === 0) return;
    const purpose = prompt('Purpose of this timer?');
    if (!purpose) return;
    timer = new Timer(minutes * 60, (elapsed) => {
        clock.updateHands(elapsed);
    }, async () => {
        clock.reset();
        const outcome = prompt('What did you actually do?');
        log.addEntry({
            duration: minutes,
            start: timer.startDate,
            end: new Date(),
            purpose,
            outcome: outcome || ''
        });
    });
    timer.start();
});

clockEl.addEventListener('click', (e) => {
    if (timer && timer.running) return; // don't allow adjustment while running
    clock.setFromPointer(e);
});
