import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSqlTemplateComponent } from './validation-sql-template.component';

describe('ValidationSqlTemplateComponent', () => {
  let component: ValidationSqlTemplateComponent;
  let fixture: ComponentFixture<ValidationSqlTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationSqlTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSqlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
