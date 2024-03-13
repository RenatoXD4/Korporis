import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioMotrizComponent } from './serviciomotriz.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServiciomotrizComponent', () => {
  let component: ServicioMotrizComponent;
  let fixture: ComponentFixture<ServicioMotrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioMotrizComponent],
      imports:[SharedModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioMotrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
