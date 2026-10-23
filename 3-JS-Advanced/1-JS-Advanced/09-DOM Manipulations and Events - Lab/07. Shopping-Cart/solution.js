function solve() {
   const textarea = document.querySelector('textarea');
   const bought = [];
   let total = 0;

   const addButtons = document.querySelectorAll('.add-product');
   for (const button of addButtons) {
      button.addEventListener('click', onAdd);
   }

   function onAdd(event) {
      const product = event.target.parentElement.parentElement;
      const name = product.querySelector('.product-title').textContent;
      const price = Number(product.querySelector('.product-line-price').textContent);

      if (!bought.includes(name)) {
         bought.push(name);
      }
      total += price;
      textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   document.querySelector('.checkout').addEventListener('click', onCheckout);

   function onCheckout() {
      textarea.value += `You bought ${bought.join(', ')} for ${total.toFixed(2)}.`;
      for (const button of document.querySelectorAll('button')) {
         button.disabled = true;
      }
   }
}