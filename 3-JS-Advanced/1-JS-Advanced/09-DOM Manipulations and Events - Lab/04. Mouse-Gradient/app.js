function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const output = document.getElementById('result')

    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);

    function onMouseMove(event) {
        const percent = Math.trunc(event.offsetX / (event.target.clientWidth - 1) * 100);
        output.textContent = percent + '%';
    }

    function onMouseOut(event) {
        output.textContent = '';
    }
}