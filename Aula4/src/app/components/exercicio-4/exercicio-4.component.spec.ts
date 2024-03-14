import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio4Component } from './exercicio-4.component';

describe('Exercicio4Component', () => {
  let component: Exercicio4Component;
  let fixture: ComponentFixture<Exercicio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
