import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDateValidationComponent } from './up-date-validation.component';

describe('UpDateValidationComponent', () => {
  let component: UpDateValidationComponent;
  let fixture: ComponentFixture<UpDateValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDateValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
