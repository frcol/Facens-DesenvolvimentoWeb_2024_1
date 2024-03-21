import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    let meuParametro = this.router.snapshot.params['param1'];
    console.log(meuParametro);
  }
}
