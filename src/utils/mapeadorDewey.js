const categoriasParaDewey = {
    "000": { nome: "Obras Gerais",               cor: "#7A9E9F" },
    "100": { nome: "Filosofia e Psicologia",      cor: "#9B8EA0" },
    "200": { nome: "Religião",                    cor: "#C4A882" },
    "300": { nome: "Ciências Sociais",            cor: "#A3B18A" },
    "400": { nome: "Línguas",                     cor: "#9EBAC4" },
    "500": { nome: "Ciências",                    cor: "#D6CE93" },
    "600": { nome: "Tecnologia",                  cor: "#7A9F7A" },
    "700": { nome: "Artes",                       cor: "#E5D3B3" },
    "800": { nome: "Literatura",                  cor: "#A5A5A5" },
    "900": { nome: "História e Geografia",        cor: "#BC8F8F" }
};

const mapeamentoApi = {
    "Computers":      "000",
    "Philosophy":     "100",
    "Religion":       "200",
    "Social Sciences":"300",
    "Language":       "400",
    "Science":        "500",
    "Technology":     "600",
    "Arts":           "700",
    "Literature":     "800",
    "History":        "900"
};

export function identificarCategoria(categoriaApi) {
    if (!categoriaApi) return { codigo: "000", ...categoriasParaDewey["000"] };

    const chave = Object.keys(mapeamentoApi).find(key =>
        categoriaApi.toLowerCase().includes(key.toLowerCase())
    );

    const codigo = mapeamentoApi[chave] || "000";
    return { codigo, ...categoriasParaDewey[codigo] };
}

export function buscarCategoriaPorCodigo(codigo) {
    return categoriasParaDewey[codigo] || categoriasParaDewey["000"];
}