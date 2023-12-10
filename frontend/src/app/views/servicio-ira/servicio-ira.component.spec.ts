import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIRAComponent } from './servicio-ira.component';

describe('ServicioIRAComponent', () => {
  let component: ServicioIRAComponent;
  let fixture: ComponentFixture<ServicioIRAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioIRAComponent]
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
