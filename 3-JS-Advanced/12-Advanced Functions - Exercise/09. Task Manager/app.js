function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add');

    const openSection = document.querySelectorAll('section')[1].children[1];
    const inProgressSection = document.getElementById('in-progress');
    const completeSection = document.querySelectorAll('section')[3].children[1];

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        const task = taskInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;

        if (task === '' || description === '' || date === '') {
            return;
        }

        const article = document.createElement('article');

        const heading = document.createElement('h3');
        heading.textContent = task;

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description}`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date}`;

        const buttons = document.createElement('div');
        buttons.className = 'flex';

        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.className = 'green';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'red';

        startButton.addEventListener('click', function () {
            startButton.remove();

            const finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.className = 'orange';
            buttons.appendChild(finishButton);
            inProgressSection.appendChild(article);

            finishButton.addEventListener('click', function () {
                buttons.remove();
                completeSection.appendChild(article);
            });
        });

        deleteButton.addEventListener('click', function () {
            article.remove();
        });

        buttons.appendChild(startButton);
        buttons.appendChild(deleteButton);
        article.appendChild(heading);
        article.appendChild(descriptionParagraph);
        article.appendChild(dateParagraph);
        article.appendChild(buttons);
        openSection.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    });
}