import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça! Java', resumo: 'Use a Cabeça! Java é uma experiência de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com livros Deitel.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Readers familiar with Horstmanns original two-volume Core Java books, who are looking for a comprehensive yet condensed guide to all the new features and functions of Java SE 9, will learn how these features impact the language and core libraries.', autores: ['Cay Horstmann'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = (this.livros.length > 0) ? Math.max(...this.livros.map(l => l.codigo)) + 1
      : 1;
    livro.codigo = novoCodigo;

    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}