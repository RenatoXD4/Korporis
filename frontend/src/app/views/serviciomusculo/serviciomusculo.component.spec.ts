import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioMusculoComponent } from './serviciomusculo.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServiciomusculoComponent', () => {
  let component: ServicioMusculoComponent;
  let fixture: ComponentFixture<ServicioMusculoComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ServicioMusculoComponent],
      imports: [SharedModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioMusculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
