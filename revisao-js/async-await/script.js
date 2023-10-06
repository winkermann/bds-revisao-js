// async indica funções assíncronas em JavaScript, enquanto await é usado dentro dessas funções para pausar a execução até que operações assíncronas sejam concluídas, tornando o código mais claro e legível. (ChatGPT)

const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

//para fazer a imprensão de uma função assincrona é necessário resolver a promise da função, senão o resultado será "pendente"
getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
  .then(result => {
    console.log(result);
  });

