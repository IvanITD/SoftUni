function extractText() {
    const list = document.getElementById('items');
    const box = document.getElementById('result');
    const items = document.querySelectorAll('#items li');
    let texts = [];
    for (let item of items) {
        texts.push(item.textContent);
    }

    document.getElementById('result').value = texts.join('\n');
    return texts.join('\n');
}