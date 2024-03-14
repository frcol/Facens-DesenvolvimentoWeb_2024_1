import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  appName:String;
  menu:string[];

  constructor() {
    this.appName = 'My App';
    this.menu = ['Casa', 'Sobre', 'Contato'];
  }
}

