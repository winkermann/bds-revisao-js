const item1 = document.querySelector("li")
const items = document.querySelectorAll("li")
const card1 = document.querySelector(".card")

console.log(item1)
console.log(items)
console.log(card1)
console.log("");

console.log("- imprimir conteudo do elemento html:")
console.log(item1.innerHTML);
console.log("- imprimir o elemento html:")
console.log(item1.outerHTML);
console.log("");

//criando um elemento p (parágrafo)
const paragraph = document.createElement("p");
//insere no elemento p o texto "descrição"
paragraph.innerHTML= "Descrição";
//insere o elemento p, um filho, dentro da div
card1.appendChild(paragraph);

//mudar/acrescentar um estilo, classe css, através de seletores
card1.classList.add("super-border")

//OBS: Nodelist/HTMLcollection não são arrays, são considerados "array like". Para utlizar métodos de array como o map, por exemplo, é nescessário fazer o cast 

//Converter para array

console.log("Metodo map convertendo um nodelist para array")
Array.from(items).map(item => {
    console.log(item)
})
console.log("");

/*
Também é possível converser um nodelist utilizando spread (...)
[...items].map(item => {
    console.log(item)
})
*/

//- - - - - EM DESUSO - - - - -
const item2 = document.getElementById("item2");
const cards = document.getElementsByClassName("card")
const cards2 = document.getElementsByTagName("div")

console.log("- - - - - EM DESUSO - - - - -")
console.log(item2)
console.log(cards)
console.log(cards2)
