import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIRAComponent } from './servicio-ira.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServicioIRAComponent', () => {
  let component: ServicioIRAComponent;
  let fixture: ComponentFixture<ServicioIRAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, ServicioIRAComponent],
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioIRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
