function solve() {
    let selectTo = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectTo.appendChild(binaryOption);

    let hexOption = document.createElement('option');

    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    selectTo.appendChild(hexOption);

    let button = document.querySelector('button');
    button.addEventListener('click', convertNumber);

    function convertNumber() {
        let number = Number(document.getElementById('input').value);
        let result = '';
        
        if (selectTo.value === 'binary') {
            result = number.toString(2);
            document.getElementById('result').value = result;
        } else if (selectTo.value === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
            document.getElementById('result').value = result;
        }
    }
}