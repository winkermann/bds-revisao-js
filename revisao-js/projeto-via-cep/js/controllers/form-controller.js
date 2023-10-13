//responsável por controlar o formulário

import Address from "../models/address.js";

//função construtora. Será responsável por guardar as informações relevantes do módulo form-controller.
function State() {
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
  state.inputCep = document.forms.newAddress.cep; 
  state.inputStreet = document.forms.newAddress.street; 
  state.inputNumber = document.forms.newAddress.number; 
  state.inputCity = document.forms.newAddress.city; 

  state.btnSave = document.forms.newAddress.btnSave;
  state.btnClear = document.forms.newAddress.btnClear;
  
  state.errorCep = document.querySelector('[data-error="cep"]');
  state.errorNumber = document.querySelector('[data-error="number"]');

  state.inputNumber.addEventListener('change', handleInputNumberChange)
  
  console.log(state);
}

function handleInputNumberChange(event) {
  if (event.target.value == "" || event.target.value == " ") {
    setFormError("number", "Campo obrigatório")
  } else {
    setFormError("number", "")
  }
}

function setFormError(key, value) {
  const element = document.querySelector(`[data-error="${key}"]`);
  element.innerHTML = value;
}