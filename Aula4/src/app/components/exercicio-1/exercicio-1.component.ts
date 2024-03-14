import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import JSConfetti from "js-confetti";

@Component({
  selector: 'app-exercicio-1',
  templateUrl: './exercicio-1.component.html',
  styleUrl: './exercicio-1.component.css'
})

export class Exercicio1Component {
  media:number = 0;
  jsConfetti: JSConfetti = new JSConfetti();

  onSubmit(form: NgForm) {
    this.media = form.value.ac1*0.15 + form.value.ac2*0.30 + form.value.ag*0.3 + form.value.af*0.45;
    this.media.toFixed(2);
  }

  fireConfetti() {
    if (this.media > 5) {
      this.jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: [
            '#000', 'hotpink', 'gold'
        ],
        confettiNumber: 100,
        emojis: ['💜', '✨', '🎉', '🔥'],
        emojiSize: 100,
    })
    }
  }
}

