import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityRoomsComponent } from './availability-rooms.component';

describe('AvailabilityRoomsComponent', () => {
  let component: AvailabilityRoomsComponent;
  let fixture: ComponentFixture<AvailabilityRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
