import {Injectable} from "@angular/core";
import {SkillGroup} from "./SkillGroup";


@Injectable()
export class Skill{

  constructor(public id:number,
              public description:string,
              public name:string,
              public skillGroup:SkillGroup){

  }
}
