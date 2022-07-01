"use strict";
const inputUsuario = document.getElementById("inputNome");
const inputSobreNome = document.getElementById("inputSobreNome");
const inputIdade = document.getElementById("inputIdade");
const btnEntrarEl = document.getElementById("btnEntrar");
const btnListaEl = document.getElementById("btnListar");
const definirID = () => {
    // guardar o maior ID encontrado na lista de produtos
    let max = 0;
    // recupera a lista de produtos do localStorage
    const cadastro = recuperaDaLocalStorage("alunos");
    // percorre a lista de produtos para atualizar e obter o maior
    cadastro.forEach((cad) => {
        if (cad.id > max) {
            max = cad.id;
        }
    });
    return max;
};
const cadastrarAluno = (evento) => {
    evento.preventDefault();
    const nomeValido = validaInput(inputUsuario);
    const sobreNomeValida = validaInput(inputSobreNome);
    const idadeValida = validaInput(inputIdade);
    const camposPreenchidos = nomeValido && sobreNomeValida && idadeValida;
    const nome = inputUsuario.value;
    const sobrenome = inputSobreNome.value;
    const idade = inputIdade.value;
    exibeMsgsPreenchimentoNome(inputUsuario);
    exibeMsgsPreenchimentoSobreNome(inputSobreNome);
    exibeMsgsPreenchimentoIdade(inputIdade);
    if (camposPreenchidos) {
        const listaAlunos = recuperaDaLocalStorage("alunos");
        const objAluno = {
            id: definirID() + 1,
            nome: nome,
            sobrenome: sobrenome,
            idade: Number(idade),
        };
        listaAlunos.push(objAluno);
        gravaNaLocalStorage("alunos", listaAlunos);
        limparInput(inputUsuario);
        limparInput(inputSobreNome);
        limparInput(inputIdade);
    }
};
btnEntrarEl.addEventListener("click", cadastrarAluno);
btnListaEl.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "./exibeAlunos.html";
});
