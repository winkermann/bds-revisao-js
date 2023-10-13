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
  state.inputCep.addEventListener('change', handleInputCepChange)
  state.btnClear.addEventListener('click', handleBtnClearClick)


  
  console.log(state);
}

function handleInputNumberChange(event) {
  if (event.target.value == "" || event.target.value == " ") {
    setFormError("number", "Campo obrigatório")
  } else {
    setFormError("number", "")
  }
}

function handleInputCepChange(event) {
  if (event.target.value == "" || event.target.value == " ") {
    setFormError("cep", "Campo obrigatório")
  } else {
    setFormError("cep", "")
  }
}


function handleBtnClearClick(event) {
  event.preventDefault();
  clearForm();
}

const clearForm = () => {
  // state.inputCep.value = "";
  // state.inputStreet.value = "";
  // state.inputNumber.value = "";
  // state.inputCity.value = "";

  // https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
  const form = document.getElementsByName('newAddress')[0];
  form.reset();
  
  setFormError("cep", "");
  setFormError("number", "");

  state.inputCep.focus();

}

function setFormError(key, value) {
  const element = document.querySelector(`[data-error="${key}"]`);
  element.innerHTML = value;
}