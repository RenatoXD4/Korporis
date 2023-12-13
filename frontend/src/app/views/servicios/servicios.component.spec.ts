import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComponent } from './servicios.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServiciosComponent', () => {
  let component: ServiciosComponent;
  let fixture: ComponentFixture<ServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ServiciosComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

