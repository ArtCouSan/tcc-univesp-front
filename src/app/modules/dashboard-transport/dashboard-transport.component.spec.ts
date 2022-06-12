import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransportComponent } from './dashboard-transport.component';

describe('DashboardTransportComponent', () => {
  let component: DashboardTransportComponent;
  let fixture: ComponentFixture<DashboardTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
