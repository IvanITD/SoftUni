function search() {
   let query = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');

   for (let town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   }

   let matches = 0;
   for (let town of towns) {
      if (town.textContent.includes(query)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = matches + ' matches found';
}
