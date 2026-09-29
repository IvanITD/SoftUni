function solve() {
  let textAreaRef = document.getElementById('input');
  let output = document.getElementById('output');

  let text = textAreaRef.value;

  let textArr = text.split(".").filter(e => e !== " " && !!e);

  for (let i = 0; i < textArr.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {
      if (!textArr[i + x]) {
        break;
      }
      res.push(textArr[i + x]);
    }
    let buff = res.join(". ") + ".";
    output.innerHTML += `<p>${buff.trim()}</p>`;
  }
}