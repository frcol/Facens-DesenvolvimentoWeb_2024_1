import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nomeApp: string = 'App do Angular';
  menu: string[] = ['Casa', 'Sobre', 'Contato'];
  index: number = 1;

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.',
  }

  constructor() {
    console.log('AppComponent: constructor');
  }

  onChangeImage() {
    this.index ++;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.card.description = form.value.descricao;
    console.log(this.card);
  }
}
