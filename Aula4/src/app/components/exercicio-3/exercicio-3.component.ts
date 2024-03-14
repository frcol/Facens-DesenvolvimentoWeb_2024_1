import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from './aluno';

@Component({
  selector: 'app-exercicio-3',
  templateUrl: './exercicio-3.component.html',
  styleUrl: './exercicio-3.component.css',
})
export class Exercicio3Component {
  alunos: Aluno[] = [];

  onSubmit(form: NgForm) {
    console.log(form.value);

    let aluno = new Aluno(form.value.id, form.value.nome, form.value.email, form.value.idade);
    this.alunos.push(aluno);

    form.reset();
  }
}
