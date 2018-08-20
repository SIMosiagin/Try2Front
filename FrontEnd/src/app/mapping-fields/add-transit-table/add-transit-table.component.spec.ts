import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransitTableComponent } from './add-transit-table.component';

describe('AddTransitTableComponent', () => {
  let component: AddTransitTableComponent;
  let fixture: ComponentFixture<AddTransitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
