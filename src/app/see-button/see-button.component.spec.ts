import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeButtonComponent } from './see-button.component';

describe('SeeButtonComponent', () => {
  let component: SeeButtonComponent;
  let fixture: ComponentFixture<SeeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeButtonComponent]
    });
    fixture = TestBed.createComponent(SeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
