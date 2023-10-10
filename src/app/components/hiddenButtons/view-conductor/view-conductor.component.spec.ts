import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConductorComponent } from './view-conductor.component';

describe('ViewConductorComponent', () => {
  let component: ViewConductorComponent;
  let fixture: ComponentFixture<ViewConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewConductorComponent]
    });
    fixture = TestBed.createComponent(ViewConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
