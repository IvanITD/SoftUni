function addItem() {
    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }

    const item = document.createElement('li');
    item.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', onDelete);
    item.appendChild(deleteBtn); 

    function onDelete(event) {
        event.target.parentElement.remove();
    }

    const list = document.getElementById('items');
    list.appendChild(item);

    input.value = '';
}