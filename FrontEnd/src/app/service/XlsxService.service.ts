import {HttpClient} from "@angular/common/http";
import {XlsxList} from "../entity/XlsxList";
import {Injectable} from "@angular/core";
import {TableList} from "../entity/TableList";
import {MappingService} from "./Mapping.service";
import {ColumnList} from "../entity/ColumnList";
import {SkillGroup} from "../entity/SkillGroup";
import {Router} from "@angular/router";
import {ValidationService} from "./Validation.service";

@Injectable()
export class XlsxService {

  private xlsxList: XlsxList;
  private tableLists: TableList[];
  public selectedTransitTable:string = "";
  public selectedTableList: TableList;


  constructor(private http: HttpClient,
              private mappingService:MappingService,
              private router: Router,
              private validationService: ValidationService){
    //
  }

  getTableList():TableList{
    return this.selectedTableList;
  }

  getTTable():string{
    return this.selectedTransitTable;
  }

  setTTable(tTableName: string){
    this.selectedTransitTable = tTableName;
  }

  getTableLists(): TableList[]{
    return this.tableLists;
  }

  setTableLists(tableLists: Array<TableList>){
    this.tableLists = tableLists;
    this.setXlsxList(tableLists[0].xlsxList);
  }

  setXlsxList(xlsxList: XlsxList){
    this.xlsxList = xlsxList;
    console.log(this.xlsxList)
  }

  addTableList(ttName:string){
    let tableList:TableList = new TableList(null,ttName,Date.now(),null, this.xlsxList);
    if (this.tableLists == null){
      this.tableLists = new Array<TableList>();
    }
    this.tableLists.push(tableList);
  }

   async uploadXlsx() {
     await this.http.put('http://localhost:8080/uploadXlsxList', this.tableLists).subscribe();
     let req: string = "?table=" + this.selectedTransitTable + "&sheet=" + this.tableLists[0].xlsxList.workSheetName;

     var res: any = await this.http.get<Array<ColumnList>>('http://localhost:8080/getMapping/' + req).toPromise();
     res.then( mRes => this.mappingService.setMappingColumns(mRes))


     await this.http.get<Array<SkillGroup>>('http://localhost:8080/getSkillGroup').subscribe(res => {
       this.mappingService.setSkillGroup(res);
     });


   }

   getValidation(){
    this.validationService.getValFromServer();
   }

   testSync(){
      this.http.put('http://localhost:8080/uploadXlsxList', this.tableLists).subscribe();

      let req: string = "?table=" + this.selectedTransitTable + "&sheet=" + this.tableLists[0].xlsxList.workSheetName;
      this.http.get<Array<ColumnList>>('http://localhost:8080/getMapping/' + req).subscribe( resMap =>{
       for (let i in resMap){
         if(resMap[i].skillDescription.description == null){
           resMap[i].skillDescription.description = "".toString();
         }
         if (resMap[i].skillDescription.skillGroup != null){
           resMap[i].skillDescription.skillGroup.description = "".toString();
         }
       }
        this.mappingService.setMappingColumns(resMap);
        this.http.get<Array<SkillGroup>>('http://localhost:8080/getSkillGroup').subscribe(resSG => {
          this.mappingService.setSkillGroup(resSG);
          this.router.navigate(['/mappingSkills']);
          console.log(this.mappingService.getMappingColumns());
          this.http.get<TableList>('http://localhost:8080/getTableList' + "?table=" + this.selectedTransitTable)
            .subscribe( res => this.selectedTableList = res);
        });
     });
   }

}
