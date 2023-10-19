//responsável por controlar o formulário

import Address from "../models/address.js";
import * as addressService from '../services/address-service.js'
import * as listController from './list-controller.js';

//função construtora. Será responsável por guardar as informações relevantes do módulo form-controller.
function State() {
  //Address é uma instancia de objeto que possui os atributos cep, rua, numero e cidade; 
  this.address = new Address();

  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State()

export function init() {
  //recupera os campos do html
  state.inputCep = document.forms.newAddress.cep; 
  state.inputStreet = document.forms.newAddress.street; 
  state.inputNumber = document.forms.newAddress.number; 
  state.inputCity = document.forms.newAddress.city; 

  state.btnSave = document.forms.newAddress.btnSave;
  state.btnClear = document.forms.newAddress.btnClear;
  
  state.errorCep = document.querySelector('[data-error="cep"]');
  state.errorNumber = document.querySelector('[data-error="number"]');

  //listeners que manipulam o formulário
  state.inputNumber.addEventListener('change', handleInputNumberChange);
  state.inputNumber.addEventListener('change', handleInputNumberKeyup);
  state.inputCep.addEventListener('change', handleInputCepChange);
  state.btnClear.addEventListener('click', handleBtnClearClick);
  state.btnSave.addEventListener('click', handleBtnSaveClick);

}

// função para salvar as informações
function handleBtnSaveClick(event) {
  event.preventDefault();

  const errors = addressService.getErrors(state.address);
  // transforma o objeto errors em um array para percorrer os valores
  const keys = Object.keys(errors)

  // se o array keys for > 0 é porque encontrou um erro.
  if (keys.length > 0) {

    keys.forEach(key => {
      setFormError(key, errors[key]);
    })

    // for (let i = 0; i < keys.length; i++) {
    //   setFormError(keys[i], errors[keys[i]]);
    // }

  // caso contrário será criado o card com o endereço 
  } else {
    listController.addCard(state.address);
    clearForm();
  }


}

//valida se o campo numero foi preenchido corretamente
function handleInputNumberChange(event) {
  if (event.target.value == "" || event.target.value == " ") {
    setFormError("number", "Campo obrigatório")
  } else {
    setFormError("number", "")
  }
}

//pega o valor do campo número para posteriormente inserir no list
function handleInputNumberKeyup(event) {
  state.address.number = event.target.value;
}

//função assincrona que pega o valor do cep
async function handleInputCepChange(event) {
  const cep = event.target.value;

  // tenta recuperar as informações de cidade e rua pela requisição (vide arquivo ../services/address-service.js)
  try {
    const address = await addressService.findByCep(cep);

    state.inputCity.value = address.city;
    state.inputStreet.value = address.street;
    state.address = address;

    setFormError("cep", "");
    state.inputNumber.focus();
  } 
  // em caso de erro no preenchimento do cep será acusado erro (informe um cep valido) e os campos de rua e cidade ficarão em branco 
  catch (e) {
    setFormError("cep", "Informe um CEP válido")
    state.inputStreet.value = "";
    state.inputCity.value = "";
  }
} 

//função acionada ao clicar no botão que limpa o formulário
function handleBtnClearClick(event) {
  event.preventDefault();
  //chama a função clear form 
  clearForm();
}

//função que limpa o formulário.
const clearForm = () => {
  // seta os valores dos inputs para "" deixando-os em branco.
  // state.inputCep.value = "";
  // state.inputStreet.value = "";
  // state.inputNumber.value = "";
  // state.inputCity.value = "";


  // metodo que limpa todos os campos do formulário, ref:
  // https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
  const form = document.getElementsByName('newAddress')[0];
  form.reset();
  
  // limpa os avisos de erro do formulário.
  setFormError("cep", "");
  setFormError("number", "");

  // cria um novo objeto para limpar as informações
  state.address = new Address();

  // retoma o cursor para o campo do CEP;
  state.inputCep.focus();

}

function setFormError(key, value) {
  const element = document.querySelector(`[data-error="${key}"]`);
  element.innerHTML = value;
}