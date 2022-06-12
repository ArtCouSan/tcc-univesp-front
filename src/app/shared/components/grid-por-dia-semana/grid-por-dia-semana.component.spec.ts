import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorDiaSemanaComponent } from './grid-por-dia-semana.component';

describe('GridPorDiaSemanaComponent', () => {
  let component: GridPorDiaSemanaComponent;
  let fixture: ComponentFixture<GridPorDiaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorDiaSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorDiaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
