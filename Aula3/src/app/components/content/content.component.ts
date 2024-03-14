import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  index:number;

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.'
  }

  constructor() {
    this.index = 1;
  }

  onSubmit(form: NgForm) {
    this.card.description = form.value.desc;
  }

  onChangeImage() {
    this.index++;
  }
}
