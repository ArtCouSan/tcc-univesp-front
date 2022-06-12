import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorDiaSemanaDividoAnoMesComponent } from './grid-por-dia-semana-divido-ano-mes.component';

describe('GridPorDiaSemanaDividoAnoMesComponent', () => {
  let component: GridPorDiaSemanaDividoAnoMesComponent;
  let fixture: ComponentFixture<GridPorDiaSemanaDividoAnoMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorDiaSemanaDividoAnoMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorDiaSemanaDividoAnoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
