import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasoterapiaComponent } from './masoterapia.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('MasoterapiaComponent', () => {
  let component: MasoterapiaComponent;
  let fixture: ComponentFixture<MasoterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, MasoterapiaComponent],
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
