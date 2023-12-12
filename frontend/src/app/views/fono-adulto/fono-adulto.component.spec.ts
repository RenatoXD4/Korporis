import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoAdultoComponent } from './fono-adulto.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('FonoAdultoComponent', () => {
  let component: FonoAdultoComponent;
  let fixture: ComponentFixture<FonoAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FonoAdultoComponent],
      imports: [SharedModule],
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
