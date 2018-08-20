import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkillGroupComponent } from './update-skill-group.component';

describe('UpdateSkillGroupComponent', () => {
  let component: UpdateSkillGroupComponent;
  let fixture: ComponentFixture<UpdateSkillGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSkillGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSkillGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
