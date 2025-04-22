import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoInfantilComponent } from './fono-infantil.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('FonoInfantilComponent', () => {
  let component: FonoInfantilComponent;
  let fixture: ComponentFixture<FonoInfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, FonoInfantilComponent],
})
    .compileComponents();
    
    fixture = TestBed.createComponent(FonoInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
