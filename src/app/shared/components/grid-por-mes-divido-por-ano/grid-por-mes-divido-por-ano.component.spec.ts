import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorMesDividoPorAnoComponent } from './grid-por-mes-divido-por-ano.component';

describe('GridPorMesDividoPorAnoComponent', () => {
  let component: GridPorMesDividoPorAnoComponent;
  let fixture: ComponentFixture<GridPorMesDividoPorAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorMesDividoPorAnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorMesDividoPorAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
