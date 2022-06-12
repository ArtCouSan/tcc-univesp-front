import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItinerariosComponent } from './grid-itinerarios.component';

describe('GridItinerariosComponent', () => {
  let component: GridItinerariosComponent;
  let fixture: ComponentFixture<GridItinerariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridItinerariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItinerariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
