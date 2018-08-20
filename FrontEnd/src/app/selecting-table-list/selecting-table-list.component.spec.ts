import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingTableListComponent } from './selecting-table-list.component';

describe('SelectingTableListComponent', () => {
  let component: SelectingTableListComponent;
  let fixture: ComponentFixture<SelectingTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectingTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectingTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
