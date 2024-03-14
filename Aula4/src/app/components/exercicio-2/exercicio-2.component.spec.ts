import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio2Component } from './exercicio-2.component';

describe('Exercicio2Component', () => {
  let component: Exercicio2Component;
  let fixture: ComponentFixture<Exercicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
