import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargetitleComponent } from './margetitle.component';

describe('MargetitleComponent', () => {
  let component: MargetitleComponent;
  let fixture: ComponentFixture<MargetitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MargetitleComponent]
    });
    fixture = TestBed.createComponent(MargetitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
