import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirPlatoComponent } from './pedir-plato.component';

describe('PedirPlatoComponent', () => {
  let component: PedirPlatoComponent;
  let fixture: ComponentFixture<PedirPlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedirPlatoComponent]
    });
    fixture = TestBed.createComponent(PedirPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
