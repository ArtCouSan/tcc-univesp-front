import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorHorarioComponent } from './grid-por-horario.component';

describe('GridPorHorarioComponent', () => {
  let component: GridPorHorarioComponent;
  let fixture: ComponentFixture<GridPorHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
