function focused() {
    const inputs = document.querySelectorAll('input');

    for (const input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }
}