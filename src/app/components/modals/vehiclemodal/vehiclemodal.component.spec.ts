import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclemodalComponent } from './vehiclemodal.component';

describe('VehiclemodalComponent', () => {
  let component: VehiclemodalComponent;
  let fixture: ComponentFixture<VehiclemodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclemodalComponent]
    });
    fixture = TestBed.createComponent(VehiclemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
