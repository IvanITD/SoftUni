function extract(content) {
    const text = document.getElementById(content).textContent;
    const withBrackets = text.match(/\(([^)]+)\)/g);
    const insides = [];
    for (const piece of withBrackets) {
        insides.push(piece.slice(1, -1));
    }
    const result = insides.join('; ');
    console.log(result);
    return result;
}
