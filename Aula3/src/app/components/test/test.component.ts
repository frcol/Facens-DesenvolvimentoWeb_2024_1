import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {
  titulo: string = "Meu App";
  descricao: string = "Descrição do meu app";
  index: number = 1;
  minhaVariavel: string = "Valor inicial";

  objImg = {
    alt: "A imagem nao apareceu"
  }

  onClick(msg: string) {
    this.index++;
  }
}
