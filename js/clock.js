export class Clock {
    constructor(container, minuteHand, secondHand) {
        this.container = container;
        this.minuteHand = minuteHand;
        this.secondHand = secondHand;
        this.selectedMinutes = 25;
        this.updateMinuteHand();
    }

    setFromPointer(e) {
        const rect = this.container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const angle = Math.atan2(dx, -dy); // 0 at 12 o'clock
        const minutes = Math.round((angle >= 0 ? angle : (Math.PI * 2 + angle)) / (Math.PI * 2) * 60);
        this.selectedMinutes = minutes;
        this.updateMinuteHand();
    }

    getSelectedMinutes() {
        return this.selectedMinutes;
    }

    updateHands(elapsedSeconds) {
        const remaining = Math.max(0, this.selectedMinutes * 60 - elapsedSeconds);
        const minutesAngle = ((remaining / 60) % 60) * 6; // 360/60
        const secondsAngle = (remaining % 60) * 6;
        this.minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
        this.secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    }

    updateMinuteHand() {
        const angle = (this.selectedMinutes % 60) * 6;
        this.minuteHand.style.transform = `rotate(${angle}deg)`;
    }

    reset() {
        this.updateHands(0);
        this.selectedMinutes = 25;
        this.updateMinuteHand();
    }
}
