// São importantes para dividir o código de um projeto em módulos/componentes reaproveitáveis.
// Facilita a manutenção e o encapsulamento do código.

import { sum, round } from "./number.js"
import Product from "./product.js";

console.log(sum(3,2));
console.log(round(2.3456, 2));

const p1 =  new Product("Computador", 3000, 12)

console.log(p1);