import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio3Component } from './exercicio-3.component';

describe('Exercicio3Component', () => {
  let component: Exercicio3Component;
  let fixture: ComponentFixture<Exercicio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
