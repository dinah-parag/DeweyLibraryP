const categoriasParaDewey = {
    "000": { nome: "Obras Gerais", cor: "#708090" }, // Ardósia
    "100": { nome: "Filosofia e Psicologia", cor: "#B2AC88" }, // Sálvia
    "200": { nome: "Religião", cor: "#C2B280" }, // Areia
    "300": { nome: "Ciências Sociais", cor: "#A3B18A" }, // Verde Pastel Neutro
    "400": { nome: "Línguas", cor: "#9EBAC4" }, // Azul Acinzentado
    "500": { nome: "Ciências", cor: "#D6CE93" }, // Creme Escuro
    "600": { nome: "Tecnologia", cor: "#8E9B97" }, // Verde Musgo Pálido
    "700": { nome: "Artes", cor: "#E5D3B3" }, // Bege
    "800": { nome: "Literatura", cor: "#A5A5A5" }, // Cinza Neutro
    "900": { nome: "História e Geografia", cor: "#BC8F8F" } // Rosado Terroso (Neutro)
};

export function identificarCategoria(categoriaApi) {
    if (!categoriaApi) return { codigo: "000", ...categoriasParaDewey["000"] };

    // Lógica para pegar a primeira classe (centena) baseada na categoria
    const mapeamento = {
        "Computers": "000",
        "Philosophy": "100",
        "Religion": "200",
        "Social Sciences": "300",
        "Language": "400",
        "Science": "500",
        "Technology": "600",
        "Arts": "700",
        "Literature": "800",
        "History": "900"
    };

    const chave = Object.keys(mapeamento).find(key => 
        categoriaApi.toLowerCase().includes(key.toLowerCase())
    );

    const codigo = mapeamento[chave] || "000";
    return { codigo, ...categoriasParaDewey[codigo] };
}