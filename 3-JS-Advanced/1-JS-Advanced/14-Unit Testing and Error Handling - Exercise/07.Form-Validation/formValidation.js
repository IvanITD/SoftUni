function validate() {
    const companyCheckbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');

    companyCheckbox.addEventListener('change', () => {
        companyInfo.style.display = companyCheckbox.checked ? 'block' : 'none';
    });

    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();

        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const companyNumber = document.getElementById('companyNumber');
        const valid = document.getElementById('valid');

        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        const passwordPattern = /^\w{5,15}$/;
        const emailPattern = /@.*\./;

        let isValid = true;

        function mark(field, correct) {
            if (correct) {
                field.style.border = 'none';
            } else {
                field.style.borderColor = 'red';
                isValid = false;
            }
        }

        mark(username, usernamePattern.test(username.value));
        mark(email, emailPattern.test(email.value));

        const passwordsMatch = password.value === confirmPassword.value;
        mark(password, passwordPattern.test(password.value) && passwordsMatch);
        mark(confirmPassword, passwordPattern.test(confirmPassword.value) && passwordsMatch);

        if (companyCheckbox.checked) {
            const number = Number(companyNumber.value);
            mark(companyNumber, number >= 1000 && number <= 9999);
        }

        valid.style.display = isValid ? 'block' : 'none';
    });
}
