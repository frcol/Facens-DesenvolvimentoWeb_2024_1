import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Exercicio1Component } from './components/exercicio-1/exercicio-1.component';
import { Exercicio2Component } from './components/exercicio-2/exercicio-2.component';
import { Exercicio3Component } from './components/exercicio-3/exercicio-3.component';
import { Exercicio4Component } from './components/exercicio-4/exercicio-4.component';
import { TestsComponent } from './components/tests/tests.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    TestsComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
