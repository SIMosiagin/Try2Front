import {Injectable} from "@angular/core";
import {ValidationType} from "./ValidationType";

@Injectable()
export class ValidationList{

  constructor(public id:number,
              public name:string,
              public validationType: ValidationType,
              public isManual:boolean){

  }

}
