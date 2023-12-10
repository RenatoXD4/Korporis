import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEraComponent } from './servicio-era.component';

describe('ServicioEraComponent', () => {
  let component: ServicioEraComponent;
  let fixture: ComponentFixture<ServicioEraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioEraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioEraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
