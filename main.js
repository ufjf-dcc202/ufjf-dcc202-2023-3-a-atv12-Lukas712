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
    if (pessoa) {
        for (let i = 0; i < pessoa.length; i++) {
            const monte = pessoa[i];
            const eLi = document.createElement('li');
            eLi.innerText = `${monte.tipo}: ${monte.quantidade}`;
            lista.append(eLi);
        }
    }
}

function limparEstoque() {
    limpaEstoque();
    const estoque = getEstoque();
    preencheListaPessoa(estoque['joao'], olJoao);
    preencheListaPessoa(estoque['maria'], olMaria);
    
}

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = Number(document.entrada.quantidade.value);
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`Solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();

    transacaoNoEstoque(origem, destino, fruta, quantidade);
    atualizaTela();

}