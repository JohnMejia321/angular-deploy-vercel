import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteCompradoComponent } from './ingrediente-comprado.component';

describe('IngredienteCompradoComponent', () => {
  let component: IngredienteCompradoComponent;
  let fixture: ComponentFixture<IngredienteCompradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredienteCompradoComponent]
    });
    fixture = TestBed.createComponent(IngredienteCompradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
