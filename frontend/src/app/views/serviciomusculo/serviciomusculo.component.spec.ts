import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciomusculoComponent } from './serviciomusculo.component';

describe('ServiciomusculoComponent', () => {
  let component: ServiciomusculoComponent;
  let fixture: ComponentFixture<ServiciomusculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciomusculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciomusculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
