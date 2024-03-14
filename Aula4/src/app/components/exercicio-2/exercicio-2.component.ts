import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-exercicio-2',
  templateUrl: './exercicio-2.component.html',
  styleUrl: './exercicio-2.component.css',
})
export class Exercicio2Component {
  result: number = 0;
  strResult = this.result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  onSubmit(form: NgForm, operacao: string) {
    let n1 = Number(form.value.n1);
    let n2 = Number(form.value.n2);

    switch (operacao) {
      case '+':
        this.result = n1 + n2;
        break;
      case '-':
        this.result = n1 - n2;
        break;
      case '*':
        this.result = n1 * n2;
        break;
      case '/':
        this.result = n1 / n2;
        break;
    }

    this.strResult = this.result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
