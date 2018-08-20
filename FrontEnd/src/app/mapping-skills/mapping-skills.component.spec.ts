import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingSkillsComponent } from './mapping-skills.component';

describe('MappingSkillsComponent', () => {
  let component: MappingSkillsComponent;
  let fixture: ComponentFixture<MappingSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
