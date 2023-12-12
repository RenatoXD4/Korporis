import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEraComponent } from './servicio-era.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServicioEraComponent', () => {
  let component: ServicioEraComponent;
  let fixture: ComponentFixture<ServicioEraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioEraComponent],
      imports: [SharedModule],
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
