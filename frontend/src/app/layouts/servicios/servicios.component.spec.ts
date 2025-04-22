import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTodosComponent } from './serviciosTodos.component';  // Asegúrate de importar tu componente
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar el módulo que contiene tu componente

describe('ServiciosTodosComponent', () => {
  let component: ServiciosTodosComponent;
  let fixture: ComponentFixture<ServiciosTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SharedModule, ServiciosTodosComponent] // Importa el módulo que contiene tu componente
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
