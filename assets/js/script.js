/*
Case Sensitive =  reconhece letrar maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por Nome: getElemtnByName()
por Classe: getElementByClassName()\
por Seletor: querySelector()
*/
let form = document.getElementById("form");
let nomeInput = document.getElementById("nomeInput");
let erroNome = document.getElementById("erroNome");
let mensagemInput = document.getElementById("mensagemInput");
let erroMensagem = document.getElementById("erroMensagem");
let emailInput = document.getElementById("emailInput");
let erroEmail = document.getElementById("erroEmail");
let mapa = document.querySelector("#mapa");

function enviar(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    let isNomeValid = validarNome();
    let isEmailValid = validarEmail();
    let isMensagemValid = validarMensagem();

    console.log(data)

    if(isEmailValid, isNomeValid, isMensagemValid){
        alert("Dados enviados!")

    }

}

function validarNome(nome) {
    if (nome == null) {
        nome = nomeInput.value;
    }
    if (nome.length <= 2) {
        erroNome.style.display = "inherit"
        erroNome.innerHTML = "O nome precisa ter pelo menos 3 caracteres"
        erroNome.style.color = 'red'
        return false;
    } else {
        erroNome.style.display = "none";
        return true;
    }
}


function validarMensagem(mensagem) {
    if (mensagem == null) {
        mensagem = mensagemInput.value;
    }
    if (mensagem.length < 10) {
        erroMensagem.style.display = "inherit"
        erroMensagem.innerHTML = "A mensagem  precisa ter pelo menos 10 caracteres"
        erroMensagem.style.color = 'red'
        return false;
    } else {
        erroMensagem.style.display = "none";
        return true;
    }
}


function validarEmail(email){
    if (email == null) {
        email = emailInput.value;
    }

    let erro = false;
    let mensagensErro = "";

    if(email.includes("@") === false){
        mensagensErro += "<p>O email precisa ter um @</p>";
        erro = true;
    }
    if(email.includes(".") === false){
        mensagensErro += "<p>O email precisa ter um .</p>";
        erro = true;
    }

    if(erro){
        erroEmail.style.display = "inherit";
        erroEmail.innerHTML = mensagensErro;
        return false;
    } else {
        erroEmail.style.display = "none";
        erroEmail.innerHTML = "";
        return true;
    }
}


function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.width = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.width = '250px'
}
