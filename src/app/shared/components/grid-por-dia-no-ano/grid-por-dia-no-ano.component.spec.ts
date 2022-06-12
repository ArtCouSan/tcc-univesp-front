import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorDiaNoAnoComponent } from './grid-por-dia-no-ano.component';

describe('GridPorDiaNoAnoComponent', () => {
  let component: GridPorDiaNoAnoComponent;
  let fixture: ComponentFixture<GridPorDiaNoAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorDiaNoAnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorDiaNoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
