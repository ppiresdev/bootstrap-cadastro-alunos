"use strict";
const msgInputNomeEl = document.getElementsByClassName("msgInputUsuario");
const msgInputSobreNomeEl = document.getElementsByClassName("msgInputSobreNome");
const msgInputIdadeEl = document.getElementsByClassName("msgInputIdade");
// interface Usuario {
//   email: string;
//   senha: string;
//   recados: Array<Recado>;
// }
// interface objMsgsErro {
//   nomeVazio: string;
//   sobreNomeVazio: string;
//   idadeVazia: string;
// }
//Objeto com todas as mensagens de erro usadas na aplicação
const objMsgsErro = {
    nomeVazio: "Digite seu nome",
    sobreNomeVazio: "Digite seu sobrenome",
    idadeVazia: "Digite sua idade",
};
const inputVazio = (inputEl) => {
    if (inputEl.value === "") {
        return true;
    }
    return false;
};
const validaInput = (inputEl) => {
    const inputPreenchido = !inputVazio(inputEl);
    return inputPreenchido;
};
const limparInput = (inputEl) => {
    inputEl.value = "";
};
const exibeMsgsPreenchimentoNome = (inputUsuario) => {
    const nomeVazio = inputVazio(inputUsuario);
    const msgUsuario = msgInputNomeEl[0];
    //const emailPreenchidoDeFormaCorreta = !nomeVazio;
    //Usuário deixou campo vazio
    if (nomeVazio) {
        msgUsuario.innerHTML = objMsgsErro.nomeVazio;
        msgUsuario.classList.add("msg_exibir");
        return;
    }
    if (!nomeVazio) {
        msgUsuario.innerHTML = "";
        msgUsuario.classList.remove("msg_exibir");
        return;
    }
};
const exibeMsgsPreenchimentoSobreNome = (inputSobreNome) => {
    const sobreNomeVazio = inputVazio(inputSobreNome);
    const msgUsuario = msgInputSobreNomeEl[0];
    //const emailPreenchidoDeFormaCorreta = !emailVazio;
    //Usuário deixou campo vazio
    if (sobreNomeVazio) {
        msgUsuario.innerHTML = objMsgsErro.sobreNomeVazio;
        msgUsuario.classList.add("msg_exibir");
        return;
    }
    if (!sobreNomeVazio) {
        msgUsuario.innerHTML = "";
        msgUsuario.classList.remove("msg_exibir");
        return;
    }
};
const exibeMsgsPreenchimentoIdade = (inputIdade) => {
    const idadeVazia = inputVazio(inputIdade);
    const msgSenha = msgInputIdadeEl[0];
    const senhaPreenchidaDeFormaCorreta = !idadeVazia;
    //Usuário não digitou algo no campo senha
    if (idadeVazia) {
        msgSenha.innerHTML = objMsgsErro.idadeVazia;
        msgSenha.classList.add("msg_exibir");
        return;
    }
    if (!idadeVazia) {
        msgSenha.innerHTML = "";
        msgSenha.classList.remove("msg_exibir");
        return;
    }
};
// const exibeMsgsPreenchimentoSenha = (inputSenha: HTMLInputElement) => {
//   const senhaVazia = inputVazio(inputSenha);
//   // const senhaNosPadroes = campoPreenchidoSegundoPadrao(inputSenha, padraoSenha);
//   const msgSenha = msgInputSenhaEl[0];
//   const senhaPreenchidaDeFormaCorreta = !senhaVazia;
//   //Usuário não digitou algo no campo senha
//   if (senhaVazia) {
//     msgSenha.innerHTML = objMsgsErro.senhaVazia;
//     msgSenha.classList.add("msg_exibir");
//     return;
//   }
// };
// const ocultaMsgErroUsuarioInexistente = () => {
//   const msgUsuarioInexistente = msgUsuarioEl[0];
//   msgUsuarioInexistente.innerHTML = "";
//   msgUsuarioInexistente.classList.remove("msg_exibir");
// };
// const exibeMsgErroUsuarioInexistente = () => {
//   const msgUsuarioInexistente = msgUsuarioEl[0];
//   msgUsuarioInexistente.innerHTML = objMsgsErro.usuarioInexistente;
//   msgUsuarioInexistente.classList.add("msg_exibir");
// };
// const ocultaMsgErroUsuarioRepetido = () => {
//   const msgUsuarioInexistente = msgUsuarioEl[0];
//   msgUsuarioInexistente.innerHTML = "";
//   msgUsuarioInexistente.classList.remove("msg_exibir");
// };
// const exibeMsgErroUsuarioRepetido = () => {
//   const msgUsuarioInexistente = msgUsuarioEl[0];
//   msgUsuarioInexistente.innerHTML = objMsgsErro.usuarioRepetido;
//   msgUsuarioInexistente.classList.add("msg_exibir");
// };
