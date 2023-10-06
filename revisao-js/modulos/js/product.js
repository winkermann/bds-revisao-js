// São importantes para dividir o código de um projeto em módulos/componentes reaproveitáveis.
// Facilita a manutenção e o encapsulamento do código.

export default class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }

  add(amount) {
    this.quantity += amount;
  }

  remove(amount) {
    if (this.quantity >= amount) {
      this.quantity -= amount;
    }
  }

  label() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
  }
}
