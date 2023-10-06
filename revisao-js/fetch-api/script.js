// `fetch` é uma função usada para fazer requisições de rede assíncronas, permitindo recuperar dados de APIs ou servidores. Ele utiliza Promises para facilitar o tratamento de operações assíncronas e é amplamente utilizado para requisições HTTP em navegadores modernos. (ChatGPT)

/*
- .then = se der certo a requisição
- .catch = se der errado a requisição (como se fosse tratamento de exceção)
*/

const cep = "01001000";

// recebe a url da api de ceps
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  // pega a resposta do fetch
  .then((response) => {
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    // recupera os dados da api no formato JSON
    json
      .then((response) => {
        console.log("SUCESSO NO JSON", response);
      })
      // erro na recuperação de dados do json
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  // erro na resposta do fetch
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });

// imprime primeiro, antes do resultado da requisição fetch, porque é executado de form síncrona
console.log("A");
console.log("B");
