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