import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css',
})

export class ListaTarefasComponent {
  tarefas: Tarefa[];

  constructor() {
    this.tarefas = [
      new Tarefa(1, 'Estudar 1', 'Estudar Angular', false),
      new Tarefa(2, 'Ler Artigo', 'livro', true),
      new Tarefa(3, 'Exercicio', 'Fazer exercícios', false),
      new Tarefa(4, 'Estudar 2', 'Estudar Angular', false),
      new Tarefa(5, 'Ler Livro', 'Ler livro', true),
    ];

    this.ordenaTarefas();
  }

  alteraTarefa(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;

    this.ordenaTarefas();
  }

  ordenaTarefas() {
    this.tarefas.sort((a, b) => {
      // Ordenar por concluído (tarefas concluídas primeiro)
      if (a.concluida && !b.concluida) {
        return 1; // Se a é concluído e b não é, a deve vir depois de b.
      } else if (!a.concluida && b.concluida) {
        return -1; // Se a não é concluído e b é, a deve vir antes de b.
      } else {
        // Se ambos são concluídos ou ambos não são concluídos, ordene por título.
        if (a.titulo > b.titulo) {
          return 1; // Se a é maior que b, a deve vir depois de b.
        } else if (a.titulo < b.titulo) {
          return -1; // Se a é menor que b, a deve vir antes de b.
        } else {
          return 0; // Se os títulos são iguais, mantenha a ordem atual.
        }
      }
    });
  }
}
