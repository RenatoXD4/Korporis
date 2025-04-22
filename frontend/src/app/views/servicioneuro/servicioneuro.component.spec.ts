import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioneuroComponent } from './servicioneuro.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('ServicioneuroComponent', () => {
  let component: ServicioneuroComponent;
  let fixture: ComponentFixture<ServicioneuroComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
    imports: [SharedModule, ServicioneuroComponent],
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
