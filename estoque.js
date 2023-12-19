let estoque = {
    'joao': [{ 'tipo': 'maca', 'quantidade': 1 }],
    'maria': [{ 'tipo': 'maca', 'quantidade': 2 }],
};

export function getEstoque() {
    return structuredClone(estoque);
}

export function transacaoNoEstoque(Origem, Destino, fruta, quantidade) {
    if (!estoque.joao) {
        estoque.joao = [{ 'tipo': fruta, 'quantidade': 0 }];
    }
    if (!estoque.maria) {
        estoque.maria = [{ 'tipo': fruta, 'quantidade': 0 }];
    }
    if (Origem === "pomar" && Destino !== "pomar") {
        dePomarParaPessoa(Destino, quantidade, fruta);
    }
    else if (Destino === "pomar") {
        dePomarParaPomar(Origem, quantidade, fruta);
    }
    else {
        dePessoaParaPessoa(Origem, Destino, quantidade, fruta);
    }
}

function dePomarParaPessoa(destino, quantidade, fruta) {
    const pessoa = estoque[destino];
    let monte = pessoa.find(item => item.tipo === fruta);
    if (!monte) {
        monte = { tipo: fruta, 'quantidade': 0 };
        pessoa.push(monte);
    }
    monte.quantidade += quantidade;
    monte.tipo = fruta;
}

function dePomarParaPomar(origem, quantidade, fruta) {
    const pessoa = estoque[origem];
    let monte;
    for (let i = 0; i < pessoa.length; i++) {
        if (pessoa[i].tipo === fruta) {
            monte = pessoa[i];
            break;
        }
    }
    if (!monte) {
        return;
    }
    monte.quantidade -= Math.min(quantidade, monte.quantidade);
}

export function limpaEstoque() {
    estoque = {};
};


