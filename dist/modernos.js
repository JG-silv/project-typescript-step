"use strict";
// src/modernos.ts
var _a, _b, _c, _d;
var _e, _f;
const config = {
    tema: null,
    idioma: "pt-BR"
};
const temaUsado = (_e = config.tema) !== null && _e !== void 0 ? _e : "dark";
const idiomaUsado = (_f = config.idioma) !== null && _f !== void 0 ? _f : "en";
console.log(`Tema: ${temaUsado}`); // "dark" (null → usa padrão)
console.log(`Idioma: ${idiomaUsado}`); // "pt-BR" (não é null → mantém)
const empresaComFilial = {
    nome: "TechCorp",
    filial: {
        endereco: {
            cidade: "Rio de Janeiro"
        }
    }
};
const empresaSemFilial = {
    nome: "StartupSolo"
};
console.log((_b = (_a = empresaComFilial.filial) === null || _a === void 0 ? void 0 : _a.endereco) === null || _b === void 0 ? void 0 : _b.cidade); // "Rio de Janeiro"
console.log((_d = (_c = empresaSemFilial.filial) === null || _c === void 0 ? void 0 : _c.endereco) === null || _d === void 0 ? void 0 : _d.cidade); // undefined (sem erro)
function processarResultado(resultado) {
    switch (resultado.status) {
        case "carregando":
            console.log("Buscando dados...");
            break;
        case "sucesso":
            console.log(`${resultado.dados.length} itens encontrados`);
            break;
        case "erro":
            console.log(`Falha: ${resultado.erro}`);
            break;
    }
}
processarResultado({ status: "sucesso", dados: ["item1", "item2"] });
