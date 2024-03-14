import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercicio-4',
  templateUrl: './exercicio-4.component.html',
  styleUrl: './exercicio-4.component.css'
})
export class Exercicio4Component {
  valorApolice: number =0;

  onSubmit(form: NgForm) {
    let valor = Number(form.value.valor);

    if (form.value.sexo === 'Masculino') {
      if (form.value.idade <= 25) {
        this.valorApolice = valor * 0.15;
      }
      else {
        this.valorApolice = valor * 0.10;
      }
    }
    else {
      this.valorApolice = valor * 0.08;
    }

    form.reset();
  }
}
