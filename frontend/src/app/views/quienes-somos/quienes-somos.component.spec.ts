import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosComponent } from './quienes-somos.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('QuienesSomosComponent', () => {
  let component: QuienesSomosComponent;
  let fixture: ComponentFixture<QuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, QuienesSomosComponent],
})
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
