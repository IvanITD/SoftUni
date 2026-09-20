function fromJSONToHTMLTable(input) {
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    const data = JSON.parse(Array.isArray(input) ? input[0] : input);
    const keys = Object.keys(data[0]);
    let html = '<table>\n';
    html += '<tr>';
    for (const key of keys) {
        html += `<th>${escapeHtml(key)}</th>`;
    }
    html += '</tr>\n';
    for (const row of data) {
        html += '<tr>';
        for (const key of keys) {
            html += `<td>${escapeHtml(row[key])}</td>`;
        }
        html += '</tr>\n';
    }
    html += '</table>\n';
    return html;
}
console.log(fromJSONToHTMLTable('[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]'));