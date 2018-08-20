import {Injectable} from "@angular/core";
import {Skill} from "./Skill";
import {TableList} from "./TableList";

@Injectable()
export class ColumnList{

  constructor(public id:number,
              public name: string,
              public type: string,
              public size: number,
              public xlsxSkill: string,
              public xlsxGroup: string,
              public skillDescription:Skill,
              public tableList: TableList){

  }

}
