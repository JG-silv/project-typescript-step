// src/catalogo.ts

type Produto = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  emEstoque: boolean;
};

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

// Classe genérica
class Catalogo<T> {
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

  buscarPorIndice(index: number): T | undefined {
    return this.items[index];
  }
}

// Catálogo de produtos
const produtos = new Catalogo<Produto>();
produtos.adicionar({ id: 1, nome: "Notebook", preco: 3500, categoria: "TI", emEstoque: true });
produtos.adicionar({ id: 2, nome: "Mouse", preco: 89, categoria: "TI", emEstoque: true });
produtos.adicionar({ id: 3, nome: "Cadeira", preco: 450, categoria: "Móvel", emEstoque: false });
produtos.adicionar({ id: 4, nome: "Teclado", preco: 199, categoria: "TI", emEstoque: true });
produtos.adicionar({ id: 5, nome: "Mesa", preco: 800, categoria: "Móvel", emEstoque: true });
produtos.adicionar({ id: 6, nome: "Monitor", preco: 1200, categoria: "TI", emEstoque: true });

// Filtrar por categoria
const ti = produtos.filtrar(p => p.categoria === "TI");
console.log("Produtos TI:", ti.map(p => p.nome));

// Ordenar por preço
const porPreco = [...produtos.listar()].sort((a, b) => a.preco - b.preco);
console.log("Por preço:", porPreco.map(p => `${p.nome}: R$ ${p.preco}`));

// Total dos disponíveis
const total = produtos.filtrar(p => p.emEstoque).reduce((soma, p) => soma + p.preco, 0);
console.log(`Total: R$ ${total}`);

// Catálogo de usuários
const usuarios = new Catalogo<Usuario>();
usuarios.adicionar({ id: 1, nome: "Ana", email: "ana@email.com" });
usuarios.adicionar({ id: 2, nome: "Bob", email: "bob@email.com" });

console.log("Usuários:", usuarios.listar().map(u => u.nome));