/*
Em JavaScript, eventos são ações do usuário, como cliques ou pressionamentos de tecla, que acontecem em um navegador. Eles permitem que você crie interatividade em páginas da web, desencadeando funções específicas quando o usuário interage com elementos da página, como botões ou links. 
Eventos ajudam a tornar as páginas web dinâmicas e responsivas.
*/
const inputName = document.forms.cadastro.name;
const inputEmail = document.forms.cadastro.email;
const btnSubmit = document.querySelector('[type="submit"]');

inputName.addEventListener('keyup', handleInputNameKeyUp);

inputEmail.addEventListener('change', handleInputEmailChange)

btnSubmit.addEventListener('click', handleBtnSubmitClick)


function handleInputNameKeyUp(event) {
    console.log(event.target.value)
}

function handleInputEmailChange(event) {
    if(validateEmail(event.target.value)) {
        console.log("Email validado")
        event.target.classList.remove("input-error")
    } else {
        event.target.classList.add("input-error")
    }
}

function handleBtnSubmitClick(event) {
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`)

}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }