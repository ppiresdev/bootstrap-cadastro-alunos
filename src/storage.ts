/*Gravação e leitura na localStorage */

/*Argumento chave: é a chave para a qual ocorrerá o registro na localStorage. */
/*Argumento listaParaGravar: é a lista de objetos que será armazenada na localStorage */
const gravaNaLocalStorage = (
  chave: string,
  listaParaGravar: Array<Aluno>
): void => {
  localStorage.setItem(chave, JSON.stringify(listaParaGravar));
};

/*Argumento chave: é a chave que utilizaremos para buscar da localStorage*/
/*O retorno é um array com objetos, se a chave existir na localStorage. Caso não exista, será retornado [] */
const recuperaDaLocalStorage = (chave: string): Array<Aluno> => {
  return JSON.parse(localStorage.getItem(chave) as string) ?? [];
};

const insereObjetoNaLocalStorage = (chave: string, objeto: Aluno) => {
  const lista = recuperaDaLocalStorage(chave);
  lista.push(objeto);
  gravaNaLocalStorage(chave, lista);
};

/*Gravação e leitura na sessionStorage */
// const gravaNaSessionStorage = (chave: string, valor: string): void => {
//   sessionStorage.setItem(chave, JSON.stringify(valor));
// };

// const recuperaDaSessionStorage = (chave: string): string => {
//   return JSON.parse(sessionStorage.getItem(chave) as string) ?? "";
// };

// const limpaSessionStorage = (): void => {
//   sessionStorage.clear();
// };
