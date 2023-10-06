// Representa o resultado assíncrono de uma operação e permite o tratamento de operações assíncronas de forma mais fácil e eficiente.

// Uma promessa (Promise) no JavaScript recebe uma função como argumento, que por sua vez recebe duas funções opcionais (g e h). Se g for chamada com um argumento P, a promessa é resolvida com o estado "fulfilled" e o valor P. Se h for chamada com um argumento Q, a promessa é rejeitada com o estado "rejected" e o valor Q. O método `then` executa uma função com o valor P quando a promessa é resolvida, enquanto o método `catch` executa uma função com o valor Q quando a promessa é rejeitada.

function f(g, h) {
  setTimeout(() => {
    if (10 < 0) {
      g("P");
    }
    else {
      h("Q");
    }
  }, 3000);
}

const minhaPromise = new Promise(f);

minhaPromise
  .then(valor => {
    console.log("Resolveu com o valor " + valor);
  })
  .catch(valor => {
    console.log("Rejeitada com o valor " + valor);
  });

console.log(minhaPromise);