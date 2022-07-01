const btnCadastrarEl = document.getElementById("btnCadastrar");

let indiceParaExcluir = 0;

const criaLinha = (aluno: Aluno) => {
  const novaLinha = document.createElement("tr");

  novaLinha.classList.add("align-middle");
  novaLinha.innerHTML = `
        <td data-title="#" class="text-center">${aluno.id}</td>
        <td data-title="Nome">${aluno.nome}</td>
        <td data-title="Sobrenome">${aluno.sobrenome}</td>
        <td data-title="Idade">${aluno.idade}</td>
        <td data-title="Ações" class="text-center">


        <button
        type="button"
        class="button red"
        data-bs-toggle="modal"
        data-bs-target="#excluirModal"
        onclick="preparaExclusao(${aluno.id})"
        >
          Excluir
        </button>
       
      </td>
      `;

  document.querySelector("#tabelaRecados>tbody")?.appendChild(novaLinha);
};

const geraLinhasTabela = () => {
  const listaAlunos = recuperaDaLocalStorage("alunos");
  listaAlunos.forEach(criaLinha);
};

const preparaExclusao = (indice: number) => {
  indiceParaExcluir = indice;
};

const posicaoAlunoNaLista = (id: number) => {
  const listaAlunos = recuperaDaLocalStorage("alunos");
  const posicaoAlunoNaLista = listaAlunos.findIndex((aluno) => aluno.id === id);
  return posicaoAlunoNaLista;
};

const excluirAluno = () => apagaAluno(indiceParaExcluir);

const apagaAluno = (indice: number) => {
  const listaAlunos = recuperaDaLocalStorage("alunos");

  const posicaoAlunoLista = posicaoAlunoNaLista(indice);

  if (posicaoAlunoLista >= 0) {
    listaAlunos.splice(posicaoAlunoLista, 1);

    gravaNaLocalStorage("alunos", listaAlunos);
  }
  atualizaTabelaNaTela();
};

const excluiTodasLinhasTabela = () => {
  const linhas = document.querySelectorAll("#tabelaRecados>tbody tr");
  linhas.forEach((linha) => linha.parentNode?.removeChild(linha));
};

const atualizaTabelaNaTela = () => {
  excluiTodasLinhasTabela();
  geraLinhasTabela();
};

btnCadastrarEl?.addEventListener("click", () => {
  document.location.href = "./index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  atualizaTabelaNaTela();
});
