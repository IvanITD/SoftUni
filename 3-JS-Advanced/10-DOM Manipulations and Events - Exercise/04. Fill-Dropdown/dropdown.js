function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = textInput.value;
    option.value = valueInput.value;

    menu.appendChild(option);

    textInput.value = '';
    valueInput.value = '';
}