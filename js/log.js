export class Log {
    constructor(listElement) {
        this.list = listElement;
        this.entries = JSON.parse(localStorage.getItem('timerLog') || '[]');
        this.render();
    }

    addEntry(entry) {
        this.entries.push(entry);
        localStorage.setItem('timerLog', JSON.stringify(this.entries));
        this.render();
    }

    render() {
        this.list.innerHTML = '';
        for (const e of this.entries) {
            const li = document.createElement('li');
            const start = new Date(e.start);
            const end = new Date(e.end);
            const durationText = `${e.duration} minute${e.duration === 1 ? '' : 's'}`;
            const timeframe = `${start.toLocaleTimeString()} → ${end.toLocaleTimeString()} | ${start.toLocaleDateString()}`;
            li.innerHTML = `<strong>${durationText}</strong> - ${timeframe}<br>Target: ${e.purpose}<br>Result: ${e.outcome}`;
            this.list.appendChild(li);
        }
    }
}
