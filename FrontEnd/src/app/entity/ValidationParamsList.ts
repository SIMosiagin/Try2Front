import {Injectable} from "@angular/core";
import {ValidationList} from "./ValidationList";

@Injectable()
export class ValidationParamsList{

  constructor(public id:number,
              public name:string,
              public type:string,
              public isMultiplate:boolean,
              public validationList: ValidationList){

  }

}
