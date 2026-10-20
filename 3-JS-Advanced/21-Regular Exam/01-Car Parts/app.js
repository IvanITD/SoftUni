window.addEventListener('load', solve);

function solve() {
        const carModel = document.getElementById('car-model');
        const carYear = document.getElementById('car-year');
        const partName = document.getElementById('part-name');
        const partNumber = document.getElementById('part-number');
        const condition = document.getElementById('condition');
        const nextBtn = document.getElementById('next-btn');
        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list');
        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');

        nextBtn.addEventListener('click', onNext);

        function onNext(event) {
                event.preventDefault();

                const model = carModel.value;
                const year = carYear.value;
                const name = partName.value;
                const number = partNumber.value;
                const partCondition = condition.value;
                const yearNumber = Number(year);

                if (model === '' || year === '' || name === '' || number === '' || partCondition === '' || yearNumber < 1960 || yearNumber > 2025) {
                        return;
                }

                const li = document.createElement('li');
                li.className = 'part-content';

                const article = document.createElement('article');
                article.appendChild(createParagraph(`Car Model: ${model}`));
                article.appendChild(createParagraph(`Car Year: ${year}`));
                article.appendChild(createParagraph(`Part Name: ${name}`));
                article.appendChild(createParagraph(`Part Number: ${number}`));
                article.appendChild(createParagraph(`Condition: ${partCondition}`));

                const editBtn = document.createElement('button');
                editBtn.className = 'edit-btn';
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', onEdit);

                const continueBtn = document.createElement('button');
                continueBtn.className = 'continue-btn';
                continueBtn.textContent = 'Continue';
                continueBtn.addEventListener('click', onContinue);

                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(continueBtn);
                infoList.appendChild(li);

                carModel.value = '';
                carYear.value = '';
                partName.value = '';
                partNumber.value = '';
                condition.value = '';
                nextBtn.disabled = true;

                completeImg.style.visibility = 'hidden';
                completeText.textContent = '';
        }

        function onEdit(event) {
                const li = event.target.parentElement;
                const paragraphs = Array.from(li.querySelectorAll('p'));

                carModel.value = paragraphs[0].textContent.split(': ')[1];
                carYear.value = paragraphs[1].textContent.split(': ')[1];
                partName.value = paragraphs[2].textContent.split(': ')[1];
                partNumber.value = paragraphs[3].textContent.split(': ')[1];
                condition.value = paragraphs[4].textContent.split(': ')[1];

                infoList.removeChild(li);
                nextBtn.disabled = false;
        }

        function onContinue(event) {
                const li = event.target.parentElement;
                const article = li.querySelector('article');

                const confirmLi = document.createElement('li');
                confirmLi.className = 'part-content';

                const confirmBtn = document.createElement('button');
                confirmBtn.className = 'confirm-btn';
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', onConfirm);

                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'cancel-btn';
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', onCancel);

                confirmLi.appendChild(article);
                confirmLi.appendChild(confirmBtn);
                confirmLi.appendChild(cancelBtn);

                infoList.removeChild(li);
                confirmList.appendChild(confirmLi);
        }

        function onConfirm(event) {
                confirmList.removeChild(event.target.parentElement);
                nextBtn.disabled = false;
                completeImg.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';
        }

        function onCancel(event) {
                confirmList.removeChild(event.target.parentElement);
                nextBtn.disabled = false;
        }

        function createParagraph(text) {
                const paragraph = document.createElement('p');
                paragraph.textContent = text;
                return paragraph;
        }
}