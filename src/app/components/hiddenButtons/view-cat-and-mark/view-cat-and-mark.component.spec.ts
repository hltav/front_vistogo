import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatAndMarkComponent } from './view-cat-and-mark.component';

describe('ViewCatAndMarkComponent', () => {
  let component: ViewCatAndMarkComponent;
  let fixture: ComponentFixture<ViewCatAndMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCatAndMarkComponent]
    });
    fixture = TestBed.createComponent(ViewCatAndMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
