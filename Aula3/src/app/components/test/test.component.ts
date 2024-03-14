import { Component } from '@angular/core';

import { Aluno } from './Aluno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {
  lstAlunos: Aluno[];

  constructor() {
    this.lstAlunos = [];
  }

  onSubmit(form: NgForm) {
    let idade: number = Number(form.value.idade);
    let alu1: Aluno = new Aluno(form.value.nome, idade, "123456");
    this.lstAlunos.push(alu1);
    form.resetForm();
  }
}
