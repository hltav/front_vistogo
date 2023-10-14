import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductormodalComponent } from './conductormodal.component';

describe('ConductormodalComponent', () => {
  let component: ConductormodalComponent;
  let fixture: ComponentFixture<ConductormodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductormodalComponent]
    });
    fixture = TestBed.createComponent(ConductormodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
