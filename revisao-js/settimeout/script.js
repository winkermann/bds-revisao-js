function dizerOla() {
  console.log("Ola");
}

function dizerBomDia(nome) {
  console.log(`Bom dia ${nome}`);
}

function dizerBoaTarde(nome) {
  console.log(`Boa tarde ${nome}`);
}

function dizerBoaNoite(nome) {
  console.log(`Boa noite ${nome}`);
}

// será executado após dois segundos;
// setTimeout(dizerOla, 2000)

/*
Ordem de impressão: 
1 - Bom dia Maria (1s)
2 - Boa tarde João (2s)
3 - Boa noite Ana (1s)
*/

setTimeout(() => {
  dizerBomDia("Maria");
  setTimeout(() => {
    dizerBoaTarde("Joao");
    setTimeout(() => {
      dizerBoaNoite("Ana");
    }, 1000);
  }, 2000);
}, 1000);
