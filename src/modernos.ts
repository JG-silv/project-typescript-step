// src/modernos.ts

// --- Nullish Coalescing ---
type Configuracoes = {
  tema: string | null;
  idioma: string | null;
};

const config: Configuracoes = {
  tema: null,
  idioma: "pt-BR"
};

const temaUsado = config.tema ?? "dark";
const idiomaUsado = config.idioma ?? "en";

console.log(`Tema: ${temaUsado}`);   // "dark" (null → usa padrão)
console.log(`Idioma: ${idiomaUsado}`); // "pt-BR" (não é null → mantém)

// --- Optional Chaining ---
type Empresa = {
  nome: string;
  filial?: {
    endereco?: {
      cidade?: string;
    };
  };
};

const empresaComFilial: Empresa = {
  nome: "TechCorp",
  filial: {
    endereco: {
      cidade: "Rio de Janeiro"
    }
  }
};

const empresaSemFilial: Empresa = {
  nome: "StartupSolo"
};

console.log(empresaComFilial.filial?.endereco?.cidade); // "Rio de Janeiro"
console.log(empresaSemFilial.filial?.endereco?.cidade); // undefined (sem erro)

// --- Discriminated Union ---
type ResultadoAPI =
  | { status: "carregando" }
  | { status: "sucesso"; dados: string[] }
  | { status: "erro"; erro: string };

function processarResultado(resultado: ResultadoAPI): void {
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