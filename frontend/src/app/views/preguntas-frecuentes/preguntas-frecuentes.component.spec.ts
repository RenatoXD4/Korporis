import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';

describe('PreguntasFrecuentesComponent', () => {
  let component: PreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, PreguntasFrecuentesComponent],
});
    fixture = TestBed.createComponent(PreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
