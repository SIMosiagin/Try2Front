import {Injectable} from "@angular/core";
import {Validation} from "./Validation";
import {ValidationParamsList} from "./ValidationParamsList";

@Injectable()
export class ValidationParams{

  constructor(public id:number,
              public validation:Validation,
              public validationParamList: ValidationParamsList,
              public value:string,
              public tag: string = "manual"){

  }

}
