function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    function fill(daysValue) {
        days.value = daysValue;
        hours.value = daysValue * 24;
        minutes.value = daysValue * 1440;
        seconds.value = daysValue * 86400;
    }

    document.getElementById('daysBtn').addEventListener('click', () => {
        fill(Number(days.value));
    });
    document.getElementById('hoursBtn').addEventListener('click', () => {
        fill(Number(hours.value) / 24);
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        fill(Number(minutes.value) / 1440);
    });
    document.getElementById('secondsBtn').addEventListener('click', () => {
        fill(Number(seconds.value) / 86400);
    });
}