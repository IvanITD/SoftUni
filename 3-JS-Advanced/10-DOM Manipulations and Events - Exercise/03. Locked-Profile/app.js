function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');
    for (const button of buttons) {
        button.addEventListener('click', onToggle);
    }

    function onToggle(event) {
        const profile = event.target.parentElement;
        const locked = profile.querySelector('input[value="lock"]');
        if (locked.checked) {
            return;
        }

        const hiddenInfo = profile.querySelector('div');
        const button = event.target;

        if (button.textContent === "Show more") {
            hiddenInfo.style.display = "block";
            button.textContent = "Hide it";
        } else {
            hiddenInfo.style.display = "none";
            button.textContent = "Show more";
        }
    }
}