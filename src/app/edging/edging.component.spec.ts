import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgingComponent } from './edging.component';

describe('EdgingComponent', () => {
  let component: EdgingComponent;
  let fixture: ComponentFixture<EdgingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdgingComponent]
    });
    fixture = TestBed.createComponent(EdgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
