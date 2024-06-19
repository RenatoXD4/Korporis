import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoPelvicoComponent } from './piso-pelvico.component';

describe('PisoPelvicoComponent', () => {
  let component: PisoPelvicoComponent;
  let fixture: ComponentFixture<PisoPelvicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PisoPelvicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PisoPelvicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
