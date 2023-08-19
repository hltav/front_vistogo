import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePhotoComponent } from './vehicle-photo.component';

describe('VehiclePhotoComponent', () => {
  let component: VehiclePhotoComponent;
  let fixture: ComponentFixture<VehiclePhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclePhotoComponent]
    });
    fixture = TestBed.createComponent(VehiclePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
