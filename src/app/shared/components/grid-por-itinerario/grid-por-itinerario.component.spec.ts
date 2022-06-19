import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPorItinerarioComponent } from './grid-por-itinerario.component';

describe('GridPorItinerarioComponent', () => {
  let component: GridPorItinerarioComponent;
  let fixture: ComponentFixture<GridPorItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPorItinerarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPorItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
