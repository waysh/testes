export class Timer {
    constructor(durationSeconds, onTick, onEnd) {
        this.duration = durationSeconds;
        this.onTick = onTick;
        this.onEnd = onEnd;
        this.interval = null;
        this.startDate = null;
        this.running = false;
        this.elapsed = 0;
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.startDate = new Date();
        this.interval = setInterval(() => {
            this.elapsed++;
            if (this.onTick) this.onTick(this.elapsed);
            if (this.elapsed >= this.duration) {
                this.stop();
                if (this.onEnd) this.onEnd();
            }
        }, 1000);
    }

    stop() {
        if (this.interval) clearInterval(this.interval);
        this.running = false;
        this.interval = null;
    }
}
