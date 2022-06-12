import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorDiaComponent } from './grid-por-dia.component';

describe('GridPorDiaComponent', () => {
  let component: GridPorDiaComponent;
  let fixture: ComponentFixture<GridPorDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
