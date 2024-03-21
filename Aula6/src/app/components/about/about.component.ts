import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {

  constructor(private router: Router) { }

  onSubmit(myForm:NgForm) {
    if (myForm.value.secret === "facens") {
      this.router.navigate(['/secret']);
    }
  }
}
