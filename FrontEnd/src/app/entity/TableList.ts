import {Injectable} from "@angular/core";
import {XlsxList} from "./XlsxList";


@Injectable()
export class TableList{

  constructor(public id:number,
              public name: string,
              public createdDate: number,
              public modifiedDate: number,
              public xlsxList: XlsxList){

  }
}
