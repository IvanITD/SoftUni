function storeProvision(localStoreStock, orderedStoreProducts) {
  class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
    print() {
      console.log(`${this.name} -> ${this.quantity}`);
    }
    add(quantity) {
      this.quantity += quantity;
    }
    subtract(quantity) {
      this.quantity -= quantity;
    }
  }
  let localStore = [];
  for (let i = 0; i < localStoreStock.length; i += 2) {
    localStore.push(new Product(localStoreStock[i], Number(localStoreStock[i + 1])));
  }
  for (let i = 0; i < orderedStoreProducts.length; i += 2) {
    let product = localStore.find((p) => p.name === orderedStoreProducts[i]);
    if (product) {
      product.add(Number(orderedStoreProducts[i + 1]));
    } else {
      localStore.push(
        new Product(orderedStoreProducts[i], Number(orderedStoreProducts[i + 1])));
    }
  }
  for (let product of localStore) {
    product.print();
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"],
);
console.log("--------------------------------");
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"],
);
