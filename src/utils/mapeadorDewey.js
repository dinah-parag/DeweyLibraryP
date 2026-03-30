const categoriasParaDewey = {
    "000": { nome: "Obras Gerais",            cor: "#9B9EC4" },
    "100": { nome: "Filosofia e Psicologia",  cor: "#B8A8C8" },
    "200": { nome: "Religião",                cor: "#C4ABBE" },
    "300": { nome: "Ciências Sociais",        cor: "#A8BEC4" },
    "400": { nome: "Línguas",                 cor: "#A8C4D4" },
    "500": { nome: "Ciências",                cor: "#C8D4A8" },
    "600": { nome: "Tecnologia",              cor: "#A8C4B8" },
    "700": { nome: "Artes",                   cor: "#C4C8D8" },
    "800": { nome: "Literatura",              cor: "#B4A8C4" },
    "900": { nome: "História e Geografia",    cor: "#C4B8C8" }
};

const mapeamentoApi = {
    "Computers":       "000",
    "Philosophy":      "100",
    "Religion":        "200",
    "Social Sciences": "300",
    "Language":        "400",
    "Science":         "500",
    "Technology":      "600",
    "Arts":            "700",
    "Literature":      "800",
    "History":         "900"
};

// Recebe qualquer código CDD (ex: "869.1", "005.13") e retorna a classe principal
export function identificarClassePrincipal(cdd) {
    if (!cdd) return "000";
    const numero = parseFloat(cdd);
    if (isNaN(numero)) return "000";
    const classe = Math.floor(numero / 100) * 100;
    const chave = String(classe).padStart(3, '0');
    return categoriasParaDewey[chave] ? chave : "000";
}

export function identificarCategoria(categoriaApi) {
    if (!categoriaApi) return { codigo: "000", ...categoriasParaDewey["000"] };

    const chave = Object.keys(mapeamentoApi).find(key =>
        categoriaApi.toLowerCase().includes(key.toLowerCase())
    );

    const codigo = mapeamentoApi[chave] || "000";
    return { codigo, ...categoriasParaDewey[codigo] };
}

export function buscarCategoriaPorCodigo(cdd) {
    const classePrincipal = identificarClassePrincipal(cdd);
    return { ...categoriasParaDewey[classePrincipal], classePrincipal };
}