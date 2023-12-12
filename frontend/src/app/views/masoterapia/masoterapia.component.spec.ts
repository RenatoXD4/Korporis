import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasoterapiaComponent } from './masoterapia.component';

describe('MasoterapiaComponent', () => {
  let component: MasoterapiaComponent;
  let fixture: ComponentFixture<MasoterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasoterapiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
