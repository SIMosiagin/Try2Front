import {Component, DoCheck, OnInit} from '@angular/core';
import {ColumnList} from "../entity/ColumnList";
import {MappingService} from "../service/Mapping.service";
import {Skill} from "../entity/Skill";
import {SkillGroup} from "../entity/SkillGroup";
import {Router} from "@angular/router";
import {ValidationService} from "../service/Validation.service";

@Component({
  selector: 'app-mapping-skills',
  templateUrl: './mapping-skills.component.html',
  styleUrls: ['./mapping-skills.component.css']
})
export class MappingSkillsComponent implements OnInit, DoCheck {

  public mappingColumnsComp: Array<ColumnList>;
  public skillGroups: Array<SkillGroup>;

  constructor(public mappingService: MappingService,
              private router: Router) { }

  ngOnInit() {
    this.mappingColumnsComp = this.mappingService.getMappingColumns();
    this.skillGroups = this.mappingService.getSkillGroup();
    console.log("ngOnInit");
    console.log(this.mappingColumnsComp);
    console.log(this.skillGroups);
  }

  ngDoCheck() {
  }

  removeSkill(skill:ColumnList){
    this.mappingColumnsComp = this.mappingColumnsComp.filter(mapSkill => mapSkill != skill);
  }

  makeMapSkill(){
    console.log(this.mappingColumnsComp);
    console.log(this.skillGroups);
    console.log(this.mappingService.getSkillGroup());
    if (this.skillGroups == undefined){
      this.skillGroups = this.mappingService.getSkillGroup();
    }

  }
  goToMappingFields(){
    this.mappingService.setMappingColumns(this.mappingColumnsComp);
    this.router.navigate(['/mappingFields']);
    this.mappingService.uploadMappingSkills();
  }

  // updateSkill(skill: Skill){
  //   for(let i in this.mappingColumnsComp){
  //     if (this.mappingColumnsComp[i].skillDescription.id == skill.id){
  //       this.mappingColumnsComp[i].skillDescription = skill;
  //       break;
  //     }
  //   }
  // }
}
