import { transacaoNoEstoque, getEstoque, limpaEstoque } from "./estoque.js";

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");
const remove = document.querySelector("#Limpar")
remove.addEventListener('click', limparEstoque);

atualizaTela();

function atualizaTela() {
    const estoque = getEstoque();
    preencheListaPessoa(estoque['joao'], olJoao);
    preencheListaPessoa(estoque['maria'], olMaria);
}

function preencheListaPessoa(pessoa, lista) {
    lista.innerHTML = "";
    for (let i = 0; i < pessoa.length; i++) {
        const monte = pessoa[i];
        const eLi = document.createElement('li');
        eLi.innerText = `${monte.tipo}: ${monte.quantidade}`;
        lista.append(eLi);
    }
}

function limparEstoque() {
    limpaEstoque();
    const estoque = getEstoque();
    preencheListaPessoa(estoque['joao'], olJoao);
    preencheListaPessoa(estoque['maria'], olMaria);
}
