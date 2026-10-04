function solve() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const input = textareas[0];
    const output = textareas[1];
    const tbody = document.querySelector('tbody');

    buttons[0].addEventListener('click', onGenerate);
    buttons[1].addEventListener('click', onBuy);

    function onGenerate() {
      const items = JSON.parse(input.value);

      for (const item of items) {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.img;
        imgCell.appendChild(img);

        const nameCell = document.createElement('td');
        const nameP = document.createElement('p');
        nameP.textContent = item.name;
        nameCell.appendChild(nameP);

        const priceCell = document.createElement('td');
        const priceP = document.createElement('p');
        priceP.textContent = item.price;
        priceCell.appendChild(priceP);

        const decCell = document.createElement('td');
        const decP = document.createElement('p');
        decP.textContent = item.decFactor;
        decCell.appendChild(decP);

        const checkCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkCell.appendChild(checkbox);

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(decCell);
        row.appendChild(checkCell);
        tbody.appendChild(row);
      }
    }

    function onBuy() {
      const checked = document.querySelectorAll('input[type="checkbox"]:checked');
      const names = [];
      let total = 0;
      let decSum = 0;

      for (const checkbox of checked) {
        const row = checkbox.parentElement.parentElement;
        names.push(row.children[1].textContent);
        total += Number(row.children[2].textContent);
        decSum += Number(row.children[3].textContent);
      }

      output.value =
      `Bought furniture: ${names.join(', ')}\n` +
      `Total price: ${total.toFixed(2)}\n` +
      `Average decoration factor: ${decSum / names.length}`;
    }
}