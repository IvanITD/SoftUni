function solve() {
    const inputs = document.querySelectorAll('#container input');
    const nameInput = inputs[0];
    const hallInput = inputs[1];
    const priceInput = inputs[2];
    const onScreenButton = document.querySelector('#container button');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    onScreenButton.addEventListener('click', function (event) {
        event.preventDefault();

        const name = nameInput.value;
        const hall = hallInput.value;
        const price = priceInput.value;

        if (name === '' || hall === '' || price === '' || isNaN(Number(price))) {
            return;
        }

        const movie = document.createElement('li');

        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;

        const hallStrong = document.createElement('strong');
        hallStrong.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');

        const priceStrong = document.createElement('strong');
        priceStrong.textContent = Number(price).toFixed(2);

        const ticketsInput = document.createElement('input');
        ticketsInput.placeholder = 'Tickets Sold';

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        archiveButton.addEventListener('click', function () {
            const tickets = ticketsInput.value;

            if (tickets === '' || isNaN(Number(tickets))) {
                return;
            }

            const total = Number(price) * Number(tickets);
            const archiveItem = document.createElement('li');

            const archiveName = document.createElement('span');
            archiveName.textContent = name;

            const totalStrong = document.createElement('strong');
            totalStrong.textContent = `Total amount: ${total.toFixed(2)}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', function () {
                archiveItem.remove();
            });

            archiveItem.appendChild(archiveName);
            archiveItem.appendChild(totalStrong);
            archiveItem.appendChild(deleteButton);
            moviesList.removeChild(movie);
            archiveList.appendChild(archiveItem);
        });

        div.appendChild(priceStrong);
        div.appendChild(ticketsInput);
        div.appendChild(archiveButton);
        movie.appendChild(nameSpan);
        movie.appendChild(hallStrong);
        movie.appendChild(div);
        moviesList.appendChild(movie);

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
    });

    clearButton.addEventListener('click', function () {
        archiveList.innerHTML = '';
    })
}