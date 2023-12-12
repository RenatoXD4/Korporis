import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoAdultoComponent } from './fono-adulto.component';

describe('FonoAdultoComponent', () => {
  let component: FonoAdultoComponent;
  let fixture: ComponentFixture<FonoAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonoAdultoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonoAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
