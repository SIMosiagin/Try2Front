import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ColumnList} from "../entity/ColumnList";
import {SkillGroup} from "../entity/SkillGroup";
import {ValidationService} from "./Validation.service";
import {Router} from "@angular/router";


@Injectable()
export class MappingService{

  private mappingColumns: Array<ColumnList>;
  private skillGroup: Array<SkillGroup>;

  constructor(private http: HttpClient,
              private validationServece: ValidationService,
              private router : Router){
    //
  }

  setMappingColumns(array: Array<ColumnList> ){
    this.mappingColumns = array;
  }

  getMappingColumns(): Array<ColumnList>{
    return this.mappingColumns;
  }

  uploadMappingSkills(){
    this.http.post('http://localhost:8080/updateMappingSkills', this.mappingColumns).subscribe();
  }

  uploadMappingFields(){
    this.http.post('http://localhost:8080/updateMappingFields', this.mappingColumns).subscribe();
  }

  setSkillGroup(skillGroups:Array<SkillGroup>){
    this.skillGroup = skillGroups;
  }

  getSkillGroup(): Array<SkillGroup>{
    return this.skillGroup;
  }

  addSkillGroup(newGroup:SkillGroup){
    this.skillGroup.push(newGroup);
  }

  goToValidation(){
    //this.validationServece.getValFromServer();
    this.router.navigate(['/validationList']);
  }
}
