import {Injectable} from "@angular/core";
import {TableList} from "./TableList";
import {ColumnList} from "./ColumnList";
import {ValidationList} from "./ValidationList";


@Injectable()
export class Validation{

  constructor(public id:number,
              public tableList:TableList,
              public columnList:ColumnList,
              public validationList: ValidationList){

  }

}
