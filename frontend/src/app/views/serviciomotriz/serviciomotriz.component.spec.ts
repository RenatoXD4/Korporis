import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciomotrizComponent } from './serviciomotriz.component';

describe('ServiciomotrizComponent', () => {
  let component: ServiciomotrizComponent;
  let fixture: ComponentFixture<ServiciomotrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciomotrizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciomotrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
