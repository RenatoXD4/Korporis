import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioneuroComponent } from './servicioneuro.component';

describe('ServicioneuroComponent', () => {
  let component: ServicioneuroComponent;
  let fixture: ComponentFixture<ServicioneuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioneuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioneuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
