// src/generics.ts
export {};
// --- Função genérica ---
function pegarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}

const primeiroNome = pegarPrimeiro(["Ana", "João"]);
const primeiroNum = pegarPrimeiro([10, 20, 30]);
console.log(primeiroNome.toUpperCase()); // "ANA"
console.log(primeiroNum * 2);            // 20

// --- Restrição com extends ---
function logComprimento<T extends { length: number }>(item: T): void {
  console.log(`Comprimento: ${item.length}`);
}

logComprimento("Hello");
logComprimento([1, 2, 3]);

// --- Interface genérica ---
interface RespostaAPI<T> {
  dados: T;
  status: number;
  mensagem: string;
}

type Usuario = { id: number; nome: string };

const resposta: RespostaAPI<Usuario[]> = {
  dados: [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bob" }],
  status: 200,
  mensagem: "Sucesso"
};

console.log(`${resposta.dados.length} usuários encontrados`);

// --- Classe genérica ---
class Repository<T> {
  private items: T[] = [];

  adicionar(item: T): void {
    this.items.push(item);
  }

  listar(): T[] {
    return [...this.items];
  }

  filtrar(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

type Produto = { id: number; nome: string; preco: number };

const repo = new Repository<Produto>();
repo.adicionar({ id: 1, nome: "Notebook", preco: 3500 });
repo.adicionar({ id: 2, nome: "Mouse", preco: 89 });

const baratos = repo.filtrar(p => p.preco < 200);
console.log("Baratos:", baratos.map(p => p.nome));