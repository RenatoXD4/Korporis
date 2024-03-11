import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciogeriaComponent } from './serviciogeria.component';

describe('ServiciogeriaComponent', () => {
  let component: ServiciogeriaComponent;
  let fixture: ComponentFixture<ServiciogeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciogeriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciogeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
