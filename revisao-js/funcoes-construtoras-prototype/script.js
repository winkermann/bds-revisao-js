// Cria um único objeto
const p1 = {
  name: "Computador",
  price: 3000.0,
  quantity: 2,
}

// Função construtora. 
// Funções construtoras instanciam objetos com uma estrutura pré-definida
const Product = function (name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Cira um método para recuperar o valor total
Product.prototype.total = function () {
  return this.price * this.quantity;
}

// Cria um método para adicionar quantidades a um produto
Product.prototype.add = function (amount) {
  return this.quantity += amount;
}

// Cria um método para remover quantidade de um produto
Product.prototype.remove = function (amount) {
  // verifica se existem itens suficientes para serem removidos
  if(this.quantity >= amount) {
    return this.quantity -= amount;
  }
}

// Cria um método para recuperar info sobre os produtos
Product.prototype.label = function () {
  return "Dados: " + this.name + ", R$" + this.price.toFixed(2);
}

const p2 = new Product("Monitor", 800.0, 10);
const p3 = new Product("Mouse", 55.0, 8);
