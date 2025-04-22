import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosComponent } from './precios.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('PreciosComponent', () => {
  let component: PreciosComponent;
  let fixture: ComponentFixture<PreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, PreciosComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
