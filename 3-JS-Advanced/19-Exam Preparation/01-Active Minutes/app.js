window.addEventListener("load", solve);

function solve() {
  const typeInput = document.getElementById('type');
  const intensityInput = document.getElementById('intensity');
  const caloriesInput = document.getElementById('calories');
  const durationInput = document.getElementById('duration');
  const dateInput = document.getElementById('date');
  const addButton = document.getElementById('add-activity');
  const previewList = document.getElementById('preview-activity');
  const tableBody = document.getElementById('activities-table');

  addButton.addEventListener('click', onAdd);
  
  function onAdd() {
    const type = typeInput.value;
    const intensity = intensityInput.value;
    const calories = caloriesInput.value;
    const duration = durationInput.value;
    const date = dateInput.value;

    if (type === '' || intensity === '' || calories === '' || duration === '' || date === '') {
      return;
    }

    const li = document.createElement('li');
    const article = document.createElement('article');

    article.appendChild(createParagraph(`Activity: ${type}`));
    article.appendChild(createParagraph(`Intensity: ${intensity}`));
    article.appendChild(createParagraph(`Duration: ${duration} min.`));
    article.appendChild(createParagraph(`Date: ${date}`));
    article.appendChild(createParagraph(`Calories: ${calories}`));

    const buttons = document.createElement('div');
    buttons.className = 'btn-container';

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => onEdit(li, type, intensity, calories, duration, date));

    const nextButton = document.createElement('button');
    nextButton.className = 'next-btn';
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => onNext(li, type, intensity, calories, duration, date));

    buttons.appendChild(editButton);
    buttons.appendChild(nextButton);
    li.appendChild(article);
    li.appendChild(buttons);
    previewList.appendChild(li);

    typeInput.value = '';
    intensityInput.value = '';
    caloriesInput.value = '';
    durationInput.value = '';
    dateInput.value = '';
    addButton.disabled = true;
  }

  function onEdit(li, type, intensity, calories, duration, date) {
    typeInput.value = type;
    intensityInput.value = intensity;
    caloriesInput.value = calories;
    durationInput.value = duration;
    dateInput.value = date;

    previewList.removeChild(li);
    addButton.disabled = false;
  }

  function onNext(li, type, intensity, calories, duration, date) {
    const row = document.createElement('tr');

    row.appendChild(createCell('type-cell', type));
    row.appendChild(createCell('duration-cell', duration));
    row.appendChild(createCell('calories-cell', calories));
    row.appendChild(createCell('date-cell', date));
    row.appendChild(createCell('intensity-cell', intensity));

    const actionCell = document.createElement('td');
    actionCell.className = 'btn-cell';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tableBody.removeChild(row);
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);

    previewList.removeChild(li);
    addButton.disabled = false;
  }

  function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }

  function createCell(className, text) {
    const cell = document.createElement('td');
    cell.className = className;
    cell.textContent = text;
    return cell;
  }
}