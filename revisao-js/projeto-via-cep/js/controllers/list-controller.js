function State() {
  this.listSection = null;
}

const state = new State();

export function init() {
  state.listSection = document.querySelector("#list-section");
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}

function createCard(address) {
  const div = document.createElement("div");
  div.classList.add("card-list-item");
  
  const h3 = document.createElement("h3");
  h3.innerHTML = address.city;

  const addressLine = document.createElement("p");
  addressLine.classList.add("address-line");
  addressLine.innerHTML = `${address.street}, ${address.number}`;

  const addressCep = document.createElement("p");
  addressCep.classList.add("address-cep");
  addressCep.innerHTML = address.cep;

  div.appendChild(h3);
  div.appendChild(addressLine);
  div.appendChild(addressCep);

  return div;
}