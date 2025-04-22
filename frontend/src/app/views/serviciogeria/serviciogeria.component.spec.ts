import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciogeriaComponent } from './serviciogeria.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServiciogeriaComponent', () => {
  let component: ServiciogeriaComponent;
  let fixture: ComponentFixture<ServiciogeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, ServiciogeriaComponent]
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
