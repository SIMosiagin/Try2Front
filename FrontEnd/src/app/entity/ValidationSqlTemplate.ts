import {Injectable} from "@angular/core";
import {ValidationList} from "./ValidationList";

@Injectable()
export class ValidationSqlTemplate{

  constructor(public id:number,
              public validationList:ValidationList,
              public sqlText:string){

  }

}
