function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let words = input.split(' ');
  let pascalWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  if (currentCase === 'Pascal Case') {
    document.getElementById('result').textContent = pascalWords.join('');
  } else if (currentCase === 'Camel Case') {
    pascalWords[0] = pascalWords[0].toLowerCase();
    document.getElementById('result').textContent = pascalWords.join('');
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}