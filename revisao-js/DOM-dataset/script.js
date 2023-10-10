/*
Em HTML, os **atributos de dados personalizados** (custom data attributes) permitem aos desenvolvedores armazenar informações privadas associadas aos elementos HTML. 
Eles começam com "data-" seguido pelo nome do atributo personalizado. Esses atributos são úteis para armazenar dados adicionais em elementos HTML, acessíveis via JavaScript, sem serem visíveis para usuários ou motores de busca.
*/

const card1 = document.querySelector('[data-product-id="32"]')
console.log(card1);

