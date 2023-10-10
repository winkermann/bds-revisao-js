### Este repositório tem como objetivo facilitar a revisão dos fundamentos essenciais do JavaScript
Resumo feito baseado no curso de nivelamento do DevSuperior, **[referência](https://github.com/devsuperior/curso-nivelamento-javascript/tree/main)**

Alguns trechos foram escritos com auxílio do ChatGPT.
## Tópicos básicos
#### _Tipos de dados_
 - number
 - string
 - boolean
 - object
 - array (object)
 - null (object)
 - undefined
 
### _var / let / const_
Palavra chave | Orientação
--- | ---
var | não recomendado, pois “vaza escopo” em estrutura de controle
let | use quando realmente houver necessidade de alterar a variável
const | prefira valores imutáveis

### _String_
Em JavaScript, uma **string** é um tipo de dado que representa uma sequência de caracteres. As strings são usadas para armazenar e manipular texto em JavaScript. Elas podem ser criadas usando aspas simples (`'`) ou duplas (`"`) e até mesmo acento grave (crase) em caso de _template strings_.

### _Operadores_
Operadores aritméticos
```
+ soma
- subtração
* multiplicação
/ divisão
% módulo
** exponenciação (ES2016)
```
Operadores comparativos
```
< menor que
> maior que 
<= menor ou igual 
>= maior ou igual
------------------
Converte para um tipo em comum, depois compara:
== 
!=

Compara levando em conta também o tipo:
=== 
!== 

object: compara referência
string, number, boolean: compara valor
```
Operadores lógicos
```
&& (E)
|| (OU)
! (NÃO)
```
### _Estruturas de controle_
**Condicional (if-else)**
```javascript
if (condicao) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa (opcional)
}
```
**Loops (for, while, do-while)**
_For_
```javascript
for (let i = 0; i < 5; i++) {
    // código a ser executado em cada iteração
}
```
While
```javascript
while (condicao) {
    // código a ser executado enquanto a condição for verdadeira
}
```
_Do-while_
```javascript
do {
    // código a ser executado pelo menos uma vez, mesmo se a condição for falsa
} while (condicao);
```
**Switch**: Uma alternativa ao if-else quando há várias condições diferentes a serem testadas.
```javascript
switch (expressao) {
    case valor1:
        // código a ser executado se expressao for igual a valor1
        break;
    case valor2:
        // código a ser executado se expressao for igual a valor2
        break;
    default:
        // código a ser executado se nenhum dos casos for correspondido
}
```
### _Array_
Um **array** é uma estrutura de dados que permite armazenar vários valores em uma única variável. Os valores dentro de um array podem ser de qualquer tipo de dado, incluindo números, strings, objetos e até mesmo outras arrays, formando estruturas de dados complexas.
```javascript
let meuArray = [1, 2, 3, 4, 5];
```
### _JSON_
JSON (JavaScript Object Notation) é um formato de dados independente de linguagem de programação, usado para troca de dados. Ele consiste em pares de chave-valor e pode representar números, strings, booleanos, objetos, arrays ou `null`. Utilizado para transmitir dados entre servidores e clientes, o JSON oferece uma alternativa leve e fácil de ler ao XML. Em JavaScript, as funções `JSON.parse()` e `JSON.stringify()` são usadas para converter entre objetos JavaScript e strings JSON.
### _Função e arrow function_
Função é um bloco de código reutilizável que pode ser chamado pelo nome para executar uma ou mais ações. 
```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // bloco de código da função
    // pode incluir operações, declarações, etc.
    // a função pode retornar um valor usando a palavra-chave 'return'
    return resultado;
}
```
Uma **arrow function** (função de seta) é uma forma mais concisa de escrever funções em JavaScript. Ela foi introduzida no ECMAScript 6 (ES6) e oferece uma sintaxe mais curta e fácil de entender em comparação com as funções tradicionais.
Aqui está a sintaxe básica de uma arrow function:
```javascript
const dobrar = (num) => num * 2;
```
### _Função de alta ordem_
Funções de Alta Ordem são aquelas funções onde um ou mais parâmetros são compostos por outras funções, ou seja: uma função que recebe como argumento outra função.
Referência: [freeCodeCamp](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/)
### _Desestruturação_
É uma técnica que permite extrair dados de objetos e arrays de forma rápida e simples, atribuindo esses dados a variáveis individuais. Isso torna o código mais conciso e legível, facilitando o acesso e manipulação de dados em estruturas complexas.
```javascript
const pessoa = { nome: 'João', idade: 30 };
const { nome, idade } = pessoa;
console.log(nome);  // Saída: João
console.log(idade); // Saída: 30
```
Nesse exemplo, as propriedades `nome` e `idade` do objeto `pessoa` foram extraídas e atribuídas a variáveis com os mesmos nomes.
### _Rest e spread_
**Rest:** Permite empacotar múltiplos elementos em um array. É usado em parâmetros de função para capturar argumentos restantes em um array.
```javascript
function minhaFuncao(parametro1, parametro2, ...restoDosParametros) {
    // restoDosParametros é um array contendo os argumentos restantes
}
```
**Spread:** Permite espalhar elementos de um array ou propriedades de um objeto em outro array ou objeto. É usado para criar cópias rápidas ou combinar dados.
```javascript
const arrayOriginal = [1, 2, 3];
const novoArray = [...arrayOriginal, 4, 5]; // [1, 2, 3, 4, 5]

const objetoOriginal = { chave1: 'valor1', chave2: 'valor2' };
const novoObjeto = { ...objetoOriginal, chave3: 'valor3' };
```
Em resumo, **Rest** empacota elementos, enquanto **Spread** espalha elementos, ambos sendo úteis para manipulação eficiente de dados em JavaScript.
## Objetos e módulos
### _Funções construtoras e Prototype_
Uma **função construtora em JavaScript** é uma função que serve como um modelo para criar objetos. Ela é usada junto com a palavra-chave `new` para instanciar novos objetos com propriedades e métodos definidos na função. Funções construtoras permitem criar múltiplos objetos com as mesmas características de maneira eficiente

Depois do ES6 (2015), a estrutura dos objetos podem ser definida por classes.
Boa prática: defina propriedades dentro do construtor, e métodos no prototype.

**new**
Objetos são instanciados por meio da chamada do construtor com a palavra chave  `new`.

**this**
A palavra chave  `this`  é uma referência para o próprio objeto.
Serve para acessar membros (propriedades e funções) do próprio objeto, ou então para referenciar o objeto de uma forma geral.
Mesmo que não haja ambiguidade, é necessário usar o  `this`  para acessar um membro do objeto.

**propriedade constructor**
Maneira prática de se verificar o construtor de um objeto.

**prototype de uma função**
No JavaScript, **`prototype`** é um mecanismo de herança que permite adicionar novas propriedades e métodos aos objetos existentes. Ele é compartilhado entre objetos, economizando memória e permitindo a criação de estruturas dinâmicas e eficientes. É essencial para a programação orientada a objetos em JavaScript.
### _Classes_
**Classes em JavaScript** são uma forma introduzida no ES6 de criar objetos e organizar código de maneira orientada a objetos. Elas permitem definir propriedades e métodos para um tipo específico de objeto, criando instâncias a partir dessa definição. Classes oferecem uma sintaxe mais clara e organizada para a programação orientada a objetos em JavaScript, facilitando a criação e manutenção de código.
```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa('João', 30);
// Chamando o método da classe
pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 30 anos.
```
### _Módulos_
**Módulos no JavaScript** são uma forma de organizar o código em arquivos separados, facilitando a reutilização e a manutenção. Eles permitem que variáveis, funções e classes sejam encapsuladas e exportadas para serem usadas em outros arquivos usando a palavra-chave `export`. Além disso, você pode importar esses elementos em outros arquivos usando a palavra-chave `import`, melhorando a modularidade e a organização do código JavaScript. Módulos ajudam a evitar poluição do escopo global e promovem a estruturação limpa e modular de projetos.

Imagine que você tem dois arquivos: `modulo.js` e `index.js`.

**`modulo.js` (arquivo do módulo):**

```javascript
// modulo.js
export const saudacao = nome => {
    return `Olá, ${nome}! Bem-vindo ao nosso módulo!`;
};
export const soma = (a, b) => {
    return a + b;
};
```
Neste arquivo, estamos exportando duas funções: `saudacao` e `soma`.

**`index.js` (arquivo principal):**

```javascript
// index.js
import { saudacao, soma } from './modulo';
console.log(saudacao('João')); // Saída: Olá, João! Bem-vindo ao nosso módulo!
console.log(soma(2, 3)); // Saída: 5
```
Neste arquivo, estamos importando as funções `saudacao` e `soma` do arquivo `modulo.js`. Assim, podemos usar essas funções no arquivo principal `index.js`.
## JavaScript assíncrono
### _setTimeOut_

A função `setTimeout` no JavaScript é usada para agendar a execução de uma função após um certo período de tempo especificado em milissegundos. Ela permite que você crie atrasos na execução do código, permitindo a execução de tarefas assíncronas em momentos específicos.
**Atraso na Execução de uma Função:**
```javascript
function saudacao() {
    console.log("Olá, mundo!");
}
setTimeout(saudacao, 2000); // Saída após 2 segundos: Olá, mundo!
```
 **Execução Única com Parâmetros:**
```javascript
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
setTimeout(saudacao, 1000, "Alice"); // Saída após 1 segundo: Olá, Alice! 
```
**Atraso em uma Expressão de Função Anônima:**
```javascript
setTimeout(function() {
    console.log("Esta função será executada após 3 segundos.");
}, 3000);
```
**Usando Arrow Function:**
```javascript
setTimeout(() => {
    console.log("Esta função será executada após 2 segundos usando uma arrow function.");
}, 2000);
```
**Cancelando um `setTimeout` com `clearTimeout`:**
```javascript
const timeoutId = setTimeout(() => {
    console.log("Esta função não será executada, pois o clearTimeout foi chamado antes.");
}, 5000);
clearTimeout(timeoutId); // O `setTimeout` será cancelado e a função não será executada.
``` 
### _Promisses_
**Promises (Promessas)** em JavaScript são objetos que representam o eventual resultado de uma operação assíncrona. Elas são usadas para tratamento de operações assíncronas, como requisições AJAX ou leituras de arquivos, e ajudam a evitar o uso excessivo de callbacks aninhados. As Promises podem estar em um dos três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected). Você pode encadear operações com Promises usando `.then()` para lidar com o sucesso e `.catch()` para lidar com falhas, tornando o código assíncrono mais fácil de ler e entender.
```javascript
const minhaPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona (por exemplo, uma requisição AJAX)
    setTimeout(() => {
        const sucesso = true; // Simulando um resultado bem-sucedido
        if (sucesso) {
            resolve("Operação bem-sucedida!"); // Se for bem-sucedida, chamamos 'resolve'
        } else {
            reject("Erro na operação!"); // Se falhar, chamamos 'reject'
        }
    }, 2000); // Esta operação levará 2 segundos para completar
});

// Usando a Promise
minhaPromise
    .then(resultado => {
        console.log(resultado); // Saída: Operação bem-sucedida!
    })
    .catch(erro => {
        console.error(erro); // Saída em caso de erro: Erro na operação!
});
```
Neste exemplo, `minhaPromise` representa uma operação assíncrona que será concluída após 2 segundos. Se for bem-sucedida, chamamos a função `resolve` com uma mensagem de sucesso. Se falhar, chamamos a função `reject` com uma mensagem de erro. Usamos `.then()` para lidar com o sucesso e `.catch()` para lidar com falhas na Promise.
### _Fetch API_
A `Fetch API` em JavaScript é uma interface moderna para fazer requisições de rede (como buscar recursos da web) de forma assíncrona. Ela fornece uma maneira mais poderosa e flexível de trabalhar com recursos na web do que as técnicas mais antigas, como XMLHttpRequest.

A principal vantagem da `Fetch API` é sua simplicidade e a forma como trabalha com Promises, permitindo um código mais limpo e fácil de ler. Ela usa Promises para lidar com respostas de rede, o que torna o código assíncrono mais fácil de compreender e manter.

Aqui está um exemplo básico de como usar a `Fetch API` para fazer uma requisição GET a uma URL:

```javascript
const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  .then((response) => {
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    json
      .then((response) => {
        console.log("SUCESSO NO JSON", response);
      })
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });

console.log("A");
console.log("B");
```
Neste exemplo, `fetch` retorna uma Promise que resolve para o objeto `Response` representando a resposta da requisição. Você pode então usar `.then()` para manipular a resposta, e `.catch()` para lidar com erros de rede.
### _Async await_
`Async/Await` em JavaScript é uma maneira de escrever código assíncrono de forma mais síncrona e legível. É uma funcionalidade introduzida no ECMAScript 2017 (ES8) que funciona em cima das Promises, tornando mais fácil escrever código assíncrono que parece e se comporta de maneira similar ao código síncrono.

-   **`async` Function:**
    
    -   A palavra-chave `async` é usada para declarar uma função assíncrona. Uma função marcada como `async` sempre retorna uma Promise, mesmo que você não retorne explicitamente uma Promise dentro da função.
    
``` javascript    
async function minhaFuncao() {
    // código assíncrono aqui
}
```
    
-   **`await` Keyword:**
    
    -   Dentro de uma função `async`, você pode usar a palavra-chave `await` para esperar que uma Promise seja resolvida antes de continuar a execução do código. O `await` pausa a execução da função até que a Promise seja resolvida e retorna o valor resolvido da Promise.
    
```javascript  
async function exemplo() {
    let resultado = await algumaFuncaoAssincrona();
    console.log(resultado);
}
```
O uso de `async/await` simplifica o código assíncrono, tornando-o mais claro e fácil de entender, especialmente quando você precisa lidar com múltiplas operações assíncronas em sequência. Em vez de encadear várias Promises usando `.then()`, você pode escrever código assíncrono de forma quase síncrona, o que melhora significativamente a legibilidade do código.

## Introdução à manipulação de DOM
### _Seleção de elementos_
A **seleção de elementos** em JavaScript é o processo de escolher elementos HTML em uma página da web para manipulá-los dinamicamente.
**Por ID:** Você pode selecionar um elemento usando seu ID exclusivo. Por exemplo:
```javascript  
var meuElemento = document.getElementById('meu-id');
```
 **Por Classe:** Você pode selecionar elementos por sua classe usando `getElementsByClassName` ou `querySelectorAll`. Por exemplo:
    
```javascript
var elementosPorClasse = document.getElementsByClassName('minha-classe');
var elementosPorClasse = document.querySelectorAll('.minha-classe');
```
    
**Por Tag:** Você pode selecionar elementos por sua tag usando `getElementsByTagName`. Por exemplo:
```javascript
var elementosPorTag = document.getElementsByTagName('div');
```
**Por Seletor CSS:** Você pode usar `querySelector` para selecionar elementos usando seletores CSS. Por exemplo:
```javascript
var meuElemento = document.querySelector('#meu-id');
var meuElemento = document.querySelector('.minha-classe');
```
### _Dataset_
Em HTML, os **atributos de dados personalizados** (custom data attributes) permitem aos desenvolvedores armazenar informações privadas associadas aos elementos HTML. 
Eles começam com "data-" seguido pelo nome do atributo personalizado. Esses atributos são úteis para armazenar dados adicionais em elementos HTML, acessíveis via JavaScript, sem serem visíveis para usuários ou motores de busca.
```html
<div  class="card"  data-product-id="32">
	<p>Card 1</p>
</div>
<div  class="card"  data-product-id="45">
	<p>Card 2</p>
</div>
```
### _Eventos UI_ 
Em JavaScript, eventos são ações ou ocorrências que acontecem no navegador do usuário, como cliques do mouse, pressionamentos de teclas, carregamento de uma página, submissões de formulários, entre outros. A linguagem JavaScript permite que você crie interatividade em páginas da web respondendo a esses eventos.
Ao usar eventos, você pode desencadear a execução de funções ou scripts específicos quando o usuário interage com elementos na página, como botões, links, formulários, etc. Isso permite criar páginas web dinâmicas e responsivas.
Aqui está um exemplo simples de como você pode usar eventos em JavaScript:
```javascript
// Obtém uma referência para o elemento de botão no HTML
var meuBotao = document.getElementById('meu-botao');

// Adiciona um evento de clique ao botão
meuBotao.addEventListener('click', function() {
    alert('Botão clicado!');
});
```
Neste exemplo, o código JavaScript está esperando até que o botão com o ID 'meu-botao' seja clicado. Quando o botão é clicado, a função de alerta é acionada, exibindo uma caixa de diálogo com o texto "Botão clicado!".

[JavaScript HTML DOM Events exermplos](https://www.w3schools.com/js/js_events_examples.asp)