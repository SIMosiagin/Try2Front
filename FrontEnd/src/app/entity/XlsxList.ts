import {Injectable} from "@angular/core";


@Injectable()
export class XlsxList {

  constructor(public id:number,
              public xlsxName:string,
              public workSheetName:string){

  }
}
